export const state = () => ({
    products : [],
    empty : true,
    subtotal: '',
    total : '',
    changed: false
})

export const getters = {
    products (state) {
        return state.products
    },

    count (state) {
        return state.products.length
    },

    empty (state) {
        return state.empty
    },

    subtotal (state) {
        return state.subtotal
    },

    total (state) {
        return state.total
    },

    changed (state) {
        return state.changed
    }
}

export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    },
    SET_EMPTY (state, empty) {
        state.empty = empty
    },
    SET_SUBTOTAL (state, subtotal) {
        state.subtotal = subtotal
    },
    SET_TOTAL (state, total) {
        state.total = total
    },
    SET_CHANGED (state, changed) {
        state.changed = changed
    }
}

export const actions = {
    async getCart ({ commit }) {
        let response = await this.$axios.$get('carts')

        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)
        commit('SET_SUBTOTAL', response.meta.sub_total)
        commit('SET_TOTAL', response.meta.total)
        commit('SET_CHANGED', response.meta.changed)

        return response
    },

    async destroy ({ dispatch }, productId) {
        let response = await this.$axios.$delete(`carts/${productId}`)

        dispatch('getCart')
    },

    async update ({ dispatch }, {productId, quantity}) {
        let response = await this.$axios.$patch(`carts/${productId}`, {
            quantity
        })

        dispatch('getCart')
    },

    async store ({ dispatch }, products) {
        let response = await this.$axios.$post('carts', {
            products
        })

        dispatch('getCart')
    }

}