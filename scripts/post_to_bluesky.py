import os
import json
import datetime as dt
import urllib.request
import xml.etree.ElementTree as ET

BSKY_HANDLE = os.environ["BSKY_HANDLE"]
BSKY_APP_PASSWORD = os.environ["BSKY_APP_PASSWORD"]
FEED_URL = os.environ.get("FEED_URL", "https://tortoise-esprit.com/feed.xml")
STATE_FILE = os.environ.get("STATE_FILE", ".bsky_last_posted.json")


def fetch(url: str) -> bytes:
    with urllib.request.urlopen(url, timeout=30) as r:
        return r.read()


def fetch_req(req: urllib.request.Request) -> bytes:
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def latest_from_feed(xml_bytes: bytes):
    root = ET.fromstring(xml_bytes)

    # Atom: <feed><entry>...
    ns = {"atom": "http://www.w3.org/2005/Atom"}
    entry = root.find("atom:entry", ns)
    if entry is not None:
        title = (entry.findtext("atom:title", default="", namespaces=ns) or "").strip()
        link_el = entry.find("atom:link[@rel='alternate']", ns) or entry.find("atom:link", ns)
        url = (link_el.get("href") if link_el is not None else "").strip()
        return title, url

    # RSS2: <rss><channel><item>...
    channel = root.find("channel")
    if channel is not None:
        item = channel.find("item")
        if item is not None:
            title = (item.findtext("title") or "").strip()
            url = (item.findtext("link") or "").strip()
            return title, url

    raise RuntimeError("Feed format not recognized (Atom/RSS).")


def load_state():
    if not os.path.exists(STATE_FILE):
        return {}
    with open(STATE_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_state(state: dict):
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)


def bsky_create_session(handle: str, app_password: str):
    payload = json.dumps({"identifier": handle, "password": app_password}).encode("utf-8")
    req = urllib.request.Request(
        "https://bsky.social/xrpc/com.atproto.server.createSession",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    data = json.loads(fetch_req(req))
    return data["accessJwt"], data["did"]


def bsky_post(access_jwt: str, did: str, text: str, url: str):
    now = dt.datetime.now(dt.timezone.utc).isoformat().replace("+00:00", "Z")

    # URLの位置（文字インデックス）
    start_char = text.index(url)
    end_char = start_char + len(url)

    # facetsは「UTF-8バイト数」で指定する必要があるため、バイト位置に変換
    byte_start = len(text[:start_char].encode("utf-8"))
    byte_end = len(text[:end_char].encode("utf-8"))

    facets = [
        {
            "$type": "app.bsky.richtext.facet",
            "index": {"byteStart": byte_start, "byteEnd": byte_end},
            "features": [
                {"$type": "app.bsky.richtext.facet#link", "uri": url}
            ],
        }
    ]

    record = {
        "$type": "app.bsky.feed.post",
        "text": text,
        "facets": facets,
        "createdAt": now,
    }

    payload = json.dumps(
        {"repo": did, "collection": "app.bsky.feed.post", "record": record}
    ).encode("utf-8")

    req = urllib.request.Request(
        "https://bsky.social/xrpc/com.atproto.repo.createRecord",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {access_jwt}",
        },
        method="POST",
    )
    fetch_req(req)



def main():
    xml_bytes = fetch(FEED_URL)
    title, url = latest_from_feed(xml_bytes)
    if not url:
        raise RuntimeError("Could not extract latest post URL from feed.")

    state = load_state()
    if state.get("last_url") == url:
        print("No new post. Skipping.")
        return

    text = f"新記事：{title}\n{url}"
    access_jwt, did = bsky_create_session(BSKY_HANDLE, BSKY_APP_PASSWORD)
    bsky_post(access_jwt, did, text)

    state["last_url"] = url
    save_state(state)
    print("Posted:", url)


if __name__ == "__main__":
    main()
