
export default async function(

    id: number
  
  ): Promise<
    EditorEditDto>{
    const url = `http://localhost:9090/editor/${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
  
    const data = await response.json();
    console.log(data)
    const { address, ...rest } = data;
    const editor = { ...rest, ...address };

    console.log(editor)
    return editor

    }catch{
        return {} as EditorEditDto;
    }
  }
  