<template>
    <nav class="navbar is-white">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    Home
                </nuxt-link>
                <div class="navbar-burger burger" data-target="nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu">
                <template v-for="category in categories">
                    <template v-if="category.children.length">
                        <div class="navbar-item is-hoverable has-dropdown" :key="category.slug">
                            <nuxt-link 
                                :to="{ name: 'categories-slug', params: { slug: category.slug } }"
                                class="navbar-link">
                                {{ category.name }}
                            </nuxt-link>
                            <div class="navbar-dropdown">
                                <nuxt-link 
                                    class="navbar-item"
                                    v-for="child in category.children"
                                    :key="child.slug"
                                    :to="{ name: 'categories-slug', params: { slug: child.slug } }"
                                    >
                                    {{ child.name }}
                                </nuxt-link>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <nuxt-link 
                            :to="{ name: 'categories-slug', params: { slug: category.slug } }" 
                            :key="category.slug" 
                            class="navbar-item">
                            {{ category.name }}
                        </nuxt-link>
                    </template>
                </template>
            </div>

            <div id="nav" class="navbar-menu">
                <div class="navbar-end">
                    <template v-if="!$auth.loggedIn">
                        <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item">
                            Sign in
                        </nuxt-link>
                    </template>
                    <template v-else>
                        <a href="#" class="navbar-item">
                            {{ $auth.user.name }}
                        </a>
                        <a href="#" class="navbar-item">
                            Orders
                        </a>
                        <nuxt-link :to="{ name : 'cart' }" class="navbar-item">
                            Cart ({{ cartCount }})
                        </nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters ({
            categories: 'categories',
            cartCount : 'cart/count'
        })
    }
}
</script>






