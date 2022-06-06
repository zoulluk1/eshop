<template>
  <div class="card mb-3" style="width: 300px; height: 600px ">

        <img :src="image" alt="" class="card-img-top" style="height: 300px;width: 300px">
          <div class="card-body">
            <h4 class="card-title">{{ productName }} {{id}}</h4>
            <p class="card-subtitle">Kód produktu: {{ productCode }}</p>
            <p class="card-subtitle">Skladem: {{ inStock }} ks</p>
            <p class="card-subtitle">Cena: {{ price }} Kč</p>
            <p class="card-subtitle">Popis:</p>
            <p class="card-text text-truncate">{{text}}</p>
            <a href="#" class="btn btn-primary">Zobrazit produkt</a>
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