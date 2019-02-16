<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <nuxt-link :to="link" >
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </nuxt-link>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <nuxt-link 
                        :to="link" 
                        class="title is-4">
                        {{ product.name }}
                    </nuxt-link>
                </div>
            </div>
        
            <div class="content">
                <p v-if="product.description">
                    {{ product.description }}
                </p>

                <span class="tag is-rounded is-medium">{{ product.price }}</span>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    },

    computed: {
        link() {
            return { 
                name: 'products-slug', 
                params: { 
                    slug: this.product.slug 
                    } 
                }
        }
    }
}
</script>

