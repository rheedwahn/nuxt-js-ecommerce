<template>
  <div class="section">
    <div class="container is fluid">
        <div class="column is-multiline">
            <div class="column is-3" v-for="product in products" :key="product.slug">
                <Product :product="product"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/products/Product'
export default {

    data() {
        return {
            products: []
        }
    },

    components: {
        Product
    },

    async asyncData ({ params, app }) {
        let response = await app.$axios.$get(`http://cart.test/api/products?category=${params.slug}`)

        return {
            products: response.data
        }
    }
}
</script>
