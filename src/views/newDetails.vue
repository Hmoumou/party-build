
<template>
    <div class="news-wrap">
       <Headers></Headers>
        <div class="content" :model="formData" >
            <h2>{{formData.title}}</h2>
           <div v-html='formData.content'></div>
        </div>
    </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
export default {
  name: "newDetails",
  components:{
    Headers
  },
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
};
</script>


<style scoped lang='scss'>
.news-wrap {
  margin-bottom: 80px;
  font-size: 18px;
  width: 7.5rem;
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