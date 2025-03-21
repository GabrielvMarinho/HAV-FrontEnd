
export default async function(

    id: number
  
  ): Promise<
    ProprietorEditDto>{
    const url = `http://localhost:9090/proprietor/${id}`;
    try{

    const response = await fetch(url);
  
  
    const data = await response.json();
    const { address, ...rest } = data;
    const proprietor = { ...rest, ...address };

    return proprietor

    }catch{
        return {} as ProprietorEditDto;
    }
  }
  