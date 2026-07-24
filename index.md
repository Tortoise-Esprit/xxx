---
layout: home
list_title: Recent Essays
---

<style>
.post-list .post-link,
.post-list .post-link:link {
  color: #8a7352;
}

.post-list .post-link:visited {
  color: #7b7468;
}

.post-list .post-link:hover {
  color: #5f4b2f;
  text-decoration: none;
}

.home-gateway {
  position: relative;
  overflow: hidden;
}

.home-gateway::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 2rem;
  width: 220px;
  height: 220px;
  background-color: var(--esprit-accent);
  -webkit-mask: url("/assets/img/logo-t-monochrome.svg") center / contain no-repeat;
  mask: url("/assets/img/logo-t-monochrome.svg") center / contain no-repeat;
  opacity: 0.045;
  pointer-events: none;
  transform: translateY(-50%);
  z-index: 0;
}

.home-gateway > * {
  position: relative;
  z-index: 1;
}

@media (prefers-color-scheme: dark) {
  .post-list .post-link,
  .post-list .post-link:link {
    color: #b49a6c;
  }

  .post-list .post-link:visited {
    color: #9a8f7f;
  }

  .post-list .post-link:hover {
    color: #d0b783;
  }

  .home-gateway::before {
    opacity: 0.055;
  }
}

@media screen and (max-width: 600px) {
  .home-gateway::before {
    right: 0.5rem;
    width: 150px;
    height: 150px;
    opacity: 0.035;
  }
}
</style>

<section class="home-gateway">
  <div class="home-gateway-kicker">New to Esprit?</div>
  <h1>はじめてお越しの方へ</h1>
  <p>
    精神病理学、哲学、人文学を手がかりに、こころの体験の成り立ちを考えるサイトです。
  </p>
  <a class="home-gateway-link" href="/start-here/">このサイトの読み方を見る →</a>
</section>
