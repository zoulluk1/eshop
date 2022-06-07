<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Správa produktů</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Zadejte Id </label>
            <input v-model="product.id" type="number" class="form-control" placeholder="1"/>
          </div>
          <div class="col">
            <label class="form-label">Zadejte název produktu </label>
            <input v-model="product.productName" type="text" class="form-control" placeholder="Název produktu"/>
          </div>
          <div class="col">
            <label class="form-label">Zadejte kód produktu </label>
            <input v-model="product.productCode" type="text" class="form-control" placeholder="000-000"/>
          </div>
          <div class="col">
            <label class="form-label">Počet položek skladem </label>
            <input v-model="product.inStock" type="number" class="form-control" placeholder="1"/>
          </div>
          <div class="col">
            <label class="form-label">Cena </label>
            <input v-model="product.price" type="number" class="form-control" placeholder="1000"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Popis výrobku</label>
            <textarea v-model="product.text" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Vložte obrázek</label>
            <input v-model="product.image" type="url" class="form-control" placeholder="https://picsum.photos/seed/picsum/500"/>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click= "editData" class="btn float-end btn-primary">Aktualizovat <em class="bi-check"/></button>
    </div>
  </div>
</template>

<script>

export default {
  name: "UpdateProduct",
  data() {
    return {
      product: {
        id: 7,
        productCode: '000-000',
        productName: null,
        inStock: 0,
        price: 0,
        text: null,
        image: null,
      }
    }
  },


    async mounted() {
      const id = this.$route.params.id;
      this.product = this.getData(id);
    },
    methods: {

      async editData() {
        try {
          console.log(this.product);
          await fetch(`http://localhost:3000/products/${this.id}`,
              {
                method: 'PATCH',
                body: JSON.stringify(this.product),
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