<template>
    <div class="news-wrap">
      <Headers></Headers>
        <div class="container" >
            <div class="content" v-for="(item ,index) in formData" :key = "index" @click="handleClick(item.newsId)">
               <div class="img"> <img src="../imgs/iconfont_gonggaotongzhi.png" ></div>
                <div class="text">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="time">
                         {{item.currentTime}}
                    </div>
                </div>
            </div>
            <div class="wrapper">
              <span class="line"></span>
              <span class="cont">没有更多内容了</span>
              <span class="line"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Headers from "@/components/Headers.vue";
export default {
  name: "news",
  components: {
    Headers
  },
  data() {
    return {
      formData: {},
      container: {}
    };
  },
  methods: {
    getData() {
      Indicator.open('加载中...');
      this.$axios.get("/hhdj/news/newsList.do").then(res => {
        console.log(res.data);
        this.formData = res.data.rows;
        Indicator.close();
      });
    },
    handleClick(id) {
      this.$router.push(`/newDetails/${id}`);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.news-wrap {
  margin-bottom: 80px;
  width: 7.5rem;
  /deep/ .mint-header .mint-button {
    display: none;
  }
  .content {
    font-size: 18px;
    padding: 5px 10px;
    width: 7.1rem;
    height: 90px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f1f1f1;
    .img {
      display: block;
      margin-right: 10px;
      width: 35px;
      height: 75px;
      line-height: 75px;
      img {
        margin-top: 15px;
        display: block;
        width: 35px;
        height: 35px;
        padding: 12.5px 0;
      }
    }
    .text {
      padding: 15px;
      .title {
        color: #333;
        font-size: 16px;
        margin-bottom: 6px;
      }
      .time {
        font-size: 14px;
        color: #444;
      }
    }
  }
  .wrapper {
    width: 7.5rem;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: #fff;
  }
  .line {
    display: inline-block;
    width: 100px;
    border-top: 1px dashed #d8d4d4;
    border-bottom: 1px dashed #c1c1c1;
    vertical-align: middle;
  }
  .cont {
    display: inline-block;
    font-size: 14px;
    vertical-align: middle;
  }
}
</style>