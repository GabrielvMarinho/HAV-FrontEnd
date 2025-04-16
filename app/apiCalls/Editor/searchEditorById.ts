
export default async function(

    id: number
  
  ): Promise<
    EditorEditDto>{
    const url = `http://localhost:9090/editor/${id}`;
    try{

    const response = await fetch(url, {
      
      credentials:"include"
    });
  
  
    const data = await response.json();
    const { address, ...rest } = data;
    const editor = { ...rest, ...address };

    return editor

    }catch{
        return {} as EditorEditDto;
    }
  }
  