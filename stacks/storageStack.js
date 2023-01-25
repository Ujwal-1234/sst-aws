import {Table} from "@serverless-stack/resources";
import { Bucket } from "aws-cdk-lib/aws-s3";
export function StorageStack({stack, app}){
    const bucket = new Bucket(stack, "Uploads",{
        cors:[
            {
                maxAge:"1 day",
                allowedMethods:["GET", "PUT", "POSt", "DELETE", "HEAD"],
                allowedOrigins:["*"],
                allowedHeaders:["*"]
            }
        ]
    })
    const table = new Table(stack, "Notes", {
        fields:{
            userId:"string",
            noteId:"string"
        },
        primaryIndex:{
            partitionKey:"userId", sortKey:"noteId"
        },

    })
    return ({table, bucket})
}