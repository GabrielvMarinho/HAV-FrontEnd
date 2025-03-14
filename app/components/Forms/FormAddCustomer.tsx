"use client"
import "../../variables.css"
import "./css/style.css"
import InputDropdown from "../Inputs/InputDropdown";
import InputText from "../Inputs/InputText";
import Button from "../Inputs/Button";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import ToggleButton from "../Inputs/ToggleButton";
import RadioButton from "../Inputs/RadioButton";
import ButtonUploadPhoto from "../Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "../Inputs/ButtonBackAPoint";
import postProprietor from "@/app/apiCalls/Proprietor/postProprietor";
import postAdm from "@/app/apiCalls/Adm/postAdm";
import postEditor from "@/app/apiCalls/Editor/postEditor";
import postCustomer from "@/app/apiCalls/Customer/postCustomer";
import { useRouter } from "next/navigation";
import { textFields } from "../globalFormsConfig/InputTextConfig";

export default function FormAddCustomer() {

    

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();



    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const formObject = Object.fromEntries(formData.entries()); // Converte para objeto

        console.log("----------------")
        console.log("Formulário enviado:", formObject);
    
        setPendingFormData(formObject); // Atualiza o estado com os dados preenchidos
        setIsModalOpen(true); // Abre o modal
    };


    const addProprietor = async function () {

        if (!pendingFormData) return;
        
        setIsModalOpen(false);
        console.log("-------", pendingFormData)

        try{
            await postCustomer(pendingFormData)
            router.back(); //volta um point sem ter que escrever a barra
        }
        catch(err){
            console.log(err)
        }

    };
    

   
    const inputDropdown = [
        {
            name: "state",
            size: "medium",
            text: "Estado",
            id: "estado",
            options: [
                ["sc", "Santa Catarina"],
                ["pr", "Paraná"],
                ["rs", "Rio Grande do Sul"]
            ]
        },
        {
            name: "city",
            size: "medium",
            text: "Cidade",
            id: "cidade",
            options: [
                ["jaragua_do_sul", "Jaraguá do Sul"],
                ["blumenau", "Blumenau"],
                ["joinville", "Joinville"]
            ]
        },
        {
            name: "neighborhood",
            size: "medium",
            text: "Bairro",
            id: "bairro",
            options: [
                ["centro", "Centro"],
                ["vila_nova", "Vila Nova"],
                ["três_rios_do_norte", "Três Rios do Norte"]
            ]
        }
    ];

    return (
        
        <>
            <form className="ownerForm" onSubmit={handleFormSubmit}>
                <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div className="imgPerson">
                        <ButtonUploadPhoto />
                    </div>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-white)" }}>STATUS CONTA</p>
                    <ToggleButton />
                </section>
                <article className="articleDataForm">
                    <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "center" }}>
                        <p style={{ fontSize: "var(--text-m)", fontWeight: 700, color: "var(--text-white)" }}>DADOS</p>
                    </div>
                    <div className="inputArticle">


                                <InputText
                                    key={textFields.email.id}
                                    name={textFields.email.name}
                                    size={textFields.email.size}
                                    placeholder={textFields.email.placeholder}
                                    text={textFields.email.text}
                                    id={textFields.email.id}
                                />
                                <InputText
                                    key={textFields.cep.id}
                                    name={textFields.cep.name}
                                    size={textFields.cep.size}
                                    placeholder={textFields.cep.placeholder}
                                    text={textFields.cep.text}
                                    id={textFields.cep.id}
                                />
                                <InputText
                                    key={textFields.street.id}
                                    name={textFields.street.name}
                                    size={textFields.street.size}
                                    placeholder={textFields.street.placeholder}
                                    text={textFields.street.text}
                                    id={textFields.street.id}
                                />
                                <InputText
                                    key={textFields.phoneNumber.id}
                                    name={textFields.phoneNumber.name}
                                    size={textFields.phoneNumber.size}
                                    placeholder={textFields.phoneNumber.placeholder}
                                    text={textFields.phoneNumber.text}
                                    id={textFields.phoneNumber.id}
                                />
                                <InputText
                                    key={textFields.cellphone.id}
                                    name={textFields.cellphone.name}
                                    size={textFields.cellphone.size}
                                    placeholder={textFields.cellphone.placeholder}
                                    text={textFields.cellphone.text}
                                    id={textFields.cellphone.id}
                                />
                                <InputText
                                    key={textFields.propertyNumber.id}
                                    name={textFields.propertyNumber.name}
                                    size={textFields.propertyNumber.size}
                                    placeholder={textFields.propertyNumber.placeholder}
                                    text={textFields.propertyNumber.text}
                                    id={textFields.propertyNumber.id}
                                />
                                <InputText
                                    key={textFields.complement.id}
                                    name={textFields.complement.name}
                                    size={textFields.complement.size}
                                    placeholder={textFields.complement.placeholder}
                                    text={textFields.complement.text}
                                    id={textFields.complement.id}
                                />
                                
                               
                        {inputDropdown.map((input) => (
                            <InputDropdown
                            
                                key={input.id}
                                name={input.name}  
                                size={input.size}
                                text={input.text}
                                id={input.id}
                                options={input.options}
                            />
                        ))}

                    </div>
                    <div className="divButtonsAceptCancelForms">
                        
                        <ButtonBackAPoint size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" />
                        <Button type="submit" size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)"
                            background="var(--text-white)"
                            onClick={() => setIsModalOpen(true)} />
                    </div>
                </article>
                <Modal
                    id="idModal"
                    content={
                        <div>
                            <h1>Deseja confirmar o cadastro do usuário?</h1>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={addProprietor}
                />
            </form>
        </>
    )
}