<template>
  <div id="Login">
    <div id="container">
      <p>Login</p>
      <el-input id="email" v-model="email" placeholder="请输入邮箱" />
      <el-input id="password"  type="password" show-password v-model="password" placeholder="请输入密码"></el-input>

      <div id="remember">
        <el-checkbox label="记住我" v-model="remember"></el-checkbox>
      </div>
      
      <div id="forget-password">
        <el-link href="#" type="primary">忘记密码</el-link>
      </div>
      
      
      <br>
      <div id="login">
        <el-button type="primary" size="large" @click="login"> 登录</el-button>
      </div>
      
      <br>

      <div id="customer">
        <el-link href="#" type="primary">联系客服</el-link>
      
      </div>
      
      <div id="register">
        <el-link href="#" type="primary">注册</el-link>
      
      </div>
     
    
    </div>

    
     <!-- 方块动画
     <ul class="square">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    圆形气泡动画
    <ul class="circle">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul> -->
  </div>
</template>

<script lang="ts" setup>
import { useClientStore } from "@/pinia/stores/client";
import { ref } from "vue";
const email = ref('')
const password = ref('')
const remember = ref(false)

const store = useClientStore()
const client = store.client

const login = async ()=>{
  const { res } = await client.callApi('Login/Login',{
    username:'Seydlitz',
    password:'sms'
  })
  ElMessage.success('登录成功')
  localStorage.setItem('token',res?.token as string)
  store.$patch({
    username:res?.username,
    role:res?.role
  })
}
</script>

<style lang="less" scoped>
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    
}

#container{
    position: absolute;
        top: 50%;
        // margin: 0 auto;
        margin-top: -200px;
        left: 50%;
        margin-left: -200px;
        //居中

        background-color: whitesmoke;
        width: 400px;
        height: 400px;
        border-radius: 10px;
        text-align: center;
        padding: 5px 40px;
        box-sizing: border-box;
    

        #remember{
            position: relative;
            left: -125px;
        }

        #forget-password{
            position: relative;
            top: -28px;
            left: 130px;
        }

        #login{
            position: relative;
            top: -20px;
        }

        #customer{
            position: relative;
            top: -20px;
            left: -125px;
        }

        #register{
            position: relative;
            left: 145px;
            top: -45px;
        }

   
        .el-input{
            margin-bottom: 25px;
            height: 40px;
        }
        .el-button{
        width: 150px;
    }
    p{
        font-size: 42px;
            font-weight: 600;
            margin-bottom: 50px;
    }
}



// #Login{
//   width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: linear-gradient(#a7aef1, #8078eb);
// }
// h1{
//     font-size: 36px;
//     color: white;
//     position: absolute;
//     top: 20%;
//     left: 50%;
//     transform: translate(-50%,-50%);
// }

// ul li {
//     width: 30px;
//     height: 30px;
//     border: 1px solid white;
//     position: absolute;
//     list-style: none;
    

// }
// .square li{
//     animation: square 10s linear infinite;
// }


// .square li:nth-child(1){
//     top:50vh;
//     left: 45vw;
//     animation-delay: 1s;
// }
// .square li:nth-child(2){
//     top:80vh;
//     left: 15vw;
//     animation-delay: 2s;
//     background: white;
// }
// .square li:nth-child(3){
//     top:80vh;
//     left: 85vw;
//     animation-delay: 3s;
// }
// .square li:nth-child(4){
//     top:10vh;
//     left: 75vw;
//     animation-delay: 4s;
//     background: white;
// }
// .square li:nth-child(5){
//     top:10vh;
//     left: 10vw;
    
// }

// @keyframes square{
//     from{
//         opacity: 1;
//         transform: translateY(0) scale(0) rotateY(0);
//     }
//     to{
//         opacity: 0;
//         transform: translateY(-10vh) scale(5) rotateY(1000deg);
//     }
// }

// .circle li{
//     bottom: 0;
//     animation: circle 10s linear infinite;
// }
// .circle li:nth-child(1){
//     left: 10vw;
//     animation-delay: 1s;
// }
// .circle li:nth-child(2){
//     background: white;
//     left: 25vw;
//     animation-delay: 2s;
// }
// .circle li:nth-child(3){
//     left: 45vw;
//     animation-delay: 3s;
   
// }
// .circle li:nth-child(4){
//     left: 65vw;
//     animation-delay: 4s;
//     background: white;
// }
// .circle li:nth-child(5){
//     left: 85vw;
// }

// @keyframes circle{
//     from{
//         opacity: 1;
//         transform: translateY(0) scale(0) rotate(0);
//     }
//     to{
//         opacity: 0;
//       transform: translateY(-90vh) scale(5) rotate(1000deg);
//         border-radius: 50%;
//     }

// }



// span{
//     background-color: #fff;
//     position: absolute;
//     transform: translate(-50%,-50%);
//     animation: move 1s linear infinite;
//     border-radius: 50%;
//     pointer-events: none;

// }


</style>