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
      return this.$route.meta.desc;
    }
  }
};
</script>

<style scoped lang='scss' >
.header-wrap{
  height: 44px;
  width: 7.5rem;
  z-index: 1;
   /deep/ .mint-header {
    background: rgb(197, 2, 6);
    height: 44px;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;  
  }
  //  /deep/ .mint-header .mint-button {
  //   display: none;
  // }
}
</style>