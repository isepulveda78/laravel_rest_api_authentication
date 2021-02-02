<template>
    <div>
        <navigation></navigation>
        
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import navigation from './Navigation'
export default {
    component: navigation,
}
</script>