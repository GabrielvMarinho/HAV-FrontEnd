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

export default function FormAddUserOwner() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const formObject = Object.fromEntries(formData.entries()); // Converte para objeto
        console.log("----------------")
        console.log("Formulário enviado:", formObject);
        setPendingFormData(formObject); // Atualiza o estado com os dados preenchidos
        console.log(pendingFormData)
        setIsModalOpen(true); // Abre o modal
    };


    const addOwner = async function () {

        if (!pendingFormData) return;
        
        setIsModalOpen(false);
        console.log(pendingFormData, "----------------------")
        console.log(JSON.stringify({
            "name": pendingFormData.name,
            "email": pendingFormData.email,
            "password": "securePassword123",
            "celphone": pendingFormData.cellphone,
            "birthDate": pendingFormData.birth_date,
            "cpf": pendingFormData.cpf,
            "archived":false,
            "address": {
                "cep":pendingFormData.cep,
                "street":pendingFormData.street,
                "neighborhood":pendingFormData.neighborhood,
                "city":pendingFormData.city,
                "state":pendingFormData.state,
                "propertyNumber":pendingFormData.property_number,
                "complement":pendingFormData.complement
            }
        }))
        try {
            const response = await fetch("http://localhost:9090/customer", { 
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Adicionar cabeçalho
                
                body: JSON.stringify({
                    "name": pendingFormData.name,
                    "email": pendingFormData.email,
                    "password": "securePassword123",
                    "celphone": pendingFormData.cellphone,
                    "birthDate": pendingFormData.birth_date,
                    "cpf": pendingFormData.cpf,
                    "archived":false,
                    "address": {
                        "cep":pendingFormData.cep,
                        "street":pendingFormData.street,
                        "neighborhood":pendingFormData.neighborhood,
                        "city":pendingFormData.city,
                        "state":pendingFormData.state,
                        "propertyNumber":pendingFormData.property_number,
                        "complement":pendingFormData.complement
                    }
                })
                
            });
    
            if (!response.ok) {
                throw new Error(`Erro ao cadastrar usuário: ${response.status} - ${response.statusText}`);
            }
    
            console.log("Usuário cadastrado com sucesso!", await response.json());
    
            setPendingFormData(null); // Limpa o formulário somente se deu certo
    
        } catch (err) {
            console.error("Erro ao se comunicar com a API:", err);
        }
    };
    

    const inputsDesktop = [
        { name: "name", size: "large", text: "Nome Completo", placeholder: "ex: Kauani da Silva", id: "nome_completo" },
        { name: "cpf", size: "small", text: "CPF", placeholder: "ex: 123.123.123-00", id: "cpf" },
        { name: "birth_date", size: "small", text: "Data Nascimento", placeholder: "dd/mm/aa", id: "data_nascimento" },
        { name: "email", size: "small", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
        { name: "cep", size: "small", text: "CEP", placeholder: "ex: 00000-000", id: "cep" },
        { name: "street", size: "large", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
        { name: "phone", size: "small", text: "Telefone", placeholder: "Digite o telefone", id: "telefone" },
        { name: "cellphone", size: "small", text: "Celular", placeholder: "+55 ( )", id: "celular" },
        { name: "property_number", size: "small", text: "Número", placeholder: "1002", id: "numero" },
        { name: "complement", size: "small", text: "Complemento", placeholder: "1030", id: "complemento" }
    ];

    const inputsMobile = [
        { name: "name", size: "medium", text: "Nome Completo", placeholder: "ex: Kauani da Silva", id: "nome_completo" },
        { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: 123.123.123-00", id: "cpf" },
        { name: "birth_date", size: "small", text: "Data Nascimento", placeholder: "dd/mm/aa", id: "data_nascimento" },
        { name: "email", size: "medium", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
        { name: "cep", size: "small", text: "CEP", placeholder: "ex: 00000-000", id: "cep" },
        { name: "rua", size: "medium", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
        { name: "telefone", size: "small", text: "Telefone", placeholder: "Digite o telefone", id: "telefone" },
        { name: "celular", size: "small", text: "Celular", placeholder: "+55 ( )", id: "celular" },
        { name: "numero", size: "small", text: "Número", placeholder: "1002", id: "numero" },
        { name: "complemento", size: "small", text: "Complemento", placeholder: "1030", id: "complemento" }
    ]
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
                        <RadioButton />
                    </div>
                    <div className="inputArticle">
                        {isMobile ? (
                            inputsMobile.map((input) => (
                                <InputText
                                    key={input.id}
                                    name={input.name}
                                    size={input.size}
                                    placeholder={input.placeholder}
                                    text={input.text}
                                    id={input.id}
                                />
                            ))
                        ) : (
                            inputsDesktop.map((input) => (
                                <InputText
                                    key={input.id}
                                    name={input.name}
                                    size={input.size}
                                    placeholder={input.placeholder}
                                    text={input.text}
                                    id={input.id}
                                />
                            ))
                        )}
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
                        <Button type="submit" size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)"
                            background="var(--text-white)"
                            onClick={() => setIsModalOpen(true)} />
                        <ButtonBackAPoint size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" />
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
                    onConfirm={addOwner}
                />
            </form>
        </>
    )
}