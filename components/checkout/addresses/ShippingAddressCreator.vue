<template>
    <form action="#" @submit.prevent="store">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
            <input class="input" type="text" v-model="form.name">
            </div>
        </div>

        <div class="field">
            <label class="label">Address line 1</label>
            <div class="control">
            <input class="input" type="text" v-model="form.address_1">
            </div>
        </div>

        <div class="field">
            <label class="label">City</label>
            <div class="control">
            <input class="input" type="text" v-model="form.city">
            </div>
        </div>

        <div class="columns">
            <div class="column is-6">
            <div class="field">
                <label class="label">Postal code</label>
                <div class="control">
                <input class="input" type="text" v-model="form.postal_code">
                </div>
            </div>
            </div>
            <div class="column is-6">
            <div class="field">
                <label class="label">Country</label>
                <div class="control">
                    <CountryList v-model="form.country_id"/>
                </div>
            </div>
            </div>
        </div>

        <div class="field">
            <p class="control">
            <button class="button is-info">
                Add address
            </button>
            <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
            </p>
        </div>
    </form>
</template>

<script>
import CountryList from '@/components/form/CountryList'
export default {
    data() {
        return {
            form: {
                name: '',
                address_1: '',
                city: '',
                postal_code: '',
                country_id: '',
                default: true,
            },
        }
    },
    methods: {
        async store() {
                let response = await this.$axios.$post('addresses', this.form)

                this.$emit('created', response.data)
            }
    },
    components: {
        CountryList
    }
}
</script>

