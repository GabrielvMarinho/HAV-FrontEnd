
export default async function(

    id: number
  
  ): Promise<any>{
    const url = `http://localhost:9090/property/realtorProperty/${id}`;
    console.log(url)
    try{

    const response = await fetch(url, {
      
      credentials:"include"
    });
  
    const data = await response.json();
    

    return data

    }catch{
        return [];
    }
  }
  