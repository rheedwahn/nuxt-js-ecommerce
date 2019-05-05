<template>
    <article class="message">
        <div class="message-body">
            <h1 class="title is-5">Ship to</h1>
            <template v-if="selecting">
                <ShippingAddressSelector 
                :addresses="addresses"
                :selected_address="selectedAddress"
                @click="addressSelected"
                @delete="addressToDelete"
                @switch_address="updateDefault"
                />
            </template>
            <template v-else-if="creating">
                <ShippingAddressCreator 
                @created="created"
                @cancel="creating = false"
                />
            </template>
            <template v-else>
                <template v-if="selectedAddress">
                    <p>
                        {{ selectedAddress.name }}<br>
                        {{ selectedAddress.address_line_1 }}<br>
                        {{ selectedAddress.city }}<br>
                        {{ selectedAddress.country.name }}<br>
                        {{ selectedAddress.postal_code }}
                    </p>
                    <br>

                    <div class="field is-grouped">
                        <p class="control">
                            <a href="" class="button is-info" @click.prevent="selecting = true">Change Shipping Address</a>
                        </p>
                        <p class="control">
                            <a href="" class="button is-info" @click.prevent="creating = true">Add New Address</a>
                        </p>
                    </div>
                </template>
            </template>
        </div>
    </article>
</template>

<script>
import ShippingAddressSelector from '@/components/checkout/addresses/ShippingAddressSelector'
import ShippingAddressCreator from '@/components/checkout/addresses/ShippingAddressCreator'
export default {
    data () {
        return {
            selecting : false,
            creating : false,
            localAddresses : this.addresses,
            selectedAddress : null,
            address_id : null
        }
    },
    props: {
        addresses : {
            required : true,
            type: Array
        }
    },
    computed : {
        defaultAddress() {
            return this.localAddresses.find(address => address.default === true)
        }
    },
    methods: {
        addressSelected (address) {
            this.switchAddress(address)
            this.selecting = false
        },
        switchAddress (address) {
            this.selectedAddress = address
        },
        created(address) {
            this.localAddresses.push(address)

            this.creating = false

            this.switchAddress(address)
        },
        async addressToDelete(address){
            this.address_id = address.id
            if(confirm('Are you sure you want to delete this address?')){
                let response = await this.$axios.$delete(`addresses/${this.address_id}`)

                this.addresses = response.data
            }
        },
        async updateDefault(address){
            this.address_id = address.id
            if(confirm('Are you sure you want to make this address default?')){
                let response = await this.$axios.$patch(`addresses/${this.address_id}`)

                this.addresses = response.data
            }
        }
    },
    created() {
        if(this.addresses.length){
            this.switchAddress(this.defaultAddress)
        }
    },
    components : {
        ShippingAddressSelector,
        ShippingAddressCreator
    },
}
</script>
