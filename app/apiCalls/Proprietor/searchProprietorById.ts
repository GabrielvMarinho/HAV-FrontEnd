
export default async function(

    id: number
  
  ): Promise<
    ProprietorEditDto>{
    const url = `http://localhost:9090/proprietor/${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
  
    const data = await response.json();
    console.log(data)
    const { address, ...rest } = data;
    const proprietor = { ...rest, ...address };

    console.log(proprietor)
    return proprietor

    }catch{
        return {} as ProprietorEditDto;
    }
  }
  