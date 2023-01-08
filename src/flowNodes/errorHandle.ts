import { ServiceType } from "@/shared/protocols/serviceProto"
import { WsClient } from "tsrpc-browser"

export function errorHandle(client:WsClient<ServiceType>){
    client.flows.preApiReturnFlow.push(v =>{
        if(!v.return.isSucc){
            ElMessage.error(v.return.err.message)
            return null;
        }
        
        return v
    })
}