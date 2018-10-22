<template>
    <div class="paymoney">
        <div class="item">请选择支付方式</div>
        <div class="item wx" id="wx" @click="handlewx">
            <div class="left">
                <i class="iconfont icon-icon-"></i>
                <img src="../imgs/QQ图片20181022203314.png" >
                <div class="span">微信</div>
            </div>
            <i class="iconfont icon icon-arrow-right-copy-copy"></i>
        </div>
        <div class="item zfb" id="zfb"  @click="handlezfb">
            <div class="left">
                <i class="iconfont icon-umidd171"></i>
                <img src="../imgs/QQ图片20181022203341.jpg" >
                <div class="span">支付宝</div>
            </div>
            <i class="iconfont icon icon-arrow-right-copy-copy"></i>
        </div>
        <mt-popup
            v-model="wxisShow"
            position="popup-fade"
            lockScroll="true"
            >
            <div class="wrap wx-ewm">
                <p>微信支付</p>
                 <img src="../imgs/QQ图片20181022203314.png" alt="">
            </div>
     </mt-popup>
     <mt-popup
            v-model="zfbisShow"
            position="popup-fade"
            lockScroll="true"
            >
            <div class="wrap zfb-ewm">
                <p>支付宝支付</p>
                 <img src="../imgs/QQ图片20181022203341.jpg" alt="">
            </div>
     </mt-popup>
    </div>
</template>

<script>
import { Popup } from "mint-ui";
export default {
  name: "paymoney",
  data(){
      return{
          wxisShow:false,
          zfbisShow:false,
          img:''
      }
  },
  methods:{
      handlezfb(){
        this.zfbisShow = true
      },
      handlewx(){
          this.wxisShow = true
      }
  }
};
</script>

<style scoped lang='scss'>
.paymoney {
  font-size: 14px;
  .item {
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    img {
      display: none;
      width: 30px;
      height: 30px;
    }
    .left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
    }
    .span {
      margin-left: 20px;
      height: 50px;
      line-height: 50px;
    }
    .icon {
      height: 50px;
      line-height: 50px;
    }
  }
  /deep/ .icon-icon- {
    font-size: 50px;
    color: #9ed361;
  }
  /deep/ .icon-umidd171 {
    font-size: 50px;
    color: #409eff;
  }
  .wrap{
      text-align: center;
      background: rgb(149, 149, 190);
      color:#fff;
      width: 200px;
      height: 250px;
      img{
           width: 200px;
      height: 240px;
      }
  }
}
</style>