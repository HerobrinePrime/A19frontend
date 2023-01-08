import { ServiceType } from '@/shared/protocols/serviceProto';
import { WsClient } from 'tsrpc-browser';
import { defineStore } from "pinia"

export const useClientStore = defineStore('client',{
    state:()=>{
        return{
            client:{} as WsClient<ServiceType>
        }
    }
})