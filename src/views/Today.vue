<template>
    <div class="today">
        <div v-html='content'></div>
        <div class="boo" v-show="isShow">没有更多内容了...</div>
    </div>
</template>

<script>
import getUrl  from "@/utils/getToday.js"
import { Indicator } from "mint-ui"
// var request = require("request");
var cheerio = require("cheerio");
// var iconv = require("iconv-lite");

export default {
  name: "Today",
  data() {
    return {
      content: '',
      isShow:false
    };
  },
  methods: {
    getData() {
        Indicator.open();
      var date = new Date()
      var month = date.getMonth()
      var day = date.getDate()
      var url = ""
      month = month < 10 ? "0" + month : "" + month
      day = day < 10 ? "0" + month : "" + day
      url = getUrl(month, day)

      this.$axios.get(`/hhdj/proxy/proxy.do?url=${url}`).then(res => {
        console.log(res)
        var $ = cheerio.load(res.data)
        $('h1').remove()
        this.content = $('.p1_02').html()
        Indicator.close();
        this.isShow=true
    })
    }
  },
  created() {
    this.getData()
  }
};
</script>

<style scoped lang='scss'>
.today {
  font-size: 18px;
  box-sizing: border-box;
  padding: 10px 20px 20px;
  color:#333;
  .boo{
      border-top: 1px solid #fff;
      padding-top: 10px;
      margin-top: 20px;
      color: #888;
      width: 100%;
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      text-align: center;
  }
}
</style>