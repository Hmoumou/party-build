<template>
    <div class="score-wrap">
        <div class="wrap">
            <p class="score">{{formData.totalScore}}</p>
        </div>
        <div class="details">
            <router-link to='/scoredetail' class="clearfix">
            <img src="../imgs/量化积分icon@2x.png" class="img fll">
            <span class="fll">积分明细</span>
            <i class="iconfont icon-arrow-right-copy-copy flr"></i>
        </router-link>
        </div>
        <div class="score-rule">
            <span>积分规则</span>
            <span><img src="../imgs/问号icon@2x.png" class="imgwenhao" ></span>
        </div>
        <div class="list">
            <div class="item">
                <span class="left">登录APP</span>
                <div class="right">5</div>
            </div>
             <div class="item">
                <span class="left">完善个人信息</span>
                <div class="right">2</div>
            </div>
             <div class="item">
                <span class="left">查看积分</span>
                <div class="right">1</div>
            </div>
             <div class="item">
                <span class="left">按时交纳党费</span>
                <div class="right">10</div>
            </div>
             <div class="item">
                <span class="left">查看通知</span>
                <div class="right">2</div>
            </div>
             <div class="item">
                <span class="left">了解学院工作动态</span>
                <div class="right">5</div>
            </div>
             <div class="item">
                <span class="left">上交思想汇报经审核通过</span>
                <div class="right">5</div>
            </div>
             <div class="item">
                <span class="left">主动学习相关文件</span>
                <div class="right">10</div>
            </div>
            <div class="item">
                <span class="left">认真撰写心得总结并上交，经审核通过</span>
                <div class="right">5</div>
            </div>
             <div class="item">
                <span class="left">提交个人总结，并参与评议</span>
                <div class="right">2</div>
            </div>
             <div class="item">
                <span class="left">积极参与互动</span>
                <div class="right">5</div>
            </div>
             <div class="item">
                <span class="left">学习党建知识</span>
                <div class="right">6</div>
            </div>
             <div class="item">
                <span class="left">学习党史</span>
                <div class="right">10</div>
            </div>
             <div class="item">
                <span class="left">创先争优事迹</span>
                <div class="right">10</div>
            </div>
             <div class="item">
                <span class="left">学党章，学习习近平总书记系列讲话</span>
                <div class="right">10</div>
            </div>
             <div class="item">
                <span class="left">用镜头记录两学一做过程中令人感动的人和事</span>
                <div class="right">3</div>
            </div>
             <div class="item">
                <span class="left">关注并积极参与特色活动</span>
                <div class="right">5</div>
            </div>
             <div class="item">
                <span class="left">制度化，常态化建设</span>
                <div class="right">5</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
    export default {
        name:'score',
        data(){
            return{
                formData:{}
            }
        },
        methods:{
            getData(){
                Indicator.open();
                this.$axios.get('/hhdj/user/userInfo.do').then(res=>{
                    this.formData = res.data.data
                    // console.log(this.formData);
                    Indicator.close();
                })
            },

        },
        created(){
           this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.score-wrap{
    color:#e1e1e1;
    position: relative;
    width: 7.5rem;
    box-sizing: border-box;
    font-size: 14px;
    height: 800px;
    background: rgb(238,238,238);
    .wrap{ 
        color:#e1e1e1;
        width: 7.5rem;
        height: 3rem;
        box-sizing: border-box;
        background: url('../imgs/积分bg@2x.png');
        background-size: 100% 100%;
        .score{  
           
            position: absolute; 
            margin-top: 1.3rem;
            font-size: 18px;
            left:45%;
            width: 1rem;
            height: 1rem;
            color:#fff;

        }
    }
    .details{
       
        padding: 10px;
        width: 7.5rem;
        box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            margin-top: 10px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            background: #fff;
            span{
             color: #666;
            }
            a{
            width: 7.5rem;
            height: 30px;
             line-height: 30px;
            }
        .img{
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }
    .score-rule{
        color:#333;
        width: 7.5rem;
        display: flex;
        box-sizing: border-box;
        padding: 5px 10px;
        flex-direction: row;
        justify-content: space-between;
        img{
            width: 20px;
            height: 20px;
        }
    }
    .list{
        color:rgb(153,153,153);
        background: rgb(238,238,238);
        border-top: 1px solid #d4d4d4;
        border-bottom: 1px solid #d4d4d4;
         box-sizing: border-box;
         padding: 0 0 30px 0;
        
        .item{
            background: #fff;
            display: flex;
            justify-content: space-between;
             box-sizing: border-box;
             padding:  8px 15px;
             border-bottom: 1px solid #d4d4d4;
            .right{
                color:red;
            }
        }
    }
}

</style>