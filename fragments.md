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

.fragments-hero img {
  width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
  display: block;
  border-radius: 0;
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
  .fragments-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

@media (prefers-color-scheme: dark) {
  .fragments-intro,
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

{% assign fragments = "originals/DSC_0287.JPG|低い雲の下に海岸線が霞む|霧の海岸|f/9 · 1/640 · ISO 100 · 28mm;originals/DSC_0346.JPG|白い岩礁と岬を見渡す|岬の海岸線|f/6.3 · 1/320 · ISO 100 · 32.5mm;originals/DSC_0360.JPG|厚い雲の裂け目から光が落ちる|雲間の光|f/11 · 1/1000 · ISO 100 · 16mm;originals/DSC_0371.JPG|岩礁と道が海へ沿って続く|海岸の曲線|f/7.1 · 1/400 · ISO 100 · 29mm;originals/DSC_0372.JPG|海を望む岬に一本の木が立つ|岬の一本木|f/9 · 1/640 · ISO 100 · 24.5mm;originals/DSC_0405.JPG|白い岩の上で休むアザラシたち|岩場のアザラシ|f/6.3 · 1/250 · ISO 160 · 50mm;originals/DSC_0519.JPG|船のそばを二頭のイルカが進む|イルカの並走|f/6.3 · 1/2000 · ISO 2000 · 50mm;originals/DSC_0595.JPG|波立つ海面から海鳥が飛び立つ|飛び立つ海鳥|f/16 · 1/2000 · ISO 1600 · 50mm;originals/DSC_0635.JPG|山影の前に白い息が立ち上がる|鯨の息|f/13 · 1/1000 · ISO 1600 · 50mm;originals/DSC_0650.JPG|丸い葉のあいだに紫の花が集まる|紫の花房|f/6 · 1/125 · ISO 800 · 46mm;originals/DSC_0729.JPG|海辺の青い小屋の屋根に海鳥が並ぶ|Nin’s Bin|f/9 · 1/640 · ISO 100 · 27.5mm;originals/DSC_0743.JPG|澄んだ空に国旗が揺れる|青空の旗|f/6.3 · 1/320 · ISO 100 · 50mm;originals/DSC_0759.JPG|海霧の向こうに雪山が連なる|朝の黒い浜|f/8 · 1/500 · ISO 100 · 33mm;originals/DSC_0769.JPG|濃い葉のあいだに黄色い花が二輪咲く|冬の黄色|f/5.6 · 1/250 · ISO 180 · 26.5mm;originals/DSC_0777.JPG|丘の上から海岸線と曲がる道を見下ろす|海へ下る道|f/9 · 1/640 · ISO 100 · 38mm;originals/DSC_0790.JPG|低い太陽と山並みを草地越しに見る|冬の草原|f/9 · 1/640 · ISO 100 · 24mm;originals/DSC_0792.JPG|青空へ高く伸びた木が風に傾く|風の木|f/5.6 · 1/250 · ISO 125 · 16mm;originals/DSC_0818.JPG|浜辺に組まれた流木が夕空に立つ|流木のかたち|f/5.6 · 1/250 · ISO 110 · 16mm;originals/DSC_0823.JPG|岩の上で海を眺める一頭|海辺のアザラシ|f/6.3 · 1/250 · ISO 360 · 50mm;originals/DSC_0835.JPG|細い雲の下に雪山が静かに横たわる|山並みと夕空|f/6.3 · 1/250 · ISO 100 · 50mm;originals/DSC_0836.JPG|夕暮れの空と雪をまとった稜線|山の稜線|f/7.1 · 1/400 · ISO 100 · 50mm;originals/DSC_0838.JPG|夕空の下で岩礁と海が静かに広がる|海辺の薄明|f/5.6 · 1/250 · ISO 200 · 17.5mm;originals/DSC_0849.JPG|博物館の映像展示に波の写真が連なる|波の記憶|f/5.6 · 1/250 · ISO 160 · 16mm;originals/DSC_0851.JPG|広い空の下に黒い礫浜が伸びる|黒い浜と青空|f/8 · 1/500 · ISO 100 · 19.5mm;originals/DSC_0856.JPG|風に巻き上げられた海霧が山裾を覆う|海霧の山影|f/25 · 1/1000 · ISO 1000 · 47mm;originals/DSC_0883.JPG|木と光の線が重なる吹き抜け|図書館の天井|f/3.5 · 1/160 · ISO 400 · 16mm;originals/DSC_0899.JPG|濡れた街路が丘へ向かって伸びる|雨の坂道|f/5.6 · 1/250 · ISO 180 · 19mm;originals/DSC_0905.JPG|大きく枝を広げた木が芝生を覆う|大樹の枝|f/4 · 1/250 · ISO 400 · 16mm;originals/DSC_0916.JPG|濡れた歩道に街の灯りが映る|雨上がりの街|f/3.5 · 1/160 · ISO 400 · 16mm;originals/DSC_0918.JPG|光の差す街を車が横切る|車窓の青|f/6.3 · 1/320 · ISO 100 · 26mm;originals/DSC_0927.JPG|港の上に暗い雨雲が垂れ込める|港の雨雲|f/6.3 · 1/320 · ISO 100 · 20.5mm" | split: ";" %}

<figure class="fragments-hero">
  <img
    src="{{ '/assets/images/fragments/kaikoura_hero.JPG' | relative_url }}"
    alt="Kaikōuraの海岸と雪山"
    loading="eager"
    decoding="async">
</figure>

<div class="fragments-grid">
  {% for item in fragments %}
    {% assign fragment = item | split: "|" %}
    <figure>
      <a href="{{ '/assets/images/' | append: fragment[0] | relative_url }}"
         class="glightbox"
         data-gallery="fragments"
         data-description="<span class='fragment-caption'><span class='fragment-title'>{{ fragment[2] }}</span><span class='fragment-note'>{{ fragment[1] }}</span>{% if fragment[3] and fragment[3] != '' %}<span class='fragment-exif'>{{ fragment[3] }}</span>{% endif %}</span>">
        <img src="{{ '/assets/images/' | append: fragment[0] | relative_url }}" alt="{{ fragment[1] }}" loading="lazy" decoding="async">
      </a>
      <figcaption>{{ fragment[2] }}</figcaption>
    </figure>
  {% endfor %}

  <!--
  写真を追加するときは、上の fragments 変数に以下の形式で追記します。
  セミコロン区切りで増やせます。

  assets/images/ 以下の相対パス|説明|表示タイトル|撮影情報

  例:
  fragments/2026-05-18-sample.jpg|夕暮れの道|Evening Road 2026-05-18|f/5.6 · 1/125 · ISO 400 · 35mm

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
