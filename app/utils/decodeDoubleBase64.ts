export default function (encodedStr:any){
  if(encodedStr == null){
    return null
  }
    try {
      // First decode the outer Base64 to get the actual Data URL
      const decodedStr = atob(encodedStr);
      
      // If the decoded string is a proper Data URL, use it directly
      if (decodedStr.startsWith('data:image')) {
        return decodedStr;
      }
      
      // If not, try to construct a Data URL
      return `data:image/png;base64,${decodedStr}`;
    } catch (e) {
      console.error("Error decoding image:", e);
      return '';
    }
  };