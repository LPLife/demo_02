<template>
<div>
    <!-- 1 -->
    <div class="box">
        <div class="box-l">
                我是宽高固定的box-l，使用margin:0 auto;
        </div>
    </div>
    <!-- 2 -->
    <div class="bof">
            <div class="bof-k">
                我是宽高固定的box-k,使用定位
            </div>
    </div>
    <!-- 3 -->
    <div class="bog">
        <div class="bog-c">
            宽不固定，将子元素设置为行内元素、父元素设置 text-align: center;
        </div>
    </div>

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
    ListNode(val) {
      this.val = val;
      this.next = null;
     },
addTwoNumbers(l1, l2) {
    let str_1 = [],str_2=[];
    let j =0;
    for(let i = l1.length-1; i >= 0 ; i--){
        str_1[j++] = l1[i]; 
        
    }
    j =0;
    for(let i = l2.length-1; i >= 0 ; i--){
        str_2[j++] = l2[i]; 
    }
    let re = parseInt(str_1.reverse().join(""))+parseInt(str_2.reverse().join(""));
    return re.toString().split("").reverse()
    },
    },
    mounted() {
        this.addTwoNumbers([2,4,3],[5,6,4]);
    },
}
</script>
<style lang="scss" scoped>

// 子元素宽高固定 margin: 0 auto;
.box {
    background: floralwhite;
    &-l {
        width: 100px;
        height: 100px;
        background: darkseagreen;
        margin: 0 auto;
    }

}
// 子元素宽高固定 定位居中
.bof {
    position: relative;
    height: 200px;
    background: blueviolet;
    &-k {
        background: forestgreen;
        width: 100px;
        height: 100px;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
    }
}
// 宽度未知 
.bog {
    // width: 300px;
    height: 200px;
    background: pink;
    position: relative;
    text-align: center;
    &-c {
        background: blue;
        display: inline-block;
    }
}
</style>
