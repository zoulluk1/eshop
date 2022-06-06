<template>
  <div class="card mb-3" style="max-width: 300px;max-height: 600px ">

        <img :src="image" alt="" class="card-img-top" style="max-height: 300px;max-width: 300px">
          <div class="card-body">
            <h4 class="card-title">{{ productName }} {{id}}</h4>
            <p class="card-subtitle">Kód produktu: {{ productCode }}</p>
            <p class="card-subtitle">Skladem: {{ amount }} ks</p>
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
    amount: Number,
    price: Number,
    text: String,
    image: String,

  }
}
</script>

<style scoped>

</style>