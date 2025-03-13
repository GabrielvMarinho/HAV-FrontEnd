
export default async function(

    id: number
  
  ): Promise<
    AdmEditDto>{
    const url = `http://localhost:9090/adm/${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
  
    const data = await response.json();
    console.log(data)
    const { address, ...rest } = data;
    const adm = { ...rest, ...address };

    console.log(adm)
    return adm

    }catch{
        return {} as AdmEditDto;
    }
  }
  