<template>
    <div class="my-wrap">
        <Headers></Headers>
        <div class="user-wrap">
            <div class="user-message" v-if="!this.$store.state.token">
                <div class="user-img" @click="goLogin"></div>
                <span >你还没有登录哟~</span>
            </div>
            <div class="user-message" v-else>
                <img :src="img" class="user-img">
                <span>欢迎，{{this.$store.state.userInfo.data.username}}</span>
            </div>
        </div>
         <div class="nologin" v-if="!this.$store.state.token" >
            <span  @click="goLogin">点我登录</span>
        </div>
        <div class="wrap-login" v-else >
             <div class="caozuo">
                <router-link class="item" to='/personalDetails'>
               <div class="left">
                    <img src="../imgs/个人信息.png" >
                <span>个人信息</span>
               </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
            <router-link class="item" to='/score'>
                <div class="left">
                    <img src="../imgs/量化积分icon.png" >
                <span>个人量化积分</span>
                </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
            <router-link class="item" to='/editPassword'>
               <div class="left">
                    <img src="../imgs/修改密码icon.png" >
                <span>修改密码</span>
               </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
            <router-link class="item" to='/paymoney'>
                <div class="left">
                    <img class="last" src="../imgs/下载.png" >
                <span>党费缴纳</span>
                </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
           </div>
          <div class="btn-wrap">
               <button class="btn" @click="handlelogout">
               退出登录
           </button>
          </div>
        </div>
       
    </div>
</template>

<script>
import Headers from "@/components/Headers.vue";
export default {
    components:{
        Headers,
    },
  name: "my",
  data() {
    return {
      formData: {},
      isLogin:false,
      img:''
    };
  },
  methods:{
      handlelogout(){
         this.$store.commit('DEL_USERINFO')
         sessionStorage.clear() 
      },
      goLogin(){
          this.$router.push('/login')
      }
  },
  created(){
   
     
      if(this.$store.state.token){
           console.log( this.$store.state.userInfo.data.header);
              console.log(this.$store.state.userInfo);
          this.isLogin = true
          this.img = this.$store.state.userInfo.data.header
          console.log(this.isLogin);
        
      }
  }

};
</script>

<style scoped lang='scss'>
.my-wrap  {
  width: 7.5rm;
  margin-bottom: 69px;
  /deep/ .mint-header .mint-button {
    display: none;
  }
  .user-wrap {
    border-top: 1px solid #f1f1f1;
    position: relative;
    background: rgb(197, 2, 6);
    font-size: 16px;
    width: 7.5rem;
    color: #f1f1f1;
    height: 140px;
    box-sizing: border-box;

    .user-message {
      width: 4rem;
      height: 120px;
      text-align: center;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
       overflow: hidden;
      .user-img {
        width: 1.5rem;
        margin-left: 1.2rem;
        margin-bottom: 8px;
        height: 1.5rem;
        background: url("../imgs/头像.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        border:none;
      }
    }
  }
  .caozuo {
    font-size: 16px;
    width: 7.5rem;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .item {
        color: #888;
      padding: 8px;
      box-sizing: border-box;
      width: 7.5rem;
      display: flex;
      flex-direction: row;
      height: 60px;
      line-height: 60px;
      justify-content: space-between;
      border-bottom: 1px solid #e1e1e1;
     /deep/ .icon-arrow-right-copy-copy{
         height: 40px;
         line-height: 40px;
         margin-right: 5px;
      }
      .left{
          height: 40px;
          line-height: 40px;
          span{
              margin-left: 5px;
              vertical-align: 7px;
          }
      }
    }
    .last {
      width: 32px;
      height: 32px;
    }
    img {
     display: inline-block;
    }
    span{
        margin-bottom: 5px;
    }
  }
  .btn-wrap{
        width: 7.5rem;
        text-align: center;
        height: 1rem;
    .btn{
        border:none;
        font-size: 16px;
        border-radius: 6px;
        color: #f1f1f1;
        width: 7rem;
        background: rgb(239,71, 58);
         height: 1rem;
    }
  }
 .nologin{
     margin-top: 180px;
    
     text-align: center;
     font-size: 20px; 
     span{
        border:1px solid #c1c1c1;
        padding: 15px;
        border-radius: 6px;
        background: #f3abab;
        color: #555;
     }
 }
}
</style>