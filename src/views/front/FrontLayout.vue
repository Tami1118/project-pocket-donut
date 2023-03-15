<template>
  <UserNavbar></UserNavbar>

  <main class="main">
    <router-view></router-view>
  </main>

  <UserFooter></UserFooter>
</template>

<style>
  .main{
    padding-top: 110px;
  }
</style>

<script>
import { RouterView } from 'vue-router'
import UserNavbar from '../../components/front/UserNavbar.vue'
import UserFooter from '../../components/front/UserFooter.vue'

export default {
  components: {
    RouterView,
    UserNavbar,
    UserFooter
  }
}
</script>