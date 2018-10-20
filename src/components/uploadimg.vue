<template>
    <div class="uploadimg">
        <div v-for="item in img" :key="item.id">
            <img :src="item" >
        </div>
        <input type="file" @change="onload">
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
                        //    console.log('2232424',res);
                           this.$emit('load',res.data.url)
                       }) 
                    }
                }
            },
        
    }
</script>

<style scoped>

</style>