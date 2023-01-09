import { HttpClient, WsClient } from "tsrpc-browser";
import { serviceProto, ServiceType } from "./shared/protocols/serviceProto";

// export function getClient(): WsClient<ServiceType> {
//     return new WsClient(serviceProto, {
//         server: "ws://127.0.0.1:3000",
//         // Remove this to use binary mode (remove from the server too)
//         json: true,
//         logger: console,
//         logLevel:'warn'
//     })
// }
export function getClient():HttpClient<ServiceType>{
    return new HttpClient(serviceProto,{
        server:"http://127.0.0.1:3000",
        json:true,
        logger:console,
        logLevel:"warn"
    })
}