<template >
    <div class="mysummary">
        <div class="wrap">
            <upload-img class="img"></upload-img>
            <div class="box">
                <!-- <img :src="src" > -->
            </div>
            <span>请上传图片</span>
        </div>
        <button class="btn" @click="handle">提交审核</button>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
    export default {
        name:'mysummary',
        data(){
            return{

            }
            // src:[]
        },
        methods:{
            handle(){
                MessageBox('提示', '此功能暂未开放');
            }
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