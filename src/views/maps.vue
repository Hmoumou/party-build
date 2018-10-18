<template>
<div class="wrap">
     <div class="maps" id="container">
    </div>

</div>
   
</template>

<script>

    export default {
        name:"maps",
        methods:{
          baiduMap () {
            const BMap = window.BMap
            var map = new BMap.Map("container")  
            var point = new BMap.Point(116.404, 39.915)
                map.centerAndZoom(point, 12)
                var marker = new BMap.Marker(point)  // 创建标注
                map.addOverlay(marker)            // 将标注添加到地图中
                map.addControl(new BMap.NavigationControl(
                    {
                         anchor: window.BMAP_ANCHOR_TOP_RIGHT
                     }
                ))  
                map.addControl(new BMap.ScaleControl(
                    {
                         anchor: window.BMAP_ANCHOR_TOP_RIGHT
                     }
                )) 
                map.addControl(new BMap.OverviewMapControl(
                    {
                         anchor: window.BMAP_ANCHOR_TOP_RIGHT
                     }
                ))   
               
                map.setCurrentCity("北京");
            }
        },
        mounted () {
            this.baiduMap()
            },
        
    }
</script>

<style scoped  lang='scss'>
.wrap{
    height:93.2vh;
  widows: 7.5rem;
    #container {
  /* border:1px solid #000; */
  box-sizing: border-box;
  background: pink;
  overflow: hidden;
  height: 100%;
  width:100%;
  z-index: 11111;
}

}

</style>