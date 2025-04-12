'use client';

import { useForm } from "react-hook-form";
import Button from "../Inputs/Button";
import Dropdown from "../Inputs/Dropdown";
import InputDropdown from "../Inputs/InputDropdown";
import InputText from "../Inputs/InputText";
import InputTextArea from "../Inputs/InputTextArea";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import { newContactUsEmail } from "@/app/Validators/ContactUseValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import sendContactUsEmail from "@/app/apiCalls/Email/sendContactUsEmail";

export default function ContactUsForm(props :{customerId: string}) {
 
    const form = useForm<newContactUsEmail>({
        resolver: zodResolver(newContactUsEmail),
        mode: "onTouched",
    });
    function onSubmit(data: newContactUsEmail) {
        console.log(data)
        async function fetch(){
            const response = await sendContactUsEmail(props.customerId, data.reason, data.contactUsDescription)
            return response;
        }
        fetch()
        window.location.href= window.location.href

    };

    return (
        <div className="subContainerContactUs">
            <h2 className="contatoTitle">FORMULÁRIO DE CONTATO</h2>
            <div className="containerInputs">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h3>Um email será enviado para o suporte da hav, que responderão com um email o mais cedo possível.</h3>
                    <div className="inputDropdownContact">
                    <InputDropdown
                        key={dropdownFields.reasonContactUs.id}
                        name={dropdownFields.reasonContactUs.name}
                        size={dropdownFields.reasonContactUs.size}
                        text={dropdownFields.reasonContactUs.text}
                        id={dropdownFields.reasonContactUs.id}
                        register={form.register}
                        error={form.formState.errors[dropdownFields.reasonContactUs.name as keyof newContactUsEmail]}
                        
                        options={dropdownFields.reasonContactUs.options}
                    />
                    </div>
                    <div className="inputMensageContactUs">
                        <InputTextArea 
                            name="contactUsDescription"
                            rows={10} 
                            size="extense" 
                            id="contactUsDescription"
                            text="Mensagem"
                            register={form.register}
                            error={form.formState.errors["contactUsDescription" as keyof newContactUsEmail]}
                        
                            placeholder="Digite sua mensagem"
                        />
                    </div>
                    <div className="buttonContainer">
                        <Button 
                            type="submit" 
                            size="large" 
                            text="ENVIAR" 
                            hover="darken" 
                            color="#B23F52" 
                            background="white"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

