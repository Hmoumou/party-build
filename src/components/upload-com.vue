<template>
          <label class="upload-wrap">
            <i class="iconfont icon-iconjia-copy" v-if="!imgUrl" ></i>
            <img class="img" :src="imgUrl" v-else>
            <input type="file" style="display:none" @change="upload" >
        </label>
</template>

<script>
// import axios from "axios"

export default {
  props:{
    value:{
      type:String
    }
  },
  name: "upload-com",
  data(){
    return{
        token:'',
        imgUrl:this.value,
    }
  },
  methods:{
    getToken(){
     this.$axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
        console.log(res)
        this.token = res.data.data
      })
    },
    upload(event){
      let file = event.target.files[0]

      let formData = new FormData()
      formData.append('file',file,file.name)
      formData.append('token',this.token)
      this.formData = formData

      axios.post("https://upload-z1.qiniup.com",formData,{
        headers:{
           "Content-Type":"multipart/form-data"
        }
      }).then(res=>{
        console.log(res);
        this.imgUrl = res.data.url
        this.$emit('input',res.data.url)
        this.$emit('change',res.data.url)
        this.$emit('success',res.data.url)
   
      })
    }
  },
  watch: {
    value(val) { 
      this.imgUrl = val
    }
  },
  created(){
   this.getToken()
  }
};
</script>

<style scoped lang='scss'>
.upload-wrap {
  // float: left;
  margin-top: 20px;
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #c1c1c1;
  border-radius: 6px;
 
  .iconfont {
      width: 30px;
      height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>