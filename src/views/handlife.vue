<template>
    <div class="handlife">
        <div class="container">
            <div class="img"></div>
            <div class="item-wrap">
                <router-link class="item" to='/politicsStudy'>
                    <div class="icon1"></div>
                    <span>政治学习</span>
                </router-link>
                <router-link class="item" to='/report'>
                     <div class="icon2"></div>
                    <span>思想汇报</span>
                </router-link>
                <router-link class="item" to='/summary'>
                   <div class="icon3"></div>
                    <span>心得总结</span>
                </router-link>
                <router-link class="item" to='/democratic'>
                    <div class="icon4"></div>
                    <span>民主评议</span>
                </router-link>
                <router-link class="item" to='/maps'>
                   <div class="icon5"></div>
                    <span>流动党员找组织</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'handlife',

    }
</script>

<style scoped lang='scss'>
.handlife{
    .container{
        .img{
            background: url('../imgs/dtu.jpg')no-repeat;
            background-size: 110% 100%;
            background-position: center;
            width: 7.5rem;
            height:3.6rem;
            }
            .item-wrap{
                font-size: 16px;
                width: 7.5rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: start;
                flex-wrap: wrap;
                .item{
                    box-sizing: border-box;
                    padding: 15px 25px;
                    text-align: center;
                    width: 2.5rem;
                    height: 2.6rem;
                    .icon1{
                         width: 1.5rem;
                         height: 1.5rem;
                        background: url('../imgs/icon_01.png')no-repeat;
                       background-size: 100% 100%;
                       border-radius: 50%;
                    }
                    .icon2{
                         width: 1.5rem;
                         height: 1.5rem;
                        background: url('../imgs/life2.png')no-repeat;
                       background-size: 100% 100%;
                       border-radius: 50%;
                    }
                     .icon3{
                         width: 1.5rem;
                         height: 1.5rem;
                        background: url('../imgs/icon_03.png')no-repeat;
                       background-size: 100% 100%;
                       border-radius: 50%;
                    }
                     .icon4{
                         width: 1.5rem;
                         height: 1.5rem;
                        background: url('../imgs/icon_04.png')no-repeat;
                       background-size: 100% 100%;
                       border-radius: 50%;
                    }
                     .icon5{
                         width: 1.5rem;
                          height: 1.5rem;
                        background: url('../imgs/icon_05.png')no-repeat;
                       background-size: 100% 100%;
                       border-radius: 50%;
                    }

                }
            }
    }
    
}

</style>