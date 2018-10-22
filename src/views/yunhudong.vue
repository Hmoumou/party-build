<template>
    <div class="yunhudong">
        <div class="item">
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'yunhudong',
        data(){
            return{
                page:1,
                rows:10,
                type:0,
                cates:0
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/hhdj/forum/forumList.do?page=${this.page}&rows=${this.rows}&type=${this.type}&cates=${this.cates}`).then(res=>{
                    console.log(res)
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>

</style>