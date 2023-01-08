import { getClient } from '@/getClient';
import { ServiceType } from '@/shared/protocols/serviceProto';
import { WsClient } from 'tsrpc-browser';
import pinia from '@/pinia';
import { useClientStore } from '@/pinia/stores/client';
import { sendToken } from '@/flowNodes/sendToken';
import { errorHandle } from '@/flowNodes/errorHandle';

const store = useClientStore(pinia)

const initClient = async () =>{
    const client = getClient()

    //flows
    sendToken(client)
    errorHandle(client)

    const res = await client.connect()
    if(res.isSucc){
        console.log('connected');
        store.client = client
    }
    else{
        ElMessage.error('fail to connect to server')
        throw new Error("fail to connect to server");
    }

    
}

export {
    initClient
}