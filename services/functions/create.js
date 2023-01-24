import * as uuid from 'uuid'
import handler from "../util/handler"
import dynamodb from "../util/dynamodb"


// // const dynamoDb = new AWS.DynamoDB.DocumentClient();
// export const main = handler (async(event)=>{
//     const data = JSON.parse(event.body)
//     const params = {
//         TableName: process.env.TABLE_NAME,
//         Item:{
//             userId:event.requestContext.authorizer.iam.congnitoIdentity.identityId,
//             noteId:uuid.v1(),
//             content:data.content,
//             attachment:data.attachment,
//             createdAt:Date.now()
//         }
//     }
//     await dynamodb.put(params)
     
//     return params.Item;
// })




// import * as uuid from "uuid";
// import handler from "../utils/handler";
// import dynamodb from "../utils/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamodb.put(params);

  return params.Item;
});