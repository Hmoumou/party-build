<template>
    <div class="report">
        <div class="box">
            <div class="shenhe"> 
                <img src="../imgs/审核.png">
            </div>
            <p>正在审核中</p>
            <router-link class="btn" to='/handlife'>
                        <button>关闭</button>
            </router-link>
           
       
            </div>
         
        

    </div>
</template>

<script>
export default {
  name: "report",
  methods:{
  }
};
</script>

<style scoped lang='scss'>
.report {
  position: relative;
  width: 7.5rem;
  font-size: 16px;
  .box {
    box-sizing: border-box;
    position: absolute;
    text-align: center;
    top: 1.2rem;
    left: 0.5rem;
    width: 6.5rem;
    height: 7rem;
    // border: 1px solid #333;
    color: #888;
    .shenhe {
      padding: 0 112.5px;
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    p {
      margin-bottom: 70px;
    }
    .btn {
      width: 4.3rem;
      height: 1rem;
     
      box-sizing: border-box;
      padding: 0 45px;
      button {
        width: 4.5rem;
        height: 1rem;
        background: rgb(197, 2, 6);
        color: #fff;
         font-size: 16px;
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }
}
</style>