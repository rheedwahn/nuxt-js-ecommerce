<template>
    <div class="field">
        <label class="label">
            {{ type }}
        </label>
        <div class="ontrol">
            <div class="elect is-fullwidth">
                <select name="" id="">
                    <option value="">Please Select a variation</option>
                    <option
                        v-for="variation in variations" 
                        :key="variation.id"
                        :value="variation.id"
                        >
                        {{ variation.name }}

                        <template v-if="variation.price_varies">
                            ({{ variation.price }})
                        </template>
                    </option>   
                </select>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    props:{
        type: {
            required: true,
            type: String
        },
        variations: {
            required: true,
            type: Array
        }
    } 
}
</script>

