"use client"
import "../../variables.css"
import "./css/style.css"
import InputDropdown from "../Inputs/InputDropdown";
import Button from "../Inputs/Button";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import ToggleButton from "../Inputs/ToggleButton";
import ButtonUploadPhoto from "../Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "../Inputs/ButtonBackAPoint";
import postProprietor from "@/app/apiCalls/Proprietor/postProprietor";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { NewUser, newUser } from "@/app/Validators/ProprietorValidator";
import { NewRealter, newRealter } from "@/app/Validators/RealterValidator";
import Title from "../NonInteractable/Title";
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import InputText from "../Inputs/InputText";

export default function FormAddRealter() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();


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

    const form = useForm<NewRealter>({
        resolver: zodResolver(newRealter),
        mode: "onSubmit",
    });

    useEffect(() => {
        console.log("Erros do formulário:", form.formState.errors);
    }, [form.formState.errors]);

    function onSubmit(data: NewRealter) {console.log("---------------------------------")
        console.log("Dados do usuário:", data);

        if (Object.keys(form.formState.errors).length > 0) {
            console.log("Ocorreu um erro, modal não será aberto.");
            return;
        }
        console.log("abrindo modal");
        setPendingFormData(data);
        setIsModalOpen(true);
    };

    const addRealter = async function () {
        if (!pendingFormData) return;
        setIsModalOpen(false);
        console.log("-------", pendingFormData)
        try {
            await postProprietor(pendingFormData)
            router.back(); //volta um point sem ter que escrever a barra
        }
        catch (err) {
            console.log(err)
        }
    };
    console.log(isModalOpen); // Adicione isso dentro do componente FormAddRealter
    console.log("Dados do formulário antes de enviar:", pendingFormData);


    return (

        <>

            <Title text="cadastrar corretor" tag="h1" />
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

                        <InputText
                            key={textFields.name.id}
                            name={textFields.name.name}
                            size={textFields.name.size}
                            placeholder={textFields.name.placeholder}
                            text={textFields.name.text}
                            id={textFields.name.id}
                            register={form.register}
                            error={form.formState.errors[textFields.name.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.cpf.id}
                            name={textFields.cpf.name}
                            size={textFields.cpf.size}
                            placeholder={textFields.cpf.placeholder}
                            text={textFields.cpf.text}
                            id={textFields.cpf.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cpf.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.email.id}
                            name={textFields.email.name}
                            size={textFields.email.size}
                            placeholder={textFields.email.placeholder}
                            text={textFields.email.text}
                            id={textFields.email.id}
                            register={form.register}
                            error={form.formState.errors[textFields.email.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.cep.id}
                            name={textFields.cep.name}
                            size={textFields.cep.size}
                            placeholder={textFields.cep.placeholder}
                            text={textFields.cep.text}
                            id={textFields.cep.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cep.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.street.id}
                            name={textFields.street.name}
                            size={textFields.street.size}
                            placeholder={textFields.street.placeholder}
                            text={textFields.street.text}
                            id={textFields.street.id}
                            register={form.register}
                            error={form.formState.errors[textFields.street.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.phoneNumber.id}
                            name={textFields.phoneNumber.name}
                            size={textFields.phoneNumber.size}
                            placeholder={textFields.phoneNumber.placeholder}
                            text={textFields.phoneNumber.text}
                            id={textFields.phoneNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.phoneNumber.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.cellphone.id}
                            name={textFields.cellphone.name}
                            size={textFields.cellphone.size}
                            placeholder={textFields.cellphone.placeholder}
                            text={textFields.cellphone.text}
                            id={textFields.cellphone.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cellphone.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.propertyNumber.id}
                            name={textFields.propertyNumber.name}
                            size={textFields.propertyNumber.size}
                            placeholder={textFields.propertyNumber.placeholder}
                            text={textFields.propertyNumber.text}
                            id={textFields.propertyNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.propertyNumber.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.complement.id}
                            name={textFields.complement.name}
                            size={textFields.complement.size}
                            placeholder={textFields.complement.placeholder}
                            text={textFields.complement.text}
                            id={textFields.complement.id}
                            register={form.register}
                            error={form.formState.errors[textFields.complement.name as keyof NewRealter]}
                        />
                        <InputText
                            key={textFields.creci.id}
                            name={textFields.creci.name}
                            size={textFields.creci.size}
                            placeholder={textFields.creci.placeholder}
                            text={textFields.creci.text}
                            id={textFields.creci.id}
                            register={form.register}
                            error={form.formState.errors[textFields.creci.name as keyof NewRealter]}
                        />

                        <InputDropdown
                            name={dropdownFields.city.name}
                            size={dropdownFields.city.size}
                            text={dropdownFields.city.text}
                            id={dropdownFields.city.id}
                            options={dropdownFields.city.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.city.name as keyof NewRealter]}
                        />
                        <InputDropdown
                            key={dropdownFields.state.id}
                            name={dropdownFields.state.name}
                            size={dropdownFields.state.size}
                            text={dropdownFields.state.text}
                            id={dropdownFields.state.id}
                            options={dropdownFields.state.options}
                            register={form.register}
                            error={form.formState.errors.state}
                        />
                        <InputDropdown
                            key={dropdownFields.neighborhood.id}
                            name={dropdownFields.neighborhood.name}
                            size={dropdownFields.neighborhood.size}
                            text={dropdownFields.neighborhood.text}
                            id={dropdownFields.neighborhood.id}
                            options={dropdownFields.neighborhood.options}
                            register={form.register}
                            error={form.formState.errors.neighborhood}
                        />

                    </div>
                    <div className="divButtonsAceptCancelForms">
                        <ButtonBackAPoint size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" />
                        <Button type="submit" size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)"
                            background="var(--text-white)"
                        />
                    </div>
                </article>
                <Modal
                    id="idModal"
                    content={
                        <div>
                            <h1>Deseja confirmar o cadastro do proprietário?</h1>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={addRealter}
                />
            </form>
        </>
    )
}