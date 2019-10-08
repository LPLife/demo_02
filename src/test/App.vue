<template>
<div>
    <!-- <div  class="test" id="hb">
      d
    </div> -->
    <canvas id="myCanvas" style="width: 750px;height:700px;position: fixed;top: 0px;"></canvas>
</div>
</template>
<script>
export default {
    data() {
        return {
            msg:'hello,vue, Webpack!'
        }
    },
    methods: {

    },
    mounted() {
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        var img = new Image();   // 创建一个<img>元素
        img.src = 'https://img-fe.ggwan.com/images/9938f20acafa4e-750x1334.jpg'; // 设置图片源地址
        img.onload = function(){
            ctx.drawImage(img,0,0,750,600);
        }
    },
}
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    display: block;
    
}
.test {
    width: 100%;
    height: 500px;
    background: url('https://img-fe.ggwan.com/images/9938f20acafa4e-750x1334.jpg') no-repeat;
    background-size: 100% 100%;
    color: aliceblue;
}
</style>
