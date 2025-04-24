export async function forgotPassword(email: string){
    try {
      const response = await fetch(`http://localhost:9090/auth/forgot-password?email=${email}`, {
        method: "POST",
        
      });
  
      const data = await response.json();
      
  
      return(data);
    } catch (error) {
      console.error("Erro:", error);
      return("Erro ao solicitar redefinição de senha.");
    }
  }
  