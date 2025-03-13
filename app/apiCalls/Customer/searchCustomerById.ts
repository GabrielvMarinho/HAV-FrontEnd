
export default async function(

    id: number
  
  ): Promise<
    CustomerEditDto>{
    const url = `http://localhost:9090/customer/${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
  
    const data = await response.json();
    console.log(data)
    const { address, ...rest } = data;
    const customer = { ...rest, ...address };

    console.log(customer)
    return customer

    }catch{
        return {} as CustomerEditDto;
    }
  }
  