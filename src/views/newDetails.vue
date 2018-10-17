
<template>
    <div class="news-wrap">
       <mt-header :title="title" >
            <mt-button icon='back' @click="()=>this.$router.back(-1)"
        slot='left'></mt-button>
        </mt-header> 
        <div class="content" :model="formData" >
            <h2>{{formData.title}}</h2>
           <div v-html='formData.content'></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "newDetails",
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
        console.log(res.data);
        this.formData = res.data.data;
      });
    }
  },
  created() {
    this.getData();
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>


<style scoped lang='scss'>
.news-wrap {
  margin-top: 44px;
  margin-bottom: 80px;
  font-size: 18px;
  width: 7.5rem;
  /deep/ .mint-header {
    background: rgb(197, 2, 6);
    height: 44px;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
   
  }
   .content{
      width:7.5rem;
      font-size: 16px;
      padding: 5px 10px;
      line-height: 1.5;
      box-sizing: border-box;
      h2{
          text-align: center;
      }
    }
    
}
/deep/ .ql-align-center{
      width: 7rem;
      img{
        width: 7rem;
      }
    }
</style>