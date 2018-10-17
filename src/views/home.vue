<template>
    <div class="home"  title="党建e家-首页">
        <!-- 头部 -->
           <div class="header-index clearfix">
               <div class="left fll">    </div>
               <router-link to='/login' class="flr">登录</router-link>
           </div>
           <!-- 轮播图 -->
           <div class='swipe-wrap'>
                <mt-swipe :auto="4000"  >
                    <mt-swipe-item  v-for="(item,index) in carouselList" :key='index'>
                        <img :src="item.imgUrl"  @click="handleDetail(item.url)">
                        <div class="new-box">
                            {{item.title}}
                        </div>
                    </mt-swipe-item>
                </mt-swipe>
           </div>
           <!-- 菜单 -->
            <div class="menu-wrap">
                <div class="item-wrap">
                    <router-link class="item" to='/neweyes'>
                        <img src="../imgs/icon_01.png" >
                        <p>信工新闻眼</p>
                    </router-link>
                    <router-link class="item" to='/handlife'>
                         <img src="../imgs/icon_02.png" >
                        <p>掌上组织生活</p>
                    </router-link>
                    <router-link class="item" to='/interact'>
                        <img src="../imgs/icon_03.png" >
                        <p>党员云互动</p>
                    </router-link>
                </div>
                <div class="item-wrap">
                    <router-link class="item" to='/MadeEasyone'>
                        <img src="../imgs/icon_04.png" >
                        <p>党建一点通</p>
                    </router-link>
                    <router-link class="item" to='/partylife'>
                         <img src="../imgs/icon_05.png" >
                        <p>党员亮生活</p>
                    </router-link>
                    <router-link class="item" to='/today'>
                       <img src="../imgs/icon_06.png" >
                        <p>党史上的今天</p>
                    </router-link>
                </div>
            </div>
           
           <!-- 一个大图 -->
           <div class="datu">
               <img src="../imgs/banner01.png">
           </div>
           <!-- 底部菜单 -->
           <div class="footer-menu">
              <div class="left">
                   <router-link class="left-inner" to='/inroad'>
                   </router-link>
              </div>
               <div class="right">
                   <div class="item">
                       <router-link class="inner" to='/anytimestudy'>             
                        </router-link>
                         <router-link class="inner" to='/anytimephoto'>   
                        </router-link>
                   </div>
                   <div class="item">
                        <router-link class="inner" to='/improvement'>
                        </router-link>
                         <router-link class="inner" to='/specialactivities'> 
                        </router-link>
                   </div>
               </div>
           </div>
           
           
           <Footer></Footer>
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      formData: {},
      carouselList:{}
    };
  },
  methods: {
    getData() {
      this.$axios.get("/hhdj/news/newsContent.do").then(res => {
        // console.log(res)
        this.formData = res.data
      });
    },
    getcarouselList(){
        this.$axios.get('/hhdj/carousel/carouselList.do').then(res=>{
            console.log(res.data)
            this.carouselList = res.data.rows
        })
    },
    handleDetail(id){
        this.$router.push(`/newDetails/${id}`)
    }
  },
  created() {
    this.getData()
    this.getcarouselList()
  }
};
</script>

<style scoped lang='scss' >
.home {
  font-size: 14px;
  width: 7.5rem;
  //头部样式
  .header-index {
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
    right: 0;
    background: rgb(197, 2, 6);
    width: 7.5rem;
    box-sizing: border-box;
    line-height: 40px;
    height: 52px;
    padding: 8px 10px;
    font-size: 18px;
    .left {
      width: 146px;
      height: 34px;
      background: url("../imgs/logo.png") no-repeat;
      background-size: 100% 100%;
    }
    a {
      color: #fff;
    }
  }
  //轮播图样式
  .swipe-wrap {
      margin-top: 50px;
    position: relative;
    width: 7.5rem;
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
    .new-box {
      padding: 5px 15px;
      box-sizing: border-box;
      color: rgb(221, 213, 213);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 30px;
      background: rgba(0, 0, 0, 0.3);
    }
  }
  //菜单样式
  .menu-wrap {
    width: 7.5rem;
    height: 190px;
    display: flex;
    flex-direction: column;
    background: url("../imgs/bt_bg.png") no-repeat;
    background-size: 100% 100%;
    .item-wrap {
      display: flex;
      flex-direction: row;
      height: 95px;
    }
    .item {
      width: 2.5rem;
      height: 95px;

      text-align: center;
      img {
        width: 1rem;
        height: 1rem;
        margin: 8px auto;
      }
    }
  }
  //一个大图
  .datu {
    width: 7.5rem;
    height: 86.5px;
    img {
      width: 100%;
      height: 86.5px;
    }
  }
  //底部菜单
  .footer-menu {
    width: 7.5rem;
    height: 193px;
    background: url("../imgs/专栏.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 56px;
    display: flex;
    flex-direction: row;
    .left{
        width: 2.5rem;
        height: 193px;
        .left-inner{
            display: block;
            width: 100%;
            height: 193px;
        }
    }
    .right{
        width: 5rem;
        height: 193px;
        display: flex;
        flex-direction: column;
        .item{
            width: 5rem;
            height: 96.5px;
            display: flex;
            flex-direction: row;
            .inner{
                width: 2.5rem;
                height: 96.5px;
            }
        }
    }
  }
}
</style>