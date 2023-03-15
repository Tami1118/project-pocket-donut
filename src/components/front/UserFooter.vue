<template>
  <footer class="footer">
    <div class="footer-info">
      <div class="row align-items-center">
        <div class="col-12 col-sm-3 d-flex justify-content-center justify-content-sm-start">
          <!-- <img
            class="footer-logo"
            src="../../../public/pocket donut_logo(w).png"
            alt="pocket donut logo"
          /> -->
        </div>
        <div class="col-12 col-sm-9">
          <ul class="nav d-flex justify-content-center justify-content-sm-end text-white">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link">News</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-right text-white">
      2023 Tami &copy; All Rights Reserved. 資料、圖片為練習使用，無商業用途 |
      <router-link to="/login" class="text-white">登入後台</router-link>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  width: 100%;
  background-color: #272a33;
}
.footer-info {
  padding: 3rem;
}
.footer-logo {
  width: 5rem;
  object-fit: cover;
}
.footer-right {
  padding: 1rem;
  text-align: center;
  border-top: 0.5px solid #fff;
}
a {
  text-decoration: none;
}
</style>