
export default async function(

    id: number
  
  ): Promise<
    RealtorEditDto>{
    const url = `http://localhost:9090/realtor/${id}`;
    try{

    const response = await fetch(url);
  
  
    const data = await response.json();
    const { address, ...rest } = data;
    const realtor = { ...rest, ...address };

    return realtor

    }catch{
        return {} as RealtorEditDto;
    }
  }
  