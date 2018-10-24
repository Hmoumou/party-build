<template>
    <div class="yunhudong">
       <div class="item-wrap clearfix" v-for="(item,index) in formData" :key='index' >      
            <div class="user-wrap">
                <div class="left">
                    <img :src="item.header"  class="img">
                    <div class="user">
                        <span>{{item.username}}</span>
                        <p class="time">
                            <i class="iconfont icon-shijian1"></i>
                            <span>{{item.currentTime}}</span>
                            <i class="iconfont icon-xiaoxi3"></i>
                            <span>{{item.isPriv==0?'公开':'非公开'}}</span>
                        </p>
                    </div>
                </div>
                <div class="right">党员互动</div>
            </div>    
            <div class="content">
                {{item.content}}
            </div>
            <div class="huifu flr" @click="handlehuifu(item)">
                <i class="iconfont icon-xiaoxi"></i>
                <span>回复{{item.commentCount}}</span>
            </div>
            
       </div>
       
        <div class="add" @click="handleAdd" >         
                <i class="iconfont icon-jiahao1"></i>
        </div>
        <mt-popup
        v-model="popupVisible"
        position="bottom">        
              <div class="box">
                <textarea 
                class="text"
            name="text" 
            v-model="say"
            id="text" 
            cols="30" 
            rows="10">
            </textarea>
            <div class="boo">
              <button class="left" @click="handleup">发布</button>
            <button @click="handleoff">取消</button>
            </div>
              </div>
        </mt-popup>
    </div>
</template>

<script>
import { Toast ,Indicator,Popup } from 'mint-ui';
export default {
  name: "yunhudong",
  data() {
    return {
      page: 1,
      rows: 10,
      type: 0,
      cates: 0,
      formData: [],
      say:'',
      popupVisible:false
    };
  },
  methods: {
      handlehuifu(item){
          this.$router.push({name:'hudongdetails',params:{name:'hudongdetails',item}})
       
      },
      handleAdd(){
        this.popupVisible=true
      },
    handleup(){
      Indicator.open();
      let content = this.say
      this.$axios.post('/hhdj/forum/saveForum.do',{content}).then(res=>{
        console.log(res);
        if(res.data.code == 1){
          Toast('发布成功')
          this.popupVisible = false
          this.say = ''
          this.getData()
          Indicator.close();
        }else{
          Indicator.close();
        }
      })
    },
    handleoff(){
      this.popupVisible = false
    },
    getData() {
      Indicator.open();
      this.$axios.get(`/hhdj/forum/forumList.do`)
        .then(res => {
        //   console.log("res就是我", res);
          if (res.data.code == 1) {
            this.formData = res.data.rows;
            // console.log(this.formData);
            Indicator.close();
          }
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.yunhudong {
  position: relative;
  width: 7.5rem;
  background: #f1f1f1;
  font-size: 16px;
  .item-wrap {
    width: 7.5rem;
    padding: 15px;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 15px;
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
          width: 28px;
          height: 28px;
          margin-right: 5px;
          margin-top: 5px;
          border-radius: 50%;
        }
      }
      .right{
          height: 20px;
          font-size: 13px;
          color:#f00;
          padding: 0 5px;
          border: 2px solid #f00;
          border-radius: 10px;
      }
    }
    .content{
        color:#333;
        max-height: 1.5rem;
        overflow: hidden;
        margin-bottom:15px;
    }
    .huifu{
        color:#555;
    }
  }
  .add {
    position: fixed;
    right: 0;
    top: 80%;
  }
  .box{
    width: 7.5rem;
    box-sizing: border-box;
    padding: 10px;
    background: #f1f1f1;
    font-size: 16px;
    .text{
      border:none;
      max-height: 2rem;
      overflow: hidden;
      width: 100%;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .boo{
      display: flex;
      justify-content: space-between;
      button{
        width: 1rem;
        height: 0.6rem;
        border:none;
        border-radius: 6px;
        font-size: 16px;
        background: #fff;
      }
      .left{
        color:#fff;
        background: #f00;
      }
    }
  }
  /deep/ .icon-jiahao1 {
    font-size: 50px;
    color: #f00;
  }
}
</style>