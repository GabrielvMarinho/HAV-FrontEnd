export default async function(){
    const url = "http://localhost:9090/auth/logout";

    try {
        const response = await fetch(url, {
        })
        if (response.ok) {
            const data = await response.text(); 
            
            return {
                success: true,
                message: data,
            };
        }else{
            console.log(response)
        }
    }catch(e){  
        return "Erro ao fazer logout"
    }

}