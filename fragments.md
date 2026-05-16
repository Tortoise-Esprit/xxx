---
layout: page
title: Fragments
permalink: /fragments/
---

<style>
.fragments-intro {
  margin: 0 0 2rem;
  color: #666;
  line-height: 1.9;
}

.fragments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.fragments-grid figure {
  margin: 0;
}

.fragments-grid img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.fragments-grid figcaption {
  margin-top: 0.45rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #777;
}

@media (prefers-color-scheme: dark) {
  .fragments-intro {
    color: #aaa;
  }

  .fragments-grid figcaption {
    color: #aaa;
  }
}
</style>

<p class="fragments-intro">
  日々の途中で目に留まった光、影、水面、食卓、街角の断片を置いておくためのページです。
  場所や人物を説明しすぎず、文章の手前にある気配として残していきます。
</p>

<div class="fragments-grid">
  <!--
  写真を追加するときは、以下の figure をコピーして使います。
  画像ファイルは /assets/images/fragments/ などに置く想定です。

  <figure>
    <img src="/assets/images/fragments/example.jpg" alt="写真の簡単な説明">
    <figcaption>短いキャプション</figcaption>
  </figure>
  -->
</div>
