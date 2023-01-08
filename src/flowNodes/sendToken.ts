import { ServiceType } from './../../../backend/src/shared/protocols/serviceProto';
import { WsClient } from 'tsrpc-browser';

export function sendToken(client:WsClient<ServiceType>){
    client.flows.preCallApiFlow.push(v =>{
        const token = localStorage.getItem('token')
        v.req.__token = token ? token : undefined
        return v
    })
}