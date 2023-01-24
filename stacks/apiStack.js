import {Api, use} from "@serverless-stack/resources";
import { StorageStack } from "./storageStack";
export function ApiStack({stack, app}){
    const {table} = use(StorageStack);
    const api = new Api(stack, "Api", {
        defaults:{
            function:{
                permissions:[table],
                environment:{
                    TABLE_NAME:table.tableName
                }
            }
        },
        routes:{
            "POST /notes":"functions/create.main", 
            "GET /notes/{id}":"functions/get.main",
            "GET /notes":"functions/list.main",
            "PUT /notes/{id}":"functions/update.main"
        },
    })
    stack.addOutputs({
        ApiEndPoint: api.url,
    })
    return {api}
}