<template>
<div class="header-wrap">
   <mt-header :title="title" >
        <mt-button icon='back' @click="()=>this.$router.back(-1)"
        slot='left'></mt-button>
   </mt-header>
</div>
  
</template>


<script>
import { Header } from "mint-ui";

export default {
  name: "Headers",
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style scoped >
.header-wrap{
  margin-bottom: 44px;
  height: 44px;
  width: 7.5rem;
}
</style>