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

    await client.connect()

    store.client = client
}

export {
    initClient
}