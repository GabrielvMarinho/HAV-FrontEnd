
export default async function(

    id: number
  
  ): Promise<
    RealtorEditDto>{
    const url = `http://localhost:9090/realtor/${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
  
    const data = await response.json();
    console.log(data)
    const { address, ...rest } = data;
    const realtor = { ...rest, ...address };

    console.log(realtor)
    return realtor

    }catch{
        return {} as RealtorEditDto;
    }
  }
  