<template>
  <div class="col-md-10 offset-md-1 p-5 bg-light">

    <div class="row">
      <div class="row" v-for="Product in Products">
        <Product :id="Product.id" :productName="Product.productName" :productCode="Product.productCode"
                 :price="Product.price" :inStock="Product.inStock" :text="Product.text" :image="Product.image" ></Product>
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
  async created(){

    const res = await fetch('http://localhost:3000/products',{method:'GET'});
    console.log(res);
    this.Products=await res.json();
  }
}

</script>

<style scoped>

</style>




