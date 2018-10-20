<template>
    <div class="score-wrap">
        <div class="wrap">
            <span class="score">{{1}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'score'
    }
</script>

<style scoped lang='scss'>
.score-wrap{
    width: 7.5rem;
    box-sizing: border-box;
    font-size: 16px;
    .wrap{
        position: relative;
        width: 7.5rem;
        height: 3rem;
        z-index: 6;
        box-sizing: border-box;
        background: url('../imgs/积分bg@2x.png');
        background-size: 100% 100%;
        .score{
            z-index: 4;
            font-size: 18px;
            position: absolute;
            width: 1rem;
            height: 1rem;
            color:#fff;

        }
    }

}

</style>