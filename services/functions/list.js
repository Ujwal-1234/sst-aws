import handler from "../util/handler";
import dynamodb from "../util/dynamodb";

export const main = handler(async(event)=>{
    const params = {
        TableName:process.env.TABLE_NAME,
        KeyConditionExpression:"userId=:userId",
        ExpressionAttributeValues:{
            ":userId":event.requestContext.authorizer.iam.congnitoIdentity.identityId
        }
    }
    const result = await dynamodb.query(params)
    return result.Items
})