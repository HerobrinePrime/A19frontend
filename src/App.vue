<template>
  <div class="App">
    <h1>TSRPC Chatroom</h1>

    <div>
      <!-- <Chatroom title="Client #1" />
      <Chatroom title="Client #2" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from "vue";
import Chatroom from "./Chatroom.vue";
import { initClient } from "./hooks/initClient";
import { getClient } from "./getClient";
import { useClientStore } from "./pinia/stores/client";
import { setLogLevel } from "tsrpc-proto";
import { ServiceType } from '@/shared/protocols/serviceProto';
import { WsClient } from "tsrpc-browser";
// import { ElMessage } from 'element-plus'

let client: WsClient<ServiceType>;
// initClient().then(async () => {
//   const { client } = useClientStore()


//   const ret = await client.callApi('Login',{
//     username:'zireael',
//     password:'herobrine'
//   })
//   localStorage.setItem('token',ret.res?.token || '')

// })

onMounted(async () => {
  try {
    await initClient()

    client = useClientStore().client as WsClient<ServiceType>
    const ret = await client.callApi('Login', {
      username: 'zireael',
      password: 'herobrine'
    })
    ElMessage.success('登录成功')
    localStorage.setItem('token', ret.res?.token || '')

  } catch (error) {
    console.log(error);
  }




  // const ret = await client.callApi('Send', {
  //   content: 'asdfasdf'
  // })
  // console.log(ret);

})


// clinet.callApi('Login')
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  >h1 {
    text-align: center;
    margin-top: 20px;
  }

  >div {
    display: flex;
    justify-content: center;
  }
}
</style>
