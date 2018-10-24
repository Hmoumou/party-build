<template>
    <div class="editPassword">
       <form class="box" @submit.prevent>
            <mt-field label="旧密码" type='password' placeholder="请输入旧密码" v-model="formData.oldps" ></mt-field>
            <mt-field label="新密码"  type='password' placeholder="请输入新密码" v-model="formData.newps"></mt-field>
            <mt-field label="确认密码" type='password' placeholder="请再次输入新密码" v-model="formData.againps" ></mt-field>
            <mt-button type="primary" @click="handlesubmit">确定</mt-button>
       </form>
    </div>
</template>

<script>
import { MessageBox,Indicator, Button, Field } from 'mint-ui';

    export default {
        name:'editPassword',
         data(){
                return{
                    formData:{
                        oldps:'',
                        newps:'',
                        againps:''
                    }
                }
            },
        methods:{
            getData(){
                Indicator.open('加载中...');
                this.$axios.get('/hhdj/user/userInfo.do').then(res=>{
                    console.log('我是userinfo',res.data)
                    Indicator.close();
                })
            },
           handlesubmit(){
                Indicator.open('加载中...');
               if(this.formData.oldps ==
               this.$store.state.userInfo.password){
                   if(this.formData.newps=this.formData.againps){
                       this.$axios.post(`/hhdj/user/updatePwd.do?newPwd=${this.formData.newps}&oldPwd=${this.formData.oldps}`).then(res=>{
                          console.log('我是resaaaaaa',res)
                          if(res.code == 1){
                               MessageBox('提示','修改密码成功')
                                Indicator.close();
                           }else{
                               MessageBox('提示','密码修改错误')
                                Indicator.close();
                           }
                       })
                   }else{
                        MessageBox('提示','两次输入密码不一致')
                         Indicator.close();
                   }
               }else{
                   MessageBox('提示', '旧密码错误')
                    Indicator.close();
               }
           }
        },
        created(){
            console.log( '我是那个密码',this.$store.state.userInfo.password);
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
.editPassword{
    padding: 40px 20px 0;
   
.box{
    line-height: 2;
 border: 1px solid #f1f1f1;
 padding: 10px;
}

/deep/ .mint-button{
     width: 100%;
    height: 1rem;
}
}

</style>