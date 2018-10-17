<template>
    <div>
        <div class="container">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import Footer from "@/components/Footer.vue";
export default {
  components: {
        Footer
  }
};
</script>

<style scoped>
</style>