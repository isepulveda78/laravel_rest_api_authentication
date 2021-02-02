<template>
<div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
       
            <form class="form-signin" @submit.prevent="submit">

            <div class="form-label-group" v-bind:class="{ 'has-error' : errors.name }">
                <input type="text" class="form-control" placeholder="Name" autofocus v-model="name">
                <span class="help-block" v-if="errors.name">
                  {{ errors.name[0] }}
                </span>
                <label for="name">Name</label>
              </div>

              <div class="form-label-group" v-bind:class="{ 'has-error' : errors.email }">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
                <span class="help-block" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group" v-bind:class="{ 'has-error' : errors.password }">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
                <span class="help-block" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
                <label for="inputPassword">Password</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            name: null,
            email: null,
            password: null,
            errors: []
        }
    },
     methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            submit () {
                this.register({
                    payload: {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then(() => {
                    this.$router.replace({ name: 'home' })
                })
            }
        }
}
</script>

<style scoped>
.card-signin {
  border: 0;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

</style>