import { zodResolver } from "@hookform/resolvers/zod";
import InputTextTest from "../../components/Inputs/InputTextTest";
import { useForm } from "react-hook-form"
import { NewUser, newUser } from "@/app/Validators/UserValidator";

export default function FormTestInput() {

    const inputsDesktop = [
        { name: "name", size: "large", text: "Nome", placeholder: "ex: kauani ", id: "nome" },
        { name: "email", size: "large", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
        { name: "cep", size: "small", text: "CEP", placeholder: "ex: 00000-000", id: "cep" },
        { name: "street", size: "large", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
        { name: "phone", size: "small", text: "Telefone", placeholder: "Digite o telefone", id: "telefone" },
        { name: "cellphone", size: "small", text: "Celular", placeholder: "+55 ( )", id: "celular" },
        { name: "propertyNumber", size: "small", text: "Número", placeholder: "1002", id: "numero" },
        { name: "complement", size: "small", text: "Complemento", placeholder: "1030", id: "complemento" }
    ];

    const { register, handleSubmit } = useForm<NewUser>({
        resolver: zodResolver(newUser) //resolve os erros
    });

    function onSubmit(data: NewUser) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}> {/*Chamando desse jeito pq não tenho o obj form*/}
            {inputsDesktop.map((input) => (
                <InputTextTest
                    key={input.id}
                    name={input.name}
                    size={input.size}
                    placeholder={input.placeholder}
                    text={input.text}
                    id={input.id}
                    register={register} //precisando fazer assim e nao com o name pq se não duplica
                />
            ))}

            <button>Salvar</button>
        </form>

    );
}