<template>
    <div class="section">
        <div class="container is-fluid">
            <div class="columns is-centered">
            <div class="column is-6">
                <h1 class="title is-4">Sign in</h1>
                <form action="" @submit.prevent="signin">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input class="input" type="email" placeholder="e.g. alex@codecourse.com" v-model="form.email">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="password" v-model="form.password">
                    </div>
                </div>

                <div class="field">
                    <p class="control">
                    <button class="button is-info is-medium">
                        Sign in
                    </button>
                    </p>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email : '',
                password : ''
            }
        }
    },
    methods: {
        async signin() {
            await this.$auth.loginWith('local', {
                data: this.form
            })

            this.$router.replace({
                name: 'index'
            })
        }
    }
}
</script>
