"use client"
import "../../variables.css"
import "../configuration/style/style.css"
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import InputText from "@/app/components/Inputs/InputText";
import Button from "@/app/components/Inputs/Button";
import Modal from "@/app/components/Modal/Modal";
import { useState, useEffect } from "react";
import ToggleButton from "@/app/components/Inputs/ToggleButton";
import RadioButton from "@/app/components/Inputs/RadioButton";
import ButtonUploadPhoto from "@/app/components/Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "@/app/components/Inputs/ButtonBackAPoint";
import postCustomer from "@/app/apiCalls/Customer/postCustomer";
import { useRouter } from "next/navigation";
import { configFields } from "@/app/components/globalFormsConfig/InputProfileConfigTextConfig";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NewCustomer, newCustomer } from "@/app/Validators/CustomerValidator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveConfig } from "@/app/Validators/ProfileConfigValidator";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Title from "@/app/components/NonInteractable/Title";

export default function configuration() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();

    const form = useForm<saveConfig>({
        resolver: zodResolver(saveConfig),
        mode: "onSubmit",
    });

    function onSubmit(data: saveConfig) {

        if (Object.keys(form.formState.errors).length > 0) {
            console.log("erros")
            return;
        }
        setPendingFormData(data);
        setIsModalOpen(true);
    };

    

    const addCustomer = async function () {
        if (!pendingFormData) return;
        setIsModalOpen(false);

        try {
            const response = await postCustomer(pendingFormData);
            if (response) {
                router.back(); // Volta um ponto sem ter que escrever a barra
            }
        } catch (err: any) {

            // Verifica se a resposta do backend está disponível
            if (err.response?.data) {
                const { message, errors } = err.response.data;

                // Limpa erros anteriores
                form.clearErrors();

                // Mapear os erros do backend para os campos do formulário
                if (errors && Array.isArray(errors)) {
                    errors.forEach((errorMessage: string) => {
                        const [fieldName, message] = errorMessage.split(": ");
                        if (fieldName && message) {
                            form.setError(fieldName.toLowerCase() as keyof saveConfig, {
                                type: "manual",
                                message: message.trim(),
                            });
                        }
                    });
                } else {
                    // Erro genérico caso a mensagem de erro não esteja disponível
                    form.setError("root", {
                        type: "manual",
                        message: message || "Ocorreu um erro ao processar a solicitação.",
                    });
                }
            } else {
                // Erro de rede ou outro erro inesperado
                form.setError("root", {
                    type: "manual",
                    message: "Erro de conexão. Tente novamente mais tarde.",
                });
            }
        }
    };


    return (

        <>
        <HeaderAdm />
      <Title tag={"h1"} text={"configuração"} />
            <form className="ownerForm" onSubmit={form.handleSubmit(onSubmit)}>
                <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div className="imgPerson">
                    <ButtonUploadPhoto name={"image"} 
                            register={form.register}
                            error={form.formState.errors["image" as keyof saveConfig]}/>
                    </div>
                    <p><p className="personName">KAUANI DA SILVA</p>
            <p className="userType">Administrador</p></p>
                </section>
                <article className="articleDataForm">
                    <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "start" }}>
                        <p style={{ fontSize: "var(--text-m)", fontWeight: 700, color: "var(--text-white)" }}>INFORMAÇÕES PESSOAIS</p>
                    </div>
                    <div className="inputArticle">
                    <InputText
                            key={configFields.name.id}
                            name={configFields.name.name}
                            size={configFields.name.size}
                            placeholder={configFields.name.placeholder}
                            text={configFields.name.text}
                            id={configFields.name.id}
                            register={form.register}
                            error={form.formState.errors[configFields.name.name as keyof saveConfig]}
                        />
                        <InputText
                          key={configFields.phoneNumber.id}
                          name={configFields.phoneNumber.name}
                          size={configFields.phoneNumber.size}
                          placeholder={configFields.phoneNumber.placeholder}
                          text={configFields.phoneNumber.text}
                          id={configFields.phoneNumber.id}
                          register={form.register}
                          error={form.formState.errors[configFields.phoneNumber.name as keyof saveConfig]}
                        />
                        <InputText
                            key={configFields.cpf.id}
                            name={configFields.cpf.name}
    size={configFields.cpf.size}
    placeholder={configFields.cpf.placeholder}
    text={configFields.cpf.text}
    id={configFields.cpf.id}
    register={form.register}
    error={form.formState.errors[configFields.cpf.name as keyof saveConfig]}
    disabled={true}  // Isso torna o campo não editável
    className="disabled-input"  // Adicione esta classe para estilização
/>
                        <InputText
                            key={configFields.email.id}
                            name={configFields.email.name}
                            size={configFields.email.size}
                            placeholder={configFields.email.placeholder}
                            text={configFields.email.text}
                            id={configFields.email.id}
                            register={form.register}
                            error={form.formState.errors[configFields.email.name as keyof saveConfig]}
                        />
                        <InputText
                            key={configFields.cellphone.id}
                            name={configFields.cellphone.name}
                            size={configFields.cellphone.size}
                            placeholder={configFields.cellphone.placeholder}
                            text={configFields.cellphone.text}
                            id={configFields.cellphone.id}
                            register={form.register}
                            error={form.formState.errors[configFields.cellphone.name as keyof saveConfig]}
                        />
                        
                        <InputText
                            key={configFields.cep.id}
                            name={configFields.cep.name}
                            size={configFields.cep.size}
                            placeholder={configFields.cep.placeholder}
                            text={configFields.cep.text}
                            id={configFields.cep.id}
                            register={form.register}
                            error={form.formState.errors[configFields.cep.name as keyof saveConfig]}
                        />
                        <InputDropdown
                            key={dropdownFields.city.id}
                            name={dropdownFields.city.name}
                            size={dropdownFields.city.size}
                            text={dropdownFields.city.text}
                            id={dropdownFields.city.id}
                            options={dropdownFields.city.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.city.name as keyof saveConfig]}
                        />
                        <InputDropdown
                            key={dropdownFields.state.id}
                            name={dropdownFields.state.name}
                            size={dropdownFields.state.size}
                            text={dropdownFields.state.text}
                            id={dropdownFields.state.id}
                            options={dropdownFields.state.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.state.name as keyof saveConfig]}
                        />
                        <InputDropdown
                            key={dropdownFields.neighborhood.id}
                            name={dropdownFields.neighborhood.name}
                            size={dropdownFields.neighborhood.size}
                            text={dropdownFields.neighborhood.text}
                            id={dropdownFields.neighborhood.id}
                            options={dropdownFields.neighborhood.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.neighborhood.name as keyof saveConfig]}
                        />
                         <InputText
                            key={configFields.propertyNumber.id}
                            name={configFields.propertyNumber.name}
                            size={configFields.propertyNumber.size}
                            placeholder={configFields.propertyNumber.placeholder}
                            text={configFields.propertyNumber.text}
                            id={configFields.propertyNumber.id}
                            register={form.register}
                            error={form.formState.errors[configFields.propertyNumber.name as keyof saveConfig]}
                        />
                        <InputText
                            key={configFields.street.id}
                            name={configFields.street.name}
                            size={configFields.street.size}
                            placeholder={configFields.street.placeholder}
                            text={configFields.street.text}
                            id={configFields.street.id}
                            register={form.register}
                            error={form.formState.errors[configFields.street.name as keyof saveConfig]}
                        />
                        <InputText
                            key={configFields.complement.id}
                            name={configFields.complement.name}
                            size={configFields.complement.size}
                            placeholder={configFields.complement.placeholder}
                            text={configFields.complement.text}
                            id={configFields.complement.id}
                            register={form.register}
                            error={form.formState.errors[configFields.complement.name as keyof saveConfig]}
                        />
                    </div>
                    <div className="divButtonsAceptCancelForms">

                        <ButtonBackAPoint size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" />
                        <Button type="submit" size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)"
                            background="var(--text-white)"/>
                    </div>
                </article>
                <Modal
                    id="idModal"
                    content={
                        <div>
                            <h1>Deseja confirmar as alterações?</h1>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={addCustomer}
                />
            </form>
        </>
    )
}