<template>

  <div class =" col-8 offset-2" style="background-color: white">
    <div class="row">
    <div class="col">
      <img :src="product.image" alt="" class="card-img-top mx-3" style="height: 400px ;width: 400px">
    </div>
    <div class="col">

      <h3 class="card-title m-5 mx-3" >{{ product.productName }}</h3>
      <p class="card-title m-3">Kód produktu: {{ product.productCode }}</p>
      <p class="card-title m-3">Skladem: {{ product.inStock }} ks</p>
      <div class= "col mx-3" style="background-color: darkgrey">
      <p class="card-title m-3 " style="background-color: darkgrey">Cena s DPH: {{ product.price }} Kč</p>
      <a href="#" class="btn btn-primary w-50 m-3 mx-5 " >Přidat do košíku </a>
      </div>
    </div>
      </div>
      <div class="card-body">


        <p class="card-subtitle">Popis:</p>
        <p class="card-text">{{product.text}}</p>
      </div>
    </div>







</template>

<script>
export default {
  name: "ProductPageView",
  data() {
    return {
      product: {
        id: null,
        productCode: null,
        productName: null,
        inStock: null,
        price: null,
        text: null,
        image: null,
      }
    }
  },



  async mounted() {
    const id = this.$route.params.id;
    this.product = await this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = await fetch(`http://localhost:3000/products/${id}`,{method: 'GET'});
      return res.json();

    }
  }


}
</script>

<style scoped>

</style>