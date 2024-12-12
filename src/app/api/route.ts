
export async function POST({request}:{request:Request}){
    try{
        const formData = await request.formData();
        const tasks = formData.get("contents");

        if(!tasks){
            const responseBody = JSON.stringify({
                success: false,
                message: "null contents",
            })
            const statusObject = {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            }

            return new Response(responseBody, statusObject);
        }


        return new Response()
    } catch{

    }
}