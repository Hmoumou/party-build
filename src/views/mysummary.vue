<template >
    <div class="mysummary">
        <!-- <upload v-on:load='getData' >
            <img :src="imgurl" >
        </upload> -->
        <upuserimg></upuserimg>
        <button class="btn" @click="handle">提交审核</button>
        
    </div>
</template>

<script>
import upload from '@/components/uploadimg'
import upuserimg from '@/components/upuserimg'
import { MessageBox } from 'mint-ui';
    export default {
        name:'mysummary',
        data(){
            return{
                imgurl:[],
            }
            // src:[]
        },
        methods:{
            handle(){
                MessageBox('提示', '此功能暂未开放');
            },
            getData(data){
                this.imgurl = data
            }
        },
        components:{
            // upload,
            upuserimg

        }

    }
</script>

<style scoped lang='scss'>
.mysummary{
    position: relative;
   .wrap{
       position: absolute;
       top: 100px;
       left: 3rem;
       font-size: 16px;
       text-align: center;
       line-height: 4;
        .img{
           border: 1px solid #c1c1c1;
    }
   }
   .btn{
       position: fixed;
       bottom: 2rem;
       left: 0;
       right: 0;
       width: 7.5rem;
       height: 1rem;
       background: rgb(239,71,58);
       border-radius: 6px;
       color:#fff;
       font-size: 16px;
   }
}
</style>