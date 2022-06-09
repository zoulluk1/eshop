<template>
  <div class="card mb-3" style="width: 300px; height: 550px ">

        <img :src="image" alt="" class="card-img-top" style="height: 300px;width: 300px">
          <div class="card-body">
            <h6 class="card-title">{{ productName }}</h6>
            <p class="card-subtitle">Kód produktu: {{ productCode }}</p>
            <p class="card-subtitle">Skladem: {{ inStock }} ks</p>
            <p class="card-subtitle">Cena: {{ price }} Kč</p>
            <p class="card-subtitle">Popis:</p>
            <p class="card-text text-truncate">{{text}}</p>

          </div>
    <div class="card-footer " style="background-color: white">
      <router-link :to="`/ProductPage/${id}`" class="btn btn-primary">
        Zobrazit produkt
        <em class="bi-play"/>
      </router-link>
    </div>


  </div>

</template>

<script>
export default {
  name: "Product",

  props: {
    id: Number,
    productCode: String,
    productName: String,
    inStock: Number,
    price: Number,
    text: String,
    image: String,

  }
}
</script>

<style scoped>

</style>