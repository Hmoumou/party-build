<template>
    <div class="newsviews">
         <Headers></Headers>
         
         <div class="container"  >
           
            <div 
            class="content" 
            v-for="(item ,index) in formData" 
            :key = "index" 
            @click="handleClick(item.newsId)">
               <div class="img"> <img :src="item.pic" ></div>
                <div class="text">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="btm">
                      <div class="time">
                         {{item.currentTime}}
                      </div>
                      <div class="watch">
                        <i class="iconfont icon-liulanliang"></i>
                        <span>{{item.count}}</span>
                      </div>
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
import Headers from "@/components/Headers";
import { Indicator } from 'mint-ui';
export default {
  name: "newsviews",
  components: {
    Headers
  },
  data() {
    return {
      type: "",
      formData: {},
      container: {},
      page: 1
    };
  },
  methods: {
    getData() {
      Indicator.open('加载中...');
      this.$axios
        .get(
          
          `/hhdj/news/newsList.do?page=${this.page}&rows=10&type=${this.type}`
        )
        .then(res => {
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
    //   console.log(this.$route.meta);
    this.type = this.$route.meta.type;
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.newsviews {
  width: 7.5rem;
  .content {
    font-size: 18px;
    padding: 5px 10px;
    width: 7.1rem;
    height: 110px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f1f1f1;
    .img {
      display: block;
      margin-right: 10px;
      width: 80px;
      height: 80px;
      line-height: 80px;
      img {
        margin-top: 15px;
        display: block;
        width: 80px;
        height: 80px;
        // padding: 12.5px 0;
      }
    }
    .text {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .title {
        color: #333;
        font-size: 16px;
        margin-bottom: 6px;
       
      }
       .btm{
        font-size: 14px;
        color: #777;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .watch{
          width: 60px;
          height: 10px;
        }
       /deep/ .icon-liulanliang{
          width: 8px;
          height: 8px;
        }

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