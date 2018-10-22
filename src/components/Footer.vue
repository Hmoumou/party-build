<template>
    <div class="footers" title="footers">
        <router-link to='/' class="footer-item" :class="{active:($route.name === '首页')}">
                <i class="iconfont icon-dangwugongkai "></i>
                <div class="title">
                    首页
                </div>
        </router-link>
         <router-link to='/news' class="footer-item  " :class="{active:$route.name === '新闻早知道'}">
                <i class="iconfont icon-xinwen"></i>
                <div class="title">
                    通知早知道
                </div>
        </router-link>
         <router-link to='/my' class="footer-item " :class="{active:$route.name === '我的党建'}">
                <i class="iconfont icon-wode2"></i>
                <div class="title">
                    我的党建
                </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
  name: "Footer", 
};
</script>

<style scoped lang='scss' >
.footers {
    z-index: 9988;
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  width: 7.5rme;
  height: 1.12rem;
  background: #e8e8e8;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
   box-sizing: border-box;
  .footer-item{
    width: 33.3333vw;
    text-align: center;
    padding-top:6px; 
}
.iconfont{
    font-size: 20px;
}
.title{
    margin-top: 4px;
}
.active{
    border-top: 2px solid #c7000a;
    color: #c7000a;
    margin-top: -2px;

}
}
a{
    text-decoration: none;
    color: #555;
}


</style>