---
layout: page
title: Fragments
permalink: /fragments/
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">

<style>
.fragments-intro {
  margin: 0 auto 1rem;
  max-width: 42rem;
  color: #666;
  line-height: 1.9;
}

.fragments-equipment {
  margin: 0 auto 2rem;
  max-width: 42rem;
  color: #888;
  font-size: 0.82rem;
  line-height: 1.7;
  text-align: center;
  letter-spacing: 0.02em;
}

.fragments-hero {
  margin: 0 0 2.5rem;
}

.fragments-hero a {
  display: block;
}

.fragments-hero img,
.fragments-hero-video {
  width: 100%;
  max-height: 72vh;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

.fragments-hero figcaption {
  margin-top: 0.65rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #777;
  text-align: center;
}

.fragments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin-top: 2rem;
}

.fragments-grid figure {
  margin: 0;
}

.fragments-grid a {
  display: block;
  overflow: hidden;
  border-radius: 4px;
  background: #f4f1ee;
}

.fragments-grid img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.fragments-grid a:hover img {
  transform: scale(1.025);
  opacity: 0.92;
}

.fragments-grid figcaption {
  margin-top: 0.45rem;
  font-size: 0.82rem;
  line-height: 1.6;
  color: #777;
}

.fragments-copyright {
  margin: 2.5rem auto 0;
  max-width: 42rem;
  color: #999;
  font-size: 0.78rem;
  line-height: 1.7;
  text-align: center;
}

.fragment-caption {
  display: block;
  font-family: "Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", serif;
  color: #111;
  line-height: 1.8;
}

.fragment-title {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #111;
}

.fragment-note {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.86rem;
  color: #111;
}

.fragment-exif {
  display: block;
  font-size: 0.78rem;
  color: #111;
}

.glightbox-clean .gdesc-inner,
.glightbox-clean .gslide-desc {
  font-family: "Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", serif;
  color: #111;
}

@media (max-width: 640px) {
  .fragments-hero img,
  .fragments-hero-video {
    max-height: 58vh;
  }

  .fragments-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

@media (prefers-color-scheme: dark) {
  .fragments-intro,
  .fragments-hero figcaption,
  .fragments-grid figcaption {
    color: #aaa;
  }

  .fragments-equipment,
  .fragments-copyright {
    color: #999;
  }

  .fragments-grid a {
    background: #222;
  }
}
</style>

<p class="fragments-intro">
  日々の途中で目に留まった光と影、空気感、街角の断片を置いておくためのページです。
</p>

<p class="fragments-equipment">
  Photographed with Nikon Z fc and NIKKOR Z DX 16-50mm f/3.5-6.3 VR.
</p>

{% assign fragments = "hero.webp|静かな水平線|海と空のあわい|f/6.3 · 1/320 · ISO 100 · 50mm;2026-05-16-evening.jpg|風が心地よい|夕暮れの街路樹と歩道|f/3.5 · 1/60 · ISO 5000 · 16mm;2026-05-15-jiaozi.jpg|ぶらり入店した町中華の餃子|羽付き餃子|f/5.3 · 1/125 · ISO 900 · 36mm;2026-05-15-river.jpg|水面は静かに揺れている|昼の川辺|f/7.1 · 1/400 · ISO 100 · 28mm;2026-05-16-kaisendon.jpg|生しらすとねぎとろの幸せ|海鮮丼|f/3.8 · 1/125 · ISO 3200 · 20mm;2026-05-16-pizza.jpg|サイゼリヤときたらいつもこれ|きのこと野菜のピザ|f/4.2 · 1/125 · ISO 800 · 23mm;2026-05-16-river.jpg|初夏の気配漂う|夕方の水路|f/3.5 · 1/30 · ISO 12800 · 16mm;2026-05-17-qingjiao-rousi.jpg|お手軽中華料理|青椒肉絲|f/5 · 1/125 · ISO 3200 · 32mm;2026-05-17-sawara.jpg|旬の魚を楽しむ喜び|鰆の塩焼き|f/5.3 · 1/80 · ISO 3200 · 37mm;2026-05-17-tortoise.jpg|わたしの大切な家族|クサガメ|f/6.3 · 1/60 · ISO 8000 · 50mm;2026-06-30-airport-tower.webp|旅のはじまりの青|空港の塔|f/7.1 · 1/400 · ISO 100 · 16mm;2026-06-30-cheviot-street.webp|曇天の下を通り過ぎる|Cheviot の通り|f/6.3 · 1/320 · ISO 100 · 17mm;2026-06-30-cheviot-hotel.webp|低い雲と緑の丘|丘の麓のホテル|f/7.1 · 1/320 · ISO 100 · 16mm;2026-06-30-rocky-coast.webp|灰色の海を見下ろす|岩礁の海|f/7.1 · 1/400 · ISO 100 · 17mm;2026-06-30-sea-horizon.webp|海と空の境界がほどける|水平線|f/6.3 · 1/320 · ISO 100 · 17mm;2026-06-30-misty-bay.webp|山は雲の中に沈む|霧の湾|f/7.1 · 1/400 · ISO 100 · 50mm;2026-06-30-misty-coast.webp|霧に包まれた海岸|海辺の駐車場|f/9 · 1/640 · ISO 100 · 28mm;2026-06-30-cheviot-sidewalk.webp|旅先の町角|曇天の歩道|f/6.3 · 1/320 · ISO 100 · 25mm;2026-06-30-winter-road.webp|車道の向こうの裸木|冬木立の道|f/5.6 · 1/250 · ISO 100 · 30mm;2026-06-30-pale-sea.webp|淡い光が海に残る|淡い海|f/7.1 · 1/400 · ISO 100 · 16mm;2026-06-30-cloudbreak.webp|雲の裂け目から光が落ちる|雲間の光|f/11 · 1/1000 · ISO 100 · 16mm;2026-06-30-blue-clouds.webp|青空へほどけていく雲|青い雲間|f/9 · 1/640 · ISO 100 · 16mm;2026-06-30-cliff-tree.webp|岬の上に立つ一本の木|崖上の木|f/7.1 · 1/400 · ISO 100 · 50mm;2026-06-30-kaikoura-coast.webp|白い岩と青い海が続く|海岸線|f/7.1 · 1/400 · ISO 100 · 22mm;2026-06-30-south-bay.webp|湾を遠くまで見渡す|南の湾|f/7.1 · 1/400 · ISO 100 · 29mm;2026-06-30-rocks-and-surf.webp|波が岩を洗っている|岩と波|f/6.3 · 1/320 · ISO 100 · 50mm;2026-06-30-fur-seals.webp|白い岩の上で休む影|アザラシたち|f/6.3 · 1/250 · ISO 110 · 50mm;2026-06-30-seal-colony.webp|海辺の岩場にひそむアザラシ|岩場の群れ|f/6.3 · 1/320 · ISO 100 · 30.5mm" | split: ";" %}

<figure class="fragments-hero">
  <video
    class="fragments-hero-video"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="海と空のあわい">
    <source src="{{ '/assets/videos/fragments/DSC_0310_blog_light_6s.mp4' | relative_url }}" type="video/mp4">
  </video>
  <figcaption>海と空のあわい</figcaption>
</figure>

<div class="fragments-grid">
  {% for item in fragments offset: 1 %}
    {% assign fragment = item | split: "|" %}
    <figure>
      <a href="{{ '/assets/images/fragments/' | append: fragment[0] | relative_url }}"
         class="glightbox"
         data-gallery="fragments"
         data-description="<span class='fragment-caption'><span class='fragment-title'>{{ fragment[2] }}</span><span class='fragment-note'>{{ fragment[1] }}</span><span class='fragment-exif'>{{ fragment[3] }}</span></span>">
        <img src="{{ '/assets/images/fragments/' | append: fragment[0] | relative_url }}" alt="{{ fragment[2] }}" loading="lazy" decoding="async">
      </a>
      <figcaption>{{ fragment[2] }}</figcaption>
    </figure>
  {% endfor %}

  <!--
  写真を追加するときは、上の fragments 変数に以下の形式で追記します。
  セミコロン区切りで増やせます。

  ファイル名|説明|表示タイトル|撮影情報

  例:
  2026-05-18-sample.jpg|夕暮れの道|Evening Road 2026-05-18|f/5.6 · 1/125 · ISO 400 · 35mm

  画像ファイルは /assets/images/fragments/ に置く想定です。
  GLightboxにより、写真クリックで拡大表示され、左右の矢印で移動できます。
  撮影情報は、位置情報を含めず、表示したい項目だけ手入力する運用が安全です。
  -->
</div>

<p class="fragments-copyright">
  掲載写真の無断転載・無断使用を禁じます。
</p>

<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
<script>
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true,
    draggable: true
  });
</script>
