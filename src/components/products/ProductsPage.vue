<template>
    <div>
        <h3>
Products
        </h3>

        <ul v-if="products && products.length">
      <li v-for="(product, index) in product" v-bind:key="index">
        <p><strong>{{product.name}}</strong></p>
        <p>{{product.price}}</p>
      </li>
    </ul>
    </div>

</template>

<script>
import axios from 'axios'


export default { 
    data() {
    return {
      products: [],
      errors: []
    }
  },
  async created() {
    try {
      const response = await axios.get('products')
      this.products = response.data
    } catch (e) {
      this.errors.push(e)
    }

  }
}
  
</script>