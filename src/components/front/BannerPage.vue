<template>
  <div class="banner-page">
    <div class="banner-pic">
      <img src="" alt="">
    </div>
    <div class="banner-text">
      {{ bannerTitle }}
    </div>
  </div>
</template>

<style lang="scss">
  .banner-page{
    width: 100%;
    height: 42rem;
  }
  .banner-pic{
    width: 100%;
    object-fit: cover;
  }
  .banner-text{
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>

<script>
export default {
  props: ['bannerTitle']
}
</script>