import { ServiceType } from "@/shared/protocols/serviceProto"
import { HttpClient, WsClient } from "tsrpc-browser"

export function errorHandle(client: HttpClient<ServiceType>) {
    client.flows.preApiReturnFlow.push(v => {
        if (!v.return.isSucc) {
            console.log(v.return.err);
            ElMessage.error(v.return.err.message)
            if (v.return.err.message === 'invalid token') {
                console.log("need login");
            }
            return null;
        }

        return v
    })
}