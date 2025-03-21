
export default async function(

    id: number
  
  ): Promise<
    CustomerEditDto>{
    const url = `http://localhost:9090/customer/${id}`;
    try{

    const response = await fetch(url);
  
  
    const data = await response.json();
    const { address, ...rest } = data;
    const customer = { ...rest, ...address };

    return customer

    }catch{
        return {} as CustomerEditDto;
    }
  }
  