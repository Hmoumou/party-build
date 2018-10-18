<template>
    <div>
        <Headers></Headers>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
 
    export default {
        components:{
            Headers
        }
    }
</script>

<style scoped>

</style>