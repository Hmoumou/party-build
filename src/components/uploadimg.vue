<template>
    <div class="uploadimg">
        <!-- <div v-for="item in img" :key="item.id" class="img-wrap">
            <img :src="item"  class="img">
        </div> -->
        <label class="lable">
            <input type="file" @change="onload" class="input">
            <img :src="img" >
        </label>
        
    </div>
</template>

<script>
    export default {
        name:'uploadimg',
            data() {
                return {
                    img: '',
                }
            },
            methods: {
                onload(e) {
                    let imgUrl = e.target.files[0]
                    // console.log('1111',imgUrl)
                    let rander = new FileReader()
                    rander.readAsDataURL(imgUrl)
                    rander.onloadend=()=>{
                        let hh = rander.result
                       this.img = hh
                       let myFile = rander.result.substring(hh.indexOf(',')+1)
                    //    console.log(myFile);
                       this.$axios.post('/hhdj/image/uploadBase64.do',{myFile}).then(res=>{
                           console.log('2232424',res)
                           this.$emit('load',res.data.url)
                       }) 
                    }
                }
            },
        
    }
</script>

<style scoped lang='scss'>
.uploadimg{
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    .lable{ 
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: 1px solid #666;
        background: #fff;
        .input{
        width: 25px;
        height: 25px;
        visibility: hidden;
        }
        img{
        width: 25px;
        height: 25px;
        }
    }


}

</style>