<template>
  <div class="row">
    <div class="col-8 offset-2">
      <UpdateProduct></UpdateProduct>
    </div>
  </div>
</template>

<script>
import UpdateProduct from '@/components/UpdateProduct.vue';
export default {
  name: "UpdateProductView",
  components: {UpdateProduct}
}
</script>

<style scoped>
</style>