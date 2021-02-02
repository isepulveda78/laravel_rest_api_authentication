<template>
    <div>
        <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
            <div class="card-body">
                <div class="alert alert-danger" role="alert" v-if="errors.root">
                       {{ errors.root }}
                </div>
                <h5 class="card-title text-center">Sign In</h5>
                <form class="form-signin" @submit.prevent="submit">
                <div class="form-label-group" v-bind:class="{ 'has-error': errors.email }">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">
                        <span class="help-block" v-if="errors.email">
                            {{ errors.email[0] }}
                        </span>
                    <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
                        <span class="help-block" v-if="errors.password">
                            {{ errors.password[0] }}
                        </span>
                    <label for="inputPassword">Password</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import localforage from 'localforage'
import { isEmpty } from 'lodash'

export default {
    data(){
        return{
            email: null,
            password: null,
            errors: []
        }
    },
     methods: {
            ...mapActions({
                login: 'auth/login'
            }),
             submit () {
                this.login({
                    payload: {
                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then(() => {
                    localforage.getItem('intended').then((name) => {
                        if (isEmpty(name)) {
                            this.$router.replace({ name: 'home' })
                            return
                        }

                        this.$router.replace({ name: name })
                    })
                })
            }
        }
}
</script>