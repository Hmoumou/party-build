<template>
    <div class="uploadimg">
        <div v-for="item in img" :key="item.id" class="img-wrap">
            <img :src="item"  class="img">
        </div>
        <label class="lable">
            <input type="file" @change="onload" class="input" >
        </label>
        
    </div>
</template>

<script>
    export default {
        name:'uploadimg',
            data() {
                return {
                    img: [],
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
                       this.img.push(hh) 
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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .img-wrap{
    width: 2rem;
    height: 2rem;
    margin: 0.25rem;
    .img{
        width: 2rem;
        height: 2rem;
        box-sizing: border-box;
        
        border: 1px solid #888;
    }
    }
    .lable{ 
         box-sizing: border-box;
        margin: 0.25rem;
        width: 2rem;
        height: 2rem;
        border: 1px solid #666;
        background: #fff;
        .input{
             width: 2rem;
        height: 2rem;
        visibility: hidden;
        }
    }


}

</style>