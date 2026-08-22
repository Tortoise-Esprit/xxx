---
layout: page
title: Essays
permalink: /essays/
---

これまでに公開したエッセイの一覧です。新しいものから年ごとに並べています。

<div class="essay-archive">
  {%- assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" -%}
  {%- for year in posts_by_year -%}
    <h2>{{ year.name }}</h2>
    <ul class="post-list">
      {%- for post in year.items -%}
        <li>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
        </li>
      {%- endfor -%}
    </ul>
  {%- endfor -%}
</div>
