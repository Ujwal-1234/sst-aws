export default function handler(lambda){
    return async function(event, context){
        let body, statuscode;
        try{
            body = await lambda(event, context)
            statuscode=200

        }catch(e){
            console.error(e)
            body = {error:e.message}
            statuscode=500
        }
        return {
            statuscode, 
            body:JSON.stringify(body),
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Credentials":true
            }
        }
    }
}