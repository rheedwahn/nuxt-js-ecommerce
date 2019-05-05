<template>
    <table class="table is-hoverable is-fullwidth">
        <tbody>
            <tr v-for="address in addresses" :key="address.id">
                <td>
                    <p :class="{ 'has-text-weight-bold' :address.id === selected_address.id }">
                        {{ address.name }}<br>
                        {{ address.address_line_1 }}<br>
                        {{ address.city }}<br>
                        {{ address.postal_code }}<br>
                        {{ address.country.name }}<br>
                    </p>
                    <br>
                    <p v-if="!address.default">
                        <a href="" @click.prevent="$emit('switch_address', address)">
                            Make Default
                        </a>
                    </p>
                </td>
                <td>
                    <a href="" class="button is-info"
                    @click.prevent="$emit('click', address)"
                    >Ship Here</a>
                </td>
                <td v-if="!address.default">
                    <a href="" @click.prevent="$emit('delete', address)" class="delete is-medium">Delete Address</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props : {
        addresses : {
            required : true,
            type : Array
        },
        selected_address : {
            required : true,
            type : Object
        }
    }
}
</script>
