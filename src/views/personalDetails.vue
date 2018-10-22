<template>
    <div class="personalDetails">
         <Headers></Headers>
         <div class="editor"  @click="handleEditor" v-if="!isShow">编辑</div>
         <div class="editor"  @click="handleSave" v-else>保存</div>
    <div class="content-wrap">
        <ul class="content">
            <li>
              <span >头像</span> 
              <span v-if='isShow' class="img" >
                <uploadimg v-on:load='geturl'>
                </uploadimg>
                </span>
                 <span v-else><img class="img" :src="userInfo.header" >
                 </span>
                 </li>
            <li>
              <span>姓名</span>
                <input type="text" v-model="userInfo.username" v-if='isShow'>
                   <span v-else >{{userInfo.username}}</span>
                   </li>
            <li>
              <span>身份证</span>
                 <!-- <input type="text"  v-model="userInfo.idCard"  v-if='isShow'> -->
                    <span>{{userInfo.idCard}}</span>
                    </li>
            <li>
              <span>家庭住址</span>
                  <input type="text"  v-model="userInfo.hometown"  v-if='isShow'> 
                    <span v-else>{{userInfo.hometown}}</span>
                    </li>
            <li>
              <span>工作地址</span>
                 <input type="text"  v-model="userInfo.address"  v-if='isShow'>
                     <span v-else>{{userInfo.address}}</span>
                     </li>
            <li>
              <span>民族</span> 
                <input type="text"   v-model="userInfo.nation" v-if='isShow'>
                   <span v-else>{{userInfo.nation}}</span>
                   </li>
            <li>
              <span>微信号</span> 
                <input type="text"  v-model="userInfo.wxNum"  v-if='isShow'> 
                  <span v-else>{{userInfo.wxNum}}</span>
                  </li>
            <li>
              <span>QQ号</span> 
                <input type="text"  v-model="userInfo.qqNum"  v-if='isShow'>
                   <span v-else>{{userInfo.qqNum}}</span>
                   </li>
            <li>
              <span>性别</span>
              <div class="sex" v-if='isShow'>
                <input type="radio" value="1"  v-model="userInfo.sex">男
                <input type="radio" value="2"  v-model="userInfo.sex">女
                </div>  
                  <span v-else>{{userInfo.sex==1?'男':'女'}}</span>
                  </li>
            <li>
              <span>最高学历</span> 
                <input type="text"  v-model="userInfo.education"  v-if='isShow'>
                    <span v-else>{{userInfo.education}}</span>
                    </li>
            <li>
              <span>职称</span>
               <input type="text" v-model="userInfo.jobRank" v-if='isShow'>
               <span v-else>{{userInfo.jobRank}}</span>
               </li>
            <li>
              <span>薪资水平</span>
                 <input type="text"  v-model="userInfo.salary"  v-if='isShow'> 
                   <span v-else>{{userInfo.salary}}</span>
                   </li>
            <li>
              <span>入党时间</span> 
                 <input type="date"  v-if='isShow'  v-model="userInfo.joinPartyTime">  
                   <span v-else>{{userInfo.joinPartyTime}}</span>
                   </li>
            <li>
              <span>党费最后缴纳时间</span> 
                 <input type="date"  v-if='isShow'  v-model="userInfo.lastPayTime">  
                   <span v-else>{{userInfo.lastPayTime}}</span>
                   </li>
            <li>
              <span>当前身份</span> 
              <select  v-if='isShow' v-model="userInfo.partyStatus">
                <option value="2">党员</option>
                <option value="1">预备党员</option>
                <option value="0">积极分子</option>
              </select>
                   <span v-else>{{userInfo.partyStatus==0?'积极分子':userInfo.partyStatus == 1?'预备党员':'党员'}}</span>
                   </li>
        </ul>
    </div>
    </div>
</template>

<script>
import uploadimg from '@/components/uploadimg.vue'
import Headers from "@/components/Headers"
export default {
  name: "personalDetails",
  data() {
    return {
      userInfo:{},
      isShow: false
    };
  },
  
  methods: {
     getData(){
       this.$axios.get('/hhdj/user/userInfo.do').then(res=>{
        this.userInfo = res.data.data
      })
     },
    handleEditor() {
      this.getData()
      this.isShow = true;
    },
    geturl(url){
      console.log('我是那个url',url);
      this.userInfo.header = url
    },
  // getData(date){
  //   // this.userInfo.header = data[0]
  //   console.log(data);
  // },

    handleSave() {
      // sessionStorage.setItem("vuex", this.userInfo);
      this.$axios.post('/hhdj/user/modifyInfo.do',this.userInfo).then(res=>{
        console.log('jiusiwo',res)
        if(rea.code == 200){
          this.getData()
        }
      })  
      this.isShow = false;
    }
  },
  components: {
    Headers,
    uploadimg
  },
  created() {
    console.log(this.$store.state.userInfo);
  }
};
</script>

<style scoped lang="scss">
.personalDetails {
  position: relative;
  box-sizing: border-box;
  // padding: 10px;
  font-size: 16px;
  height: 44px;
  width: 7.5rem;
  z-index: 999;
  .editor {
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 34px;
    color: #fff;
  }
  .img{
    width: 50px;
    height: 30px;
  }
  ul {
    box-sizing: border-box;
    padding: 10px;
  }
  li {
    height: 40px;
    line-height: 2;
    display: flex;
    justify-content: space-between;
    .sex {
      width: 75px;
      height: 15px;
    }
  }
  input {
    border:none;
    text-align: end;
  }
}
</style>