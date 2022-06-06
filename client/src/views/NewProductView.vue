<template>
  <div class="row">
    <div class="col-8 offset-2">
      <NewProduct></NewProduct>
    </div>
  </div>
</template>

<script>
import NewProduct from '@/components/NewProduct.vue';
export default {
  name: "NewProductView",
  components: {NewProduct}
}
</script>

<style scoped>

</style>