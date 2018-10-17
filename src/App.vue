<template>
  <div id="app">   
    <router-view/>  
  </div>
</template>

<script>

export default {
  name: 'App',
   
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app{
  position: relative;
}

.fll{ float: left;}

.flr{float: right;}

.m0at{margin: 0 auto;}

img{
  display: block;
}
a{
  list-style: none;
  text-decoration: none;
  color: #555;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}

</style>
