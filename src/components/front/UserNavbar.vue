<template>
  <header class="header position-fixed w-100" style="z-index: 1">
    <!-- logo -->
    <nav class="navbar navbar-expand-lg px-5">
      <div class="container-fluid">
        <router-link to="/" class="logo">
          <!-- <img
            class="logo"
            src="../../../public/pocket donut_logo(w).png"
            alt="pocket donut logo"
          /> -->
        </router-link>
        <!-- 漢堡按鈕 -->
        <button
          class="navbar-toggler border-0 d-flex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="material-symbols-outlined fs-1">menu</span>
        </button>
        <!-- <button type="button">
          <span class="material-symbols-outlined hover-text-secondary-200"> search </span>
        </button> -->

        <!-- 折疊導覽列 -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarText">
          <div class="d-flex justify-content-center text-center">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/products" class="nav-link">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/news" class="nav-link">News</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" aria-current="page">About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.logo {
  width: 6rem;
  aspect-ratio: 3/2;
  object-fit: cover;
}
.navbar {
  background-color: #152664;
  padding: 1rem 1rem;
  position: fixed;
  width: 100%;
}
.nav-item > a {
  color: #fff;
}
.material-symbols-outlined{
  color: #fff;
}
</style>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>
