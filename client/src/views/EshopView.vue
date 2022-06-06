
  <template>
    <div class="col-md-10 offset-md-1 p-5 bg-light">

    <div class="row">
      <div class="col" v-for="Product in Products">
        <Product :id="Product.id" :productName="Product.productName" :productCode="Product.productCode"
                 :price="Product.price" :amount="Product.amount" :text="Product.text" :image="Product.image" ></Product>
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
        Products: [
          {
            id: 1,
            image: 'https://cdn.prusa3d.com/content/images/product/default/3325.jpg',
            productName: "3D tiskárna",
            productCode: "123-456",
            price:10000,
            amount: 3,
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          },
          {
            id: 2,
            image: 'https://cdn.alza.cz/Foto/f8/EN/ENDER01V2.jpg',
            productName: "3D tiskárna",
            productCode: "123-456",
            price:10000,
            amount: 3,
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          },
          {
            id: 3,
            image: 'https://picsum.photos/seed/picsum/500',
            productName: "3D tiskárna",
            productCode: "123-456",
            price:10000,
            amount: 3,
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          },
          {
            id: 4,
            image: 'https://picsum.photos/seed/picsum/500',
            productName: "3D tiskárna",
            productCode: "123-456",
            price:10000,
            amount: 3,
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          }
        ]
      }
    }
  }

</script>

<style scoped>

</style>
