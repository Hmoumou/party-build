<template>
    <div class="scoredetail">
        <div class="item"  v-for="(item, index) in formData" :key="index">
           <div class="left">
               <span>{{item.typeName}}</span>
               <span>{{item.timeFormat}}</span>
            </div>
            <div class="right" >
                +0.1
            </div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
    export default {
        name:'scoredetail',
        data(){
            return{
                page:1,
                rows:10,
                formData:[]

            }
        },
        methods:{
            getData(){
                Indicator.open();
                this.$axios.get(`/hhdj/integral/integralList.do?page=${this.page}&&rows=${this.rows}`)
                .then(res=>{
                    console.log(res.data.rows)
                    this.formData = res.data.rows
                    // console.log(this.formData.typeName);
                    ndicator.close();
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.scoredetail{
    font-size: 16px;
    color:#666;
    .item{
        padding: 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #888;
        .right{
                color:red;
            }
            .left{
                display: flex;
                flex-direction: column;
                width: 3.5rem;
                span{
                    line-height: 1.5;
                    width: 3.5rem;
                }
            }
    }
    
}

</style>