import { getClient } from '@/getClient';
import { ServiceType } from '@/shared/protocols/serviceProto';
import { HttpClient, WsClient } from 'tsrpc-browser';
import pinia from '@/pinia';
import { useClientStore } from '@/pinia/stores/client';
import { sendToken } from '@/flowNodes/sendToken';
import { errorHandle } from '@/flowNodes/errorHandle';

const initClient = (client:HttpClient<ServiceType>) => {

    //flows
    sendToken(client)
    errorHandle(client)

    //ws bs connect
    // const res = await client.connect()
    // if(res.isSucc){
    //     console.log('connected');
    // store.client = client
    // }
    // else{
    //     ElMessage.error('fail to connect to server')
    //     throw new Error("fail to connect to server");
    // }
}

export {
    initClient
}