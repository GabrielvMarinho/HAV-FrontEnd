
export default async function(

    id: number
  
  ): Promise<
    AdmEditDto>{
    const url = `http://localhost:9090/adm/${id}`;
    try{

    const response = await fetch(url, {
      credentials:"include"
    });
  
  
    const data = await response.json();
    const { address, ...rest } = data;
    const adm = { ...rest, ...address };

    return adm

    }catch{
        return {} as AdmEditDto;
    }
  }
  