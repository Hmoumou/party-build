<template>
    <div class="hudongdetails">
        <div class="item-wrap clearfix">      
            <div class="user-wrap">
                <div class="left">
                    <img :src="itemData.header"  class="img">
                    <div class="user">
                        <span>{{itemData.username?itemData.username:'游客'}}</span>
                        <p class="time">
                            <i class="iconfont icon-shijian1"></i>
                            <span>{{itemData.currentTime}}</span>
                            <i class="iconfont icon-xiaoxi3"></i>
                            <span>{{itemData.isPriv==0?'公开':'非公开'}}</span>
                        </p>
                    </div>
                </div>
            </div>    
            <div class="content">
                {{itemData.content}}
            </div>
        </div>
        <div class="list" v-for="(item, index) in listData"  :key='index'>   
            <div class="user-wrap">
                <div class="left">
                    <img :src="item.header"  class="img">
                    <div class="user">
                        <span>{{item.username?item.username:'游客'}}</span>
                        <p class="time">
                            <i class="iconfont icon-shijian1"></i>
                            <span>{{item.timeFormat}}</span>
                            <i class="iconfont icon-xiaoxi3"></i>
                            <span>{{item.isPriv==0?'公开':'非公开'}}</span>
                        </p>
                    </div>
                </div>
            </div>    
            <div class="content">
                {{item.comment}}
            </div>
           
        </div>
        <div class="bd">无更多回复</div>
         <div class="box">   
                    <input type="text" placeholder="评论内容"  v-model="content">
                    <button @click="handlesubmit(itemData)">评论</button>
            </div>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';

const  qs = require('qs')
export default {
  name: "hudongdetails",
  data() {
    return {
      itemData: [],
        listData:[],
        content:'',
    };
  },
  methods:{
      getData(){
          Indicator.open('加载中...');
           this.$axios.get(`/hhdj/forum/forumCommentList.do?page=1&rows=10&forum_id=${this.itemData.forumId}`).then(res=>{
            // console.log('我是请求 list的res',res)
            if(res.data.code == 1){
                this.listData = res.data.rows
            //   console.log(this.listData);
            Indicator.close();
            } 
        })
      },
      handlesubmit(item){
          Indicator.open('加载中...');
         let forum_id = item.forumId
          this.$axios.post('/hhdj/forum/addComment.do',{forum_id,comment:this.content}).then(res=>{
            //   console.log('提交信息',res)
            Toast('回复成功')
            this.content = ''
            this.getData()
            Indicator.close();
          })
         
      }
  },
  created() {
   
    this.itemData = this.$route.params.item
    console.log('111',this.itemData)
    // console.log('111',this.itemData.forumId)
     this.getData()
  }
};
</script>

<style scoped lang='scss'>
.hudongdetails{
    width: 7.5rem;
   box-sizing: border-box;
   background: #ddd;
  padding-top:20px;
  height: 1500px;
  font-size: 16px;
  .item-wrap {
    width: 7rem;
    padding: 15px;
    box-sizing: border-box;
    // border:1px solid red;
    margin: 0px 12px 12px;
    background: #fff;
    .user-wrap {
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      .left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .time {
          font-size: 12px;
        }
        .img {
          width: 34px;
          height: 34px;
          margin-right: 5px;
          margin-top: 5px;
          border-radius: 50%;
        }
      }
    }
    .content{
        color:#333;
        max-height: 1.5rem;
        overflow: hidden;
        margin-bottom:15px;
    }
  }
  .list{
      border-bottom: 1px solid #ddd;
    width: 7.5rem;
    padding: 15px;
    box-sizing: border-box;
    // border:1px solid red;
    background: #fff;
     .user-wrap {
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      .left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .time {
          font-size: 12px;
        }
        .img {
          width: 34px;
          height: 34px;
          margin-right: 5px;
          margin-top: 5px;
          border-radius: 50%;
        }
      }
    }
    .content{
        color:#333;
        max-height: 1.5rem;
        overflow: hidden;
        margin-bottom:15px;
    }
    
  }
  .bd{
        width: 7.5rem;
        text-align: center;
        height: 50px;
         line-height: 50px;
         background: #ddd;
    }
    .box{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        input{
            line-height: 2.5;
            height: 0.8rem;
            border-radius: 6px;
            box-sizing: border-box;
            padding: 15px;
            border: 1px solid red;
            width: 5.7rem;
        }
        button{
            width: 1rem;
            background: rgb(192, 65, 65);
            border-radius: 6px;
            color:#fff;

        }
    }
}
</style>