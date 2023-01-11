<template>
  <div class="App">
    <h1>Client</h1>

    <div>
      <Login />
      <UploadDemo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useClientStore } from "./pinia/stores/client";
import { ServiceType } from '@/shared/protocols/serviceProto';
import { HttpClient } from "tsrpc-browser";
import { storeToRefs } from "pinia";

const clientStore = useClientStore()
const { currentUser } = storeToRefs(clientStore)
let client = clientStore.client as HttpClient<ServiceType>

onMounted(async () => {

  const { res } = await client.callApi('Login/TestToken', {})
  // console.log(res);
  clientStore.$patch({
    currentUser: res?.user
  })

  // const ret = await client.callApi('Login/Login', {
  //   email: 'Seydlitz@asdf.asdf',
  //   password: 'sms'
  // })
  // if (ret.isSucc) {
  //   ElMessage.success('登录成功')
  //   localStorage.setItem('token', ret.res.token || '')
  //   currentUser.value = ret.res.user
  // }

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
</style>
