<template>
  <div class="card mb-3" style="width: 1300px; height: 400px ">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <img :src="image" alt="" class="card-img" style="height: 90px;width: 90px">
        </div>
        <div class="col">
          <p class="card-subtitle">ID: {{id }}</p>
        </div>
        <div class =col>
          <input v-model="productName" type="text" class="form-control" placeholder="Název produktu"/>
        </div>
      </div>
      <div class="row">

        <div class="col">
          <p >Kód produktu:</p>
        </div>
        <div class="col">
          <input v-model="productCode" type="text" class="form-control" placeholder="000-000"/>
        </div>
        <div class="col">
          <p >Skladem:</p>
        </div>
        <div class="col">
          <input v-model="inStock" type="number" class="form-control" placeholder="1"/>
        </div>
        <div class="col">
          <p >ks</p>
        </div>
        <div class="col">
          <p >Cena:</p>
        </div>
        <div class="col">
          <input v-model="price" type="number" class="form-control" placeholder="1000"/>
        </div>
        <div class="col">
          <p >kč</p>
        </div>
        <div class="row">
          <p class="form-label">Vložte obrázek</p>
          <input v-model="image" type="url" class="form-control" placeholder="https://picsum.photos/seed/picsum/500"/>
        </div>
        <div class="row">
          <p class="card-subtitle">Popis:</p>
          <textarea v-model="text" class="form-control" rows="3" ></textarea>
        </div>
        <div class="card-footer">
          <div class =row>
            <div class="col">
              <a href="#" class="btn btn-primary">Zobrazit produkt</a>
            </div>
            <div class="col">
              <a href="#" @click="del(id)" class="btn btn-primary">Odstranit položku</a>
            </div>
            <div class="col">
              <a href="#" @click="editData(id)" class="btn btn-primary">upravit</a>
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
  async mounted() {
    const id = this.$route.params.id;
    this.props = await this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = await fetch(`http://localhost:3000/products/${id}`, {method: 'GET'});
      return res.json();

    },
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
    async editData(id) {

      try {
        console.log(this.props);
        await fetch(`http://localhost:3000/products/${id}`,
            {
              method: 'PATCH',
              body: JSON.stringify(this.props),
              headers: {
                'Content-type': 'application/json'
              }
            }
        )

        alert("Edited!");

      } catch (e) {
        alert(e);
      }
    }
  }

}
</script>

<style scoped>

</style>