<template>
    <div class="my-wrap">
          <mt-header :title="title" >
        </mt-header> 
        <div class="user-wrap">
            <div class="user-message">
                <div class="user-img">

                </div>
                <span v-if='isShow'>你还没有登录，请登录</span>
                <span v-else>欢迎，{{1}}</span>
            </div>
        </div>
         <div class="caozuo">
                <router-link class="item" to='/personalDetails'>
               <div class="left">
                    <img src="../imgs/个人信息.png" >
                <span>个人信息</span>
               </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
            <router-link class="item" to='/personalDetails'>
                <div class="left">
                    <img src="../imgs/量化积分icon.png" >
                <span>个人量化积分</span>
                </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
            <router-link class="item" to='/personalDetails'>
               <div class="left">
                    <img src="../imgs/修改密码icon.png" >
                <span>修改密码</span>
               </div>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </router-link>
            <router-link class="item" to='/personalDetails'>
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
</template>

<script>
import Headers from "@/components/Headers.vue";
export default {
  name: "my",
  data() {
    return {
      formData: {},
      isShow: true
    };
  },
  methods:{
      handlelogout(){
          
      }
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style scoped lang='scss'>
.my-wrap {
  width: 7.5rm;
  margin-top: 44px;
  /deep/ .mint-header {
      z-index: 995;
    background: rgb(197, 2, 6);
    height: 44px;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .user-wrap {
    border-top: 1px solid #f1f1f1;
    position: relative;
    background: rgb(197, 2, 6);
    font-size: 16px;
    width: 7.5rem;
    color: #f1f1f1;
    height: 180px;
    box-sizing: border-box;

    .user-message {
      width: 4rem;
      height: 120px;
      text-align: center;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      .user-img {
        width: 1.5rem;
        margin-left: 1.2rem;
        margin-bottom: 8px;
        height: 1.5rem;
        background: url("../imgs/头像.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
      }
    }
  }
  .caozuo {
    font-size: 20px;
    width: 7.5rem;
    height: 286px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .item {
      padding: 10px;
      box-sizing: border-box;
      width: 7.5rem;
      display: flex;
      flex-direction: row;
      height: 60px;
      line-height: 60px;
      justify-content: space-between;
      border-bottom: 1px solid #e1e1e1;
      .iconfont{
         height: 40px;
         line-height: 40px;
      }
      .left{
          height: 40px;
          line-height: 40px;
          span{
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
        font-size: 16px;
        border-radius: 6px;
        color: #f1f1f1;
        width: 7rem;
        background: rgb(239,71, 58);
         height: 1rem;
    }
  }
 
}
</style>