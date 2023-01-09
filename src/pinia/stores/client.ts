import { HttpClient } from 'tsrpc-browser';
import { ServiceType } from '@/shared/protocols/serviceProto';
import { WsClient } from 'tsrpc-browser';
import { defineStore } from "pinia"
import { getClient } from '@/getClient';
import { initClient } from '@/hooks/initClient';

export const useClientStore = defineStore('client', {
    state: () => {
        return {
            client: (() => {
                const client = getClient()
                initClient(client)
                return client
            })(),
            username: "",
            role: ""
        }
    }
})