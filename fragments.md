---
layout: page
title: Fragments
permalink: /fragments/
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">

<style>
.fragments-intro {
  margin: 0 auto 2rem;
  max-width: 42rem;
  color: #666;
  line-height: 1.9;
}

.fragments-hero {
  margin: 0 0 2.5rem;
}

.fragments-hero a {
  display: block;
}

.fragments-hero img {
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

@media (max-width: 640px) {
  .fragments-hero img {
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

  .fragments-grid a {
    background: #222;
  }
}
</style>

<p class="fragments-intro">
  日々の途中で目に留まった光、影、水面、食卓、街角の断片を置いておくためのページです。
  場所や人物を説明しすぎず、文章の手前にある気配として残していきます。
</p>

{% assign fragments = "2026-05-15-jiaozi.jpg|羽根つき餃子|Jiaozi, 2026-05-15,2026-05-15-river.jpg|昼の川辺|River, 2026-05-15,2026-05-16-evening.jpg|夕暮れの街路樹と歩道|Evening, 2026-05-16,2026-05-16-kaisendon.jpg|海鮮丼|Kaisendon, 2026-05-16,2026-05-16-pizza.jpg|食卓のピザ|Pizza, 2026-05-16,2026-05-16-river.jpg|夕方の水路|River, 2026-05-16,2026-05-17-qingjiao-rousi.jpg|青椒肉絲|Qingjiao Rousi, 2026-05-17,2026-05-17-sawara.jpg|鰆の皿|Sawara, 2026-05-17,2026-05-17-tortoise.jpg|水槽の亀|Tortoise, 2026-05-17" | split: "," %}
{% assign first_fragment = fragments | first | split: "|" %}

<figure class="fragments-hero">
  <a href="{{ '/assets/images/fragments/' | append: first_fragment[0] | relative_url }}"
     class="glightbox"
     data-gallery="fragments"
     data-title="{{ first_fragment[2] }}"
     data-description="{{ first_fragment[1] }}">
    <img src="{{ '/assets/images/fragments/' | append: first_fragment[0] | relative_url }}" alt="{{ first_fragment[1] }}">
  </a>
  <figcaption>{{ first_fragment[2] }}</figcaption>
</figure>

<div class="fragments-grid">
  {% for item in fragments %}
    {% assign fragment = item | split: "|" %}
    <figure>
      <a href="{{ '/assets/images/fragments/' | append: fragment[0] | relative_url }}"
         class="glightbox"
         data-gallery="fragments"
         data-title="{{ fragment[2] }}"
         data-description="{{ fragment[1] }}">
        <img src="{{ '/assets/images/fragments/' | append: fragment[0] | relative_url }}" alt="{{ fragment[1] }}">
      </a>
      <figcaption>{{ fragment[2] }}</figcaption>
    </figure>
  {% endfor %}

  <!--
  写真を追加するときは、上の fragments 変数に以下の形式で追記します。
  カンマ区切りで増やせます。

  ファイル名|altに使う短い説明|表示するキャプション

  画像ファイルは /assets/images/fragments/ に置く想定です。
  GLightboxにより、写真クリックで拡大表示され、左右の矢印で移動できます。
  -->
</div>

<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
<script>
  const fragmentsLightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true,
    draggable: true
  });
</script>
