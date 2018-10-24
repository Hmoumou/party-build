<template>
    <div class="democratic">
        <div class="btn-wrap">
            <button class="btn" @click="handle1">个人总结</button>
            <button class="btn" @click="handle2">民主评议</button>
        </div>
    </div>
</template>

<script>
import { MessageBox,Indicator} from 'mint-ui';

    export default {
        name:'democratic',
        data(){
            return{
                formData:{},
            }
        },
        methods:{
            handle1(){
                this.$router.push('/mysummary')
            },
            handle2(){
                  MessageBox('提示', '此功能暂未开放');
            },

        },
    }
</script>

<style scoped lang='scss'>
.democratic{
    width: 7.5rem;
    position: relative;
    .btn-wrap{
        position: absolute;
        width: 4rem;
        top:3rem;
        left:1.725rem;
        height: 200px;
        // border: 1px solid red;
        line-height: 1.6;
        .btn{
            width: 4rem;
            background: #ef473a;
            border-radius: 6px;
            color:#f1f1f1;
            font-size: 16px;
            height: 1rem;
     }
    }
}

</style>