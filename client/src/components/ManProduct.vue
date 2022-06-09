<template>
  <div class="card mb-3" style="width: 1300px; height: 300px ">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <img :src="image" alt="" class="card-img" style="height: 90px;width: 90px">
        </div>
        <div class="col">
          <p class="card-title">ID: {{id }}</p>
        </div>
        <div class =col>
          <p class="card-title">Název produktu: {{productName }}</p>
        </div>
      </div>
      <div class="row">

        <div class="col">
          <p class="card-title">Kód produktu: {{ productCode }}</p>
        </div>
        <div class="col">
          <p class="card-subtitle">Skladem: {{ inStock }} ks</p>
        </div>

        <div class="col">
          <p class="card-subtitle">Cena: {{ price }} Kč</p>

        </div>
        <div class="row">

        </div>
        <div class="row">
          <p class="card-subtitle">Popis:</p>
          <textarea v-model="text" class="form-control" rows="3" ></textarea>
        </div>
        <div class="card-footer" style="background-color: white">
          <div class =row>
            <div class="col">
              <router-link :to="`/ProductPage/${id}`" class="btn btn-primary">
                Zobrazit produkt
                <em class="bi-play"/>
              </router-link>
            </div>
            <div class="col">
              <a href="#" @click="del(id)" class="btn btn-primary">Odstranit položku</a>
            </div>
            <div class="col">
              <router-link :to="`/UpdateProduct/${id}`" class="btn btn-primary">
                Upravit
                <em class="bi-play"/>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ManProduct",

  props: {
    id: null,
    productCode: null,
    productName: null,
    inStock: null,
    price: null,
    text: null,
    image: null,

  },
  methods: {

    async del(id) {
      try {

        const res = await fetch(`http://localhost:3000/products/${id}`, {method: 'DELETE'});

          alert("Deleted!");
        return res.json();
      }

      catch (e) {
        alert(e);
      }
    },

  }

}
</script>

<style scoped>

</style>