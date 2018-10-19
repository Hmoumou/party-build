<template>
    <div class="personalDetails">
         <mt-header :title="title" >
        <mt-button icon='back' @click="()=>this.$router.back(-1)"
        slot='left'>
       </mt-button>
   </mt-header>
    <router-link class="editor" to='/editor'> 编辑</router-link>
    <div class="content-wrap">
        <ul class="content">
             <li><p>头像</p><p><img src="" ></p></li>
            <li><p>姓名</p><p>{{userInfo}}</p></li>
            <li><p>身份证</p><p>{{userInfo}}</p></li>
            <li><p>家庭住址</p><p>{{userInfo}}</p></li>
            <li><p>工作地址</p><p>{{userInfo}}</p></li>
            <li><p>民族</p><p>{{userInfo}}</p></li>
            <li><p>微信号</p><p>{{userInfo}}</p></li>
            <li><p>QQ号</p><p>{{userInfo}}</p></li>
            <li><p>性别</p><p>{{userInfo}}</p></li>
            <li><p>最高学历</p><p>{{userInfo}}</p></li>
            <li><p>职称</p><p>{{userInfo}}</p></li>
            <li><p>薪资水平</p><p>{{userInfo}}</p></li>
            <li><p>入党时间</p><p>{{userInfo}}</p></li>
            <li><p>党费最后缴纳时间</p><p>{{userInfo}}</p></li>
            <li><p>当前身份</p><p>{{userInfo}}</p></li>
        </ul>
    </div>
    </div>
</template>

<script>
import { Header } from "mint-ui";
export default {
    
  name: "personalDetails",
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  },
  computed: {
    title() {
      return this.$route.meta.desc;
    }
  }
};
</script>

<style scoped lang="scss">
.personalDetails {
   
     position: relative;
  height: 44px;
  width: 7.5rem;
  z-index: 1;
  /deep/ .mint-header {
   
    background: rgb(197, 2, 6);
    height: 44px;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
   
  }
   .editor {
        margin-top: 10px;
        text-align: center;
    font-size: 18px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 1.5rem;
      height: 44px;
      color: #fff;
    }
}
</style>