<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <router-link class="navbar-brand" :to="{ name: 'home' }">Single Page App</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                
                <li class="nav-item" v-if="user.authenticated">
                   <router-link class="nav-link" :to="{ name: 'timeline' }">Timeline</router-link>
                </li>
                <li class="nav-item" v-if="!user.authenticated">
                   <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
                </li>
            
                <li class="nav-item" v-if="!user.authenticated">
                    <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
                </li>
                  <li class="nav-item dropdown" v-if="user.authenticated">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         {{ user.data.name }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                             <li><a class="dropdown-item" href="#" @click.prevent="signout">Logout</a></li>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters({
            user: 'auth/user'
        }),
        methods: {
            ...mapActions({
                logout: 'auth/logout'
            }),
            signout () {
                this.logout().then(() => {
                    this.$router.replace({ name: 'home' })
                })
            }
        }
    }    
</script>
