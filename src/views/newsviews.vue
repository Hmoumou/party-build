<template>
    <div class="newsviews">
         <Headers></Headers>      
         <div class="container"  >
              <ul
              v-infinite-scroll="loadMore"
              infinite-scroll-immediate-check
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10">
                <div 
                  class="content" 
                  v-for="(item ,index) in rows" 
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
              </ul>
              
            <div class="wrapper" v-show="isshow">
              <span class="line"></span>
              <span class="cont">已加载全部</span>
              <span class="line"></span>
            </div>
        </div>
    </div>
</template>

<script>
import Headers from "@/components/Headers";
import { Indicator, Toast, MessageBox  ,InfiniteScroll } from "mint-ui";
export default {
  name: "newsviews",
  components: {
    Headers
  },
  data() {
    return {
      type: "",
      container: {},
      page: 1,
      isshow:false,
      loading:true,
      rows:[],
    };
  },
  methods: {
    loadMore() {
      this.page = this.page + 1
      this.getData()
    },
    getData() {
      Indicator.open()
      this.$axios.get(`/hhdj/news/newsList.do?page=${this.page}&rows=10&type=${this.type}`)
        .then(res => {
          this.loading = false
          this.rows = [...this.rows,...res.data.rows]
           Indicator.close()
          if(this.rows.length == res.data.total){
            this.loading = true  
            this.isshow = true
          }
          
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
      .btm {
        font-size: 14px;
        color: #777;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .watch {
          width: 60px;
          height: 10px;
        }
        /deep/ .icon-liulanliang {
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