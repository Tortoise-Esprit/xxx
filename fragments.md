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
  日々の途中で目に留まった光と影、空気感、街角の断片を置いておくためのページです。
</p>

{% assign fragments = "2026-05-16-evening.jpg|風が心地よい|夕暮れの街路樹と歩道|f/3.5 · 1/60 · ISO 5000 · 16mm;2026-05-15-jiaozi.jpg|ぶらり入店した町中華の餃子|羽付き餃子|f/5.3 · 1/125 · ISO 900 · 36mm;2026-05-15-river.jpg|水面は静かに揺れている|昼の川辺|f/7.1 · 1/400 · ISO 100 · 28mm;2026-05-16-kaisendon.jpg|生しらすとねぎとろの幸せ|海鮮丼|f/3.8 · 1/125 · ISO 3200 · 20mm;2026-05-16-pizza.jpg|サイゼリヤときたらいつもこれ|きのこと野菜のピザ|f/4.2 · 1/125 · ISO 800 · 23mm;2026-05-16-river.jpg|初夏の気配漂う|夕方の水路|f/3.5 · 1/30 · ISO 12800 · 16mm;2026-05-17-qingjiao-rousi.jpg|お手軽中華料理|青椒肉絲|f/5 · 1/125 · ISO 3200 · 32mm;2026-05-17-sawara.jpg|旬の魚を楽しむ喜び|鰆の塩焼き|f/5.3 · 1/80 · ISO 3200 · 37mm;2026-05-17-tortoise.jpg|わたしの大切な家族|クサガメ|f/6.3 · 1/60 · ISO 8000 · 50mm" | split: ";" %}
{% assign first_fragment = fragments | first | split: "|" %}

<figure class="fragments-hero">
  <a href="{{ '/assets/images/fragments/' | append: first_fragment[0] | relative_url }}"
     class="glightbox"
     data-gallery="fragments"
     data-description="<span class='fragment-caption'><span class='fragment-title'>{{ first_fragment[2] }}</span><span class='fragment-note'>{{ first_fragment[1] }}</span><span class='fragment-exif'>{{ first_fragment[3] }}</span></span>">
    <img src="{{ '/assets/images/fragments/' | append: first_fragment[0] | relative_url }}" alt="{{ first_fragment[2] }}" loading="eager" fetchpriority="high" decoding="async">
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
