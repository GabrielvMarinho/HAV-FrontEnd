import Button from "../Inputs/Button";
import InputTextLogin from "../Inputs/InputTextLogin";

export default function SignUpForm(){
    
    return(
            <form>
                <InputTextLogin name="name" size="medium" id="user" text="Nome" placeholder="Digite seu nome" icon={<User width="18" height="18" color="var(--text-light-red)"/>}/>
                <InputTextLogin name="name" size="medium" id="user" text="E-mail" placeholder="Digite seu e-mail" icon={<Envelope width="18" height="18" color="var(--text-light-red)"/>}/>
                <InputTextLogin name="name" size="medium" id="user" text="Senha" placeholder="Digite sua senha" icon={<Eye width="18" height="18" color="var(--text-light-red)"/>}/>
                <InputTextLogin name="name" size="medium" id="user" text="Confirmar senha" placeholder="Digite sua senha" icon={<Eye width="18"  height="18" color="var(--text-light-red)"/>}/>
                    <div className="botao">
                        <Button name="button" size="small" text="Entrar" /> 
                    </div>
                    <div className="containerGoogle">
                        <p className="ou">ou</p>
                        <img className={"Google"} src="/Image/Google.png"/>
                    </div>
                    <p className="naoPossuiConta"> Já possui Conta? <p className="cadastrarConta"> Entrar </p></p>
                </form>
    );
}