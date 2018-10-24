<template>
    <div class="login-wrap">
        <mt-header :title="title" >
            <mt-button icon='back' @click="()=>this.$router.back(-1)"
        slot='left'></mt-button>
        </mt-header> 
        <div class="inner">
            <div class="img"></div>
            <div class="input-wrap" >
                <input class="input" type="text" v-model="formData.id_card" placeholder="请输入身份证号">
                <input  class="input" type="password" v-model="formData.password" placeholder="请输入密码">
                <button class="btn" @click="handleLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox ,Indicator } from 'mint-ui';
export default {//哪里来的username
  name: "login",

  data() {
    return {
      formData: {
        id_card: "1003",
        password: "123456"
      }
    };
  },
  meta: {
    title: "登录页面"
  },
  methods: {
    handleLogin() {
      Indicator.open('加载中...');
        if(!this.formData.id_card || !this.formData.password){
          Indicator.close();
            MessageBox('警告', '用户名或密码不能为空')
        }else if(this.formData.password.length <=5 ){
          Indicator.close();
            MessageBox('警告', '密码长度不符合要求')
        }else{
            this.$axios.post('/hhdj/user/userLogin.do',this.formData)
            .then(res=>{
                // console.log(res);
                let data = res.data
                if(res.data.code == 1){
                     MessageBox('提示', '登录成功')
                     Indicator.close();
                        let Data = {
                          ...this.formData,
                          ...data
                        }
                        // console.log('我是那个Data',Data)
                    this.$store.commit('GET_USERINFO',Data)
                    setTimeout(()=>{
                        this.$router.push('/my')
                        },1000)
                }else{
                   Indicator.close();
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    }
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
}
</script>

<style scoped lang='scss'>
.login-wrap {
  position: relative;
  width: 7.5rem;
  box-sizing: border-box;
  height: 100vh;
  background: rgb(197, 2, 6);
  // background: url('../imgs/登录页.png')no-repeat;
  // background-size: 100% 100%;

  /deep/ .mint-header {
    background: rgb(197, 2, 6);
    height: 44px;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .inner {
    // border: 1px solid #fff;
    position: absolute;
    top: 80px;
    left: 0.5rem;
    width: 6.5rem;
    height: 400px;
    display: flex;
    flex-direction: column;
    .img {
      padding: 0 0.5rem;
      box-sizing: border-box;
      margin-left: 1rem;
      width: 4rem;
      height: 46px;
      background: url("../imgs/logo.png") no-repeat;
      background-size: 100% 100%;
      margin-bottom: 30px;
    }
    .input-wrap {
      margin-left: 0.25rem;
      width: 6.5rem;
      height: 200px;
      display: flex;
      flex-direction: column;
      .input {
        background: rgb(197, 2, 6);
        font-size: 16px;
        color: #fff;
        box-sizing: border-box;
        padding: 0 5px;
        width: 6rem;
        height: 0.85rem;
        border-radius: 6px;
        margin-bottom: 20px;
        display: block;
        border: 1px solid gold;
      }
      input::-webkit-input-placeholder {
        color: #fff;
      }
      .btn {
        border: 1px solid rgb(227, 87, 79);
        width: 6rem;
        color: #f1f1f1;
        font-size: 18px;
        height: 0.85rem;
        border-radius: 6px;
        background: rgb(227, 87, 79);
      }
    }
  }
}
</style>