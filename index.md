<div id="sparkle-bg" aria-hidden="true"></div>

<style>
  /* 背景レイヤ（トップページ限定） */
  #sparkle-bg{
    position: fixed;
    inset: 0;
    z-index: 0;
    background: #f2f2f2;
    pointer-events: none;
  }

  /* 粒子（グリッターっぽいノイズ） */
  #sparkle-bg::before{
    content:"";
    position:absolute;
    inset:-20px;
    opacity: 0.09;                  /* 強さ：0.05〜0.12くらいで調整 */
    mix-blend-mode: overlay;
    background-size: 240px 240px;
    background-position: var(--dx, 0px) var(--dy, 0px);
    filter: brightness(calc(1 + var(--spark, 0)));
    transform: translate3d(0,0,0);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
  }

  /* うっすらハイライト（紙の反射っぽい） */
  #sparkle-bg::after{
    content:"";
    position:absolute;
    inset:0;
    opacity: 0.06;                  /* 強さ：0.03〜0.08 */
    background:
      radial-gradient(circle at 25% 20%, rgba(255,255,255,.9), transparent 45%),
      radial-gradient(circle at 70% 80%, rgba(255,255,255,.7), transparent 55%);
    transform: translateY(var(--y, 0px));
  }

  /* コンテンツを前面に（トップページだけ上書き） */
  .site-header, .page-content, .site-footer{
    position: relative;
    z-index: 1;
  }

  /* 動きが苦手な人は自動で無効化 */
  @media (prefers-reduced-motion: reduce){
    #sparkle-bg{ display:none; }
  }
</style>

<script>
(() => {
  const bg = document.getElementById("sparkle-bg");
  if (!bg) return;

  // prefers-reduced-motion なら動かさない
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  function onScroll(){
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const y = window.scrollY || 0;

      // 変化は「ほぼ気配」レベルに固定（ここを触ると雰囲気が変わります）
      bg.style.setProperty("--y",  `${(y * 0.015).toFixed(2)}px`);
      bg.style.setProperty("--dx", `${((y * 0.06) % 240).toFixed(2)}px`);
      bg.style.setProperty("--dy", `${((y * 0.04) % 240).toFixed(2)}px`);
      bg.style.setProperty("--spark", (Math.sin(y * 0.01) * 0.05).toFixed(3));

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
</script>
