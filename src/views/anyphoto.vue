<template>
    <div class="anyphoto">
        <div class="type">
               <div class="item"
                  v-for="(item ,index) in formData" 
                  :key = "index" 
                  @click="handleClick(item.newsId)">
                    <div class="content1">
                        <img :src="item.pic" >
                    </div>
                    <div class="title">
                        {{item.title}}
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
export default {
  name: "anyphoto",
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
      this.$axios
        .get(
          `/hhdj/news/newsList.do?page=${this.page}&rows=10&type=${this.type}`
        )
        .then(res => {
          console.log(res.data);
          this.formData = res.data.rows;
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
.anyphoto {
  font-size: 13px;
  color: #555;
  .type {
    display: flex;
    flex-wrap: wrap;
    .item {
      text-align: center;
      box-sizing: border-box;
      padding: 15px 15px 0;
      width: 50%;
      border: none;
      display: flex;
      flex-direction: column;
      img {
        border-radius: 2px;
        width: 100%;
        height: 116px;
      }
      .title {
        height: 36px;
        overflow: hidden;
      }
    }
  }
  .wrapper {
    width: 7.5rem;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background: #fff;
  }
  .line {
    display: inline-block;
    width: 120px;
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