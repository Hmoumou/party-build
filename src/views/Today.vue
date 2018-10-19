<template>
    <div class="today">
        <h1>这就是党史上的今天</h1>
    </div>
</template>

<script>
    export default {
        name:'Today',
        methods:{
            getData(){
                this.$axios.get('/proxy/proxy.do').then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        created(){
        //    this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.today{
    font-size: 20px;
}

</style>