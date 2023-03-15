
<template>
  <div class="row">
    <div class="container px-5">
      <div class="row g-3">
        <div class="col-12 col-md-3">
          <div class="mb-2">商品篩選</div>
          <div class="form-category">
            <div class="card p-3 mb-3 shadow-lg border-0">
              <p>商品類別</p>
              <form action="">
                <div class="form-check">
                  <input id="donut" type="checkbox" class="form-check-input">
                  <label for="donut" class="form-check-label">甜甜圈</label>
                </div>
                <div class="form-check">
                  <input id="coffee" type="checkbox" class="form-check-input">
                  <label for="coffee" class="form-check-label">咖啡飲品</label>
                </div>
              </form>
            </div>
          </div>
          <div class="form-Vegetarian">
            <div class="card p-3 shadow-lg border-0">
              <p>蛋奶素</p>
              <form action="">
                <div class="form-check">
                  <input id="isVegetarian" type="checkbox" class="form-check-input">
                  <label for="isVegetarian" class="form-check-label">蛋奶素</label>
                </div>
                <div class="form-check">
                  <input id="unVegetarian" type="checkbox" class="form-check-input">
                  <label for="unVegetarian" class="form-check-label">葷</label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-9">
          <div class="mb-2">共 9 件商品</div>
          <div class="products-list">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div class="col mb-3" v-for="product in products" :key="product.id">
                <div class="card h-100 shadow-lg border-0">
                  <img
                    :src="product.imageUrl"
                    :alt="product.title"
                    class="card-img-top"
                    style="height: 160px; object-fit: cover"
                  />
                  <div class="product-body">
                    <div class="card-body">
                      <div class="product-category badge mb-2">{{ product.category }}</div>
                      <div class="product-content d-flex">
                        <div class="product-info">
                          <div class="product-title">{{ product.title }}</div>
                          <div class="product-price">NT$ {{ product.price }}</div>
                        </div>
                        <button type="button" class="product-cart border-0 d-flex">
                          <span class="material-symbols-outlined"> add_shopping_cart </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
.product-category{
  color: #122456;
  background-color: #9da7c441;
}
.product-title{
  font-family: 'Note Sans TC';
  font-weight: 900;
  font-size: 1.2rem;
}
.product-price{
  font-family: 'League Spartan';
  font-weight: 600;
  font-size: 1.4rem;
  color: #a32334;
}
.product-cart {
  color: #fff;
  background-image: linear-gradient(to bottom right, #1e3891 20%, #122456 100%);;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #8b8d9398;
  width: 3rem;
  height: 3rem;
  margin-left: auto;
  align-self: center;
  justify-content: center;
  align-items: center;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts() {
      const url = `${VITE_URL}/api/${VITE_PATH}/products`
      this.$http
        .get(url)
        .then((res) => {
          console.log('產品列表:', res)
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    console.log('mounted')
    this.getProducts()
  }
}
</script>