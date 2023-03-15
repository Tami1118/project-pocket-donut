<template>
  <div class="time-line">
    <div class="step">
      <div class="step-num fs-4">1</div>
      <div class="step-text">確認購物車</div>
    </div>
    <div class="step">
      <div class="step-num fs-4">2</div>
      <div class="step-text">付款及填寫資料</div>
    </div>
    <div class="step">
      <div class="step-num fs-4">3</div>
      <div class="step-text">完成訂購</div>
    </div>
  </div>
</template>

<style lang="scss">
  .time-line{
    width: 80%;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
  }
  .step-num{
    width: 3rem;
    aspect-ratio: 1/1;
    background-color: #888;
    border-radius: 5rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>