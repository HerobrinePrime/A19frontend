<template>
    <div id="Background">
         <!-- 方块动画 -->
     <ul class="square">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <!-- 圆形气泡动画 -->
    <ul class="circle">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
*{
    padding: 0;
    margin: 0;
    ul li {
    width: 30px;
    height: 30px;
    border: 1px solid white;
    position: absolute;
    list-style: none;
    

}
#Background{
  width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#a7aef1, #8078eb);
}
.square li{
    animation: square 10s linear infinite;
}


.square li:nth-child(1){
    top:50vh;
    left: 45vw;
    animation-delay: 1s;
}
.square li:nth-child(2){
    top:80vh;
    left: 15vw;
    animation-delay: 2s;
    background: white;
}
.square li:nth-child(3){
    top:80vh;
    left: 85vw;
    animation-delay: 3s;
}
.square li:nth-child(4){
    top:10vh;
    left: 75vw;
    animation-delay: 4s;
    background: white;
}
.square li:nth-child(5){
    top:10vh;
    left: 10vw;
    
}

@keyframes square{
    from{
        opacity: 1;
        transform: translateY(0) scale(0) rotateY(0);
    }
    to{
        opacity: 0;
        transform: translateY(-10vh) scale(5) rotateY(1000deg);
    }
}

.circle li{
    bottom: 0;
    animation: circle 10s linear infinite;
}
.circle li:nth-child(1){
    left: 10vw;
    animation-delay: 1s;
}
.circle li:nth-child(2){
    background: white;
    left: 25vw;
    animation-delay: 2s;
}
.circle li:nth-child(3){
    left: 45vw;
    animation-delay: 3s;
   
}
.circle li:nth-child(4){
    left: 65vw;
    animation-delay: 4s;
    background: white;
}
.circle li:nth-child(5){
    left: 85vw;
}

@keyframes circle{
    from{
        opacity: 1;
        transform: translateY(0) scale(0) rotate(0);
    }
    to{
        opacity: 0;
      transform: translateY(-90vh) scale(5) rotate(1000deg);
        border-radius: 50%;
    }

}



span{
    background-color: #fff;
    position: absolute;
    transform: translate(-50%,-50%);
    animation: move 1s linear infinite;
    border-radius: 50%;
    pointer-events: none;

}

    
}

</style>