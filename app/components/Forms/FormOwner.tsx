"use client"
import "../../variables.css"
import "./css/style.css"
import InputDropdown from "../Inputs/InputDropdown";
import InputText from "../Inputs/InputText";
import Button from "../Inputs/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Title from "../NonInteractable/Title";
import ButtonOpenClosed from "../Inputs/ButtonOpenClosed";
import ToggleButton from "../Inputs/ToggleButton";
import ButtonUploadPhoto from "../Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "../Inputs/ButtonBackAPoint";

export default function FormOwner() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<FormData | null>(null);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("asdasd")
        const formData = new FormData(e.currentTarget);
        setPendingFormData(formData); // Armazena os dados temporariamente
        setIsModalOpen(true); // Abre o modal
        console.log(isModalOpen)
    };

    const addOwner = async function () {
        if (!pendingFormData) return;

        const formData = pendingFormData;
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject)
    }

    const inputsDesktop = [
        { name: "nome_completo", size: "large", text: "Nome Completo", placeholder: "ex: Kauani da Silva", id: "nome_completo" },
        { name: "cpf", size: "small", text: "CPF", placeholder: "ex: 123.123.123-00", id: "cpf" },
        { name: "data_nascimento", size: "small", text: "Data Nascimento", placeholder: "dd/mm/aa", id: "data_nascimento" },
        { name: "email", size: "small", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
        { name: "cep", size: "small", text: "CEP", placeholder: "ex: 00000-000", id: "cep" },
        { name: "rua", size: "large", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
        { name: "telefone", size: "small", text: "Telefone", placeholder: "Digite o telefone", id: "telefone" },
        { name: "celular", size: "small", text: "Celular", placeholder: "+55 ( )", id: "celular" },
        { name: "numero", size: "small", text: "Número", placeholder: "1002", id: "numero" },
        { name: "complemento", size: "small", text: "Complemento", placeholder: "1030", id: "complemento" }
    ];

    const inputsMobile = [
        { name: "nome_completo", size: "medium", text: "Nome Completo", placeholder: "ex: Kauani da Silva", id: "nome_completo" },
        { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: 123.123.123-00", id: "cpf" },
        { name: "data_nascimento", size: "small", text: "Data Nascimento", placeholder: "dd/mm/aa", id: "data_nascimento" },
        { name: "email", size: "small", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
        { name: "cep", size: "small", text: "CEP", placeholder: "ex: 00000-000", id: "cep" },
        { name: "rua", size: "medium", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
        { name: "telefone", size: "small", text: "Telefone", placeholder: "Digite o telefone", id: "telefone" },
        { name: "celular", size: "small", text: "Celular", placeholder: "+55 ( )", id: "celular" },
        { name: "numero", size: "small", text: "Número", placeholder: "1002", id: "numero" },
        { name: "complemento", size: "small", text: "Complemento", placeholder: "1030", id: "complemento" }
    ]
    const inputDropdown = [
        {
            name: "estado",
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
            name: "cidade",
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
            name: "bairro",
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
            <Title text="cadastrar imóvel" tag="h1" />
            <form className="ownerForm" onSubmit={handleFormSubmit}>
                <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div className="imgPerson">
                        <ButtonUploadPhoto />
                    </div>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-white)" }}>STATUS CONTA</p>
                    <ButtonOpenClosed />
                </section>
                <article className="articleDataForm">
                    <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "center" }}>
                        <p style={{ fontSize: "var(--text-m)", fontWeight: 700, color: "var(--text-white)" }}>DADOS</p>
                        <ToggleButton />
                    </div>
                    <div className="inputArticleDesktop ">
                        {inputsDesktop.map((input) => (
                            input &&
                            <InputText
                                name={input.name}
                                size={input.size}
                                placeholder={input.placeholder}
                                text={input.text}
                                id={input.id}
                            />
                        ))}
                        {inputDropdown.map((input) => (
                            input &&
                            <InputDropdown
                                name={input.name}
                                size={input.size}
                                text={input.text}
                                id={input.id}
                                options={input.options}
                            />
                        ))}
                    </div>
                    <div className="inputArticleMobile">
                    {inputsMobile.map((input) => (
                            input &&
                            <InputText
                                name={input.name}
                                size={input.size}
                                placeholder={input.placeholder}
                                text={input.text}
                                id={input.id}
                        />
                        ))}
                        {inputDropdown.map((input) => (
                            input &&
                            <InputDropdown
                                name={input.name}
                                size={input.size}
                                text={input.text}
                                id={input.id}
                                options={input.options}
                            />
                        ))}
                    </div>  
                    <div className="divButtonsAceptCancelForms">
                        <Button size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)" background="var(--text-white)" />
                        <ButtonBackAPoint size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)"/>
                    </div>
                </article>
                <Modal id="idModal" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={addOwner}></Modal>
            </form>
        </>
    )
}