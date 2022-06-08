<template>
  <div class="col-md-10 offset-md-1 p-5 bg-light">

    <div class="row">
      <div class="row" v-for="roduct in Products">
        <Product :id="roduct.id" :productName="roduct.productName" :productCode="roduct.productCode"
                 :price="roduct.price" :inStock="roduct.inStock" :text="roduct.text" :image="roduct.image" ></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/ManProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue';
export default {
  name: "ManagementView",
  components: {Product,UpdateProduct},

  data() {
    return {

        Products: []

    }
  },

    async created() {
      //await this.getData();
      const res = await fetch(`http://localhost:3000/products`, {method: 'GET'});
      console.log(res);
      this.Products = await res.json();
    },

}

</script>

<style scoped>

</style>




