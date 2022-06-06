<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Přidat nový produkt</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
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
            <input v-model="product.amount" type="number" class="form-control" placeholder="1"/>
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
      <button type="button" class="btn float-end btn-primary">Odeslat <em class="bi-check"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProduct",
  data() {
    return {
      product: {
        id: null,
        productCode: null,
        productName: null,
        amount: null,
        price: null,
        text: null,
        image: null,
      }
    }
  },
}
</script>

<style scoped>

</style>