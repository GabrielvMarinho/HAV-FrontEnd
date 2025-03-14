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
import { useRouter } from "next/navigation";
import { NewEditorOrAdm, newEditorOrAdm } from "@/app/Validators/EditorOrAdmValidator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Title from "../NonInteractable/Title";

export default function FormAddEditor() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();


    const addEditor = async function () {

        if (!pendingFormData) return;

        setIsModalOpen(false);
        console.log("-------", pendingFormData)

        try {
            await postEditor(pendingFormData)
            router.back(); //volta um point sem ter que escrever a barra
        }
        catch (err) {
            console.log(err)
        }
    };


    const inputsDesktop = [
        { name: "name", size: "large", text: "Nome", placeholder: "ex: kauani da SIlva", id: "nome" },
        { name: "cpf", size: "large", text: "CPF", placeholder: "ex: 123-123-123-00", id: "cpf" },
        { name: "email", size: "large", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
        { name: "cep", size: "small", text: "CEP", placeholder: "ex: 00000-000", id: "cep" },
        { name: "street", size: "large", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
        { name: "phone", size: "small", text: "Telefone", placeholder: "Digite o telefone", id: "telefone" },
        { name: "cellphone", size: "small", text: "Celular", placeholder: "+55 ( )", id: "celular" },
        { name: "propertyNumber", size: "small", text: "Número", placeholder: "1002", id: "numero" },
        { name: "complement", size: "small", text: "Complemento", placeholder: "1030", id: "complemento" }
    ];


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

    const form = useForm<NewEditorOrAdm>({
        resolver: zodResolver(newEditorOrAdm),
        mode: "onTouched"
    });

    function onSubmit(data: NewEditorOrAdm) {
        console.log("Dados do usuário:", data);
        if (Object.keys(form.formState.errors).length > 0) {
            console.log("Ocorreu um erro");
            return;
        }
        setPendingFormData(data),
            setIsModalOpen(true)
    }

    useEffect(() => {
        console.log("Erros do formulário:", form.formState.errors);
    }, [form.formState.errors]);


    return (

        <>
            <Title text="cadastrar editor" tag="h1" />
            <form className="ownerForm" onSubmit={form.handleSubmit(onSubmit)}>
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

                        {

                            inputsDesktop.map((input) => (
                                <InputText
                                    key={input.id}
                                    name={input.name}
                                    size={input.size}
                                    placeholder={input.placeholder}
                                    text={input.text}
                                    id={input.id}
                                    register={form.register}
                                    error={form.formState.errors[input.name as keyof NewEditorOrAdm]}
                                />
                            ))
                        }
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
                            background="var(--text-white)" />
                    </div>
                </article>
                <Modal
                    id="idModal"
                    content={
                        <div>
                            <h1>Deseja confirmar o cadastro do editor?</h1>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={addEditor}
                />
            </form>
        </>
    )
}