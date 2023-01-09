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
import { HttpClient, WsClient } from "tsrpc-browser";
import { storeToRefs } from "pinia";

const clientStore = useClientStore()
const { username, role } = storeToRefs(clientStore)
let client = clientStore.client as HttpClient<ServiceType>
// initClient().then(async () => {
//   const { client } = useClientStore()


//   const ret = await client.callApi('Login',{
//     username:'zireael',
//     password:'herobrine'
//   })
//   localStorage.setItem('token',ret.res?.token || '')

// })

onMounted(async () => {

  // const { res } = await client.callApi('Login/TestToken', {})
  // clientStore.$patch({
  //   username: res?.username,
  //   role: res?.role
  // })



  const { res } = await client.callApi('Login/Login', {
    username: 'Seydlitz',
    password: 'sms'
  })
  ElMessage.success('登录成功')
  localStorage.setItem('token', res?.token || '')
  clientStore.$patch({
    username: res?.username,
    role: res?.role
  })

  // const ret2 = await client.callApi('Send', {
  //   content: 'asdfasdf'
  // })
  // console.log(ret2);

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
