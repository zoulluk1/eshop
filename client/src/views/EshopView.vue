
  <template>

    <div class="col-md-10 offset-md-1 p-5 bg-light">

    <div class="row">
      <div class="col" v-for="Product in Products">
        <Product :id="Product.id" :productName="Product.productName" :productCode="Product.productCode"
                 :price="Product.price" :inStock="Product.inStock" :text="Product.text" :image="Product.image" ></Product>
      </div>
    </div>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  name: "EshopView",
  components: {Product},

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
