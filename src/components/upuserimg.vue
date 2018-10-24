<template>
    <label class="userimg">
        <input  type="file" :value="img">
        <i v-if="!img" class="iconfont icon-plus"></i>
        <img :src="img" v-else >
        
    </label>
    <!-- <label class="userimg">
            <input type="file" @change="onload" class="input">
            <img :src="img" v-if="img" >
            <i v-else></i>
        </label> -->
</template>

<script>
    export default {
        name:'userimg',
        data(){
            return{
                img:''
            }
        }
    }
</script>

<style scoped lang='scss'>
.userimg{
    border:1px solid #ccc;
    position: relative;
    margin: 100px 50px;
    width: 40px;
    height: 40px;
    display: block;
    overflow: hidden;
    // background: #f1f1f1;
    img{
        width: 100%;
        height: 100%;
    }
    /deep/ .icon-plus{
        position: absolute;
        top: 0;
        right: 0;
        font-size:24px; 
        color:#ddd;
        margin: 5px 7px 5px 5px;
    }
    input{
        position: absolute;
        top: 0;
        right: 0;
        background: #ccc;
        width: 40px;
        height: 40px;
        visibility: hidden;
    }
}

</style>