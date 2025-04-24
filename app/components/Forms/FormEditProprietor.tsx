"use client"
import "../../variables.css"
import "./css/style.css"
import InputDropdown from "../Inputs/InputDropdown";
import InputText from "../Inputs/InputText";
import Button from "../Inputs/Button";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import ToggleButton from "../Inputs/ToggleButton";
import ButtonUploadPhoto from "../Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "../Inputs/ButtonBackAPoint";
import { useRouter } from "next/navigation";
import NonEditableInputText from "../Inputs/NonEditableInputText";
import searchProprietorById from "@/app/apiCalls/Proprietor/searchProprietorById";
import editProprietor from "@/app/apiCalls/Proprietor/editProprietor";
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import { EditProprietor } from "@/app/Validators/EditProprietor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newUser } from "@/app/Validators/ProprietorValidator";

export default function FormEditProprietor(props: { id: any }) {

    const [proprietor, setProprietor] = useState<ProprietorEditDto>();
    const [imageId, setImageId] = useState<number | undefined>();

    const form = useForm<EditProprietor>({
        resolver: zodResolver(EditProprietor),
        mode: "onTouched",
    });

    function onSubmit(data: EditProprietor) {
        console.log("entro")
        console.log("Submit data:", data);
        if (Object.keys(form.formState.errors).length > 0) {
            console.log("errors")
            return;
        }
        setPendingFormData(data);
        setIsModalOpen(true);
    };

    useEffect(() => {
        async function fetchProprietor() {
            try {
                const { proprietor, imageId } = await searchProprietorById(props.id);
                console.log(proprietor)
                setProprietor(proprietor)
                setImageId(imageId);
            } catch (error) {
                console.log(error);
            }
        }

        if (props.id) {
            fetchProprietor();
        }
    }, [props.id]);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();

    useEffect(() => {
        console.log(proprietor)
        if (proprietor) {
            form.reset({
                // doc: proprietor.doc,
                name: proprietor.name,
                email: proprietor.email,
                cellphone: proprietor?.cellphone,
                phoneNumber: proprietor?.phoneNumber,
                cep: proprietor.cep,
                street: proprietor.street,
                propertyNumber: proprietor.propertyNumber.toString(),
                complement: proprietor.complement ?? "",
                state: proprietor.state,
                city: proprietor.city,
                neighborhood: proprietor.neighborhood,
                deletedImageId: proprietor.deletedImageId
            });
        }
    }, [proprietor]);

    const edit = async function () {

        if (!pendingFormData) return;

        setIsModalOpen(false);

        try {
            const response = await editProprietor(props.id, pendingFormData);
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
                            form.setError(fieldName.toLowerCase() as keyof EditProprietor, {
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
            <form className="ownerForm" onSubmit={form.handleSubmit(onSubmit)}>
                <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div className="imgPerson">
                        <ButtonUploadPhoto
                            name={"image"}
                            register={form.register}
                            error={form.formState.errors["image" as keyof EditProprietor]}
                            initialImageUrl={proprietor?.imageBase64}
                            setValue={form.setValue}
                            imageId={imageId}
                            onDeleteImage={() => {
                                setProprietor(prev => ({ ...prev, imageBase64: undefined }));
                                console.log(imageId);
                                console.log("capturando proprietor", proprietor);
                                form.setValue("deletedImageId", imageId ?? null);
                            }}
                        />
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
                            defaultValue={proprietor?.name ?? ""}
                            text={textFields.name.text}
                            id={textFields.name.id}
                            register={form.register}
                            error={form.formState.errors[textFields.name.name as keyof EditProprietor]}

                        />
                        <NonEditableInputText
                            key={textFields.cpf.id}
                            name={textFields.cpf.name}
                            size={textFields.cpf.size}
                            text={"CPF/CNPJ"}
                            value={proprietor?.cpf ?? ""}
                            id={textFields.cpf.id}
                        />

                        <InputText
                            key={textFields.email.id}
                            name={textFields.email.name}
                            size={textFields.email.size}
                            defaultValue={proprietor?.email ?? ""}
                            placeholder={textFields.email.placeholder}
                            text={textFields.email.text}
                            id={textFields.email.id}
                            register={form.register}
                            error={form.formState.errors[textFields.email.name as keyof EditProprietor]}

                        />
                        <InputText
                            key={textFields.cep.id}
                            name={textFields.cep.name}
                            size={textFields.cep.size}
                            defaultValue={proprietor?.cep ?? ""}
                            placeholder={textFields.cep.placeholder}
                            text={textFields.cep.text}
                            id={textFields.cep.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cep.name as keyof EditProprietor]}

                        />
                        <InputText
                            key={textFields.street.id}
                            name={textFields.street.name}
                            size={textFields.street.size}
                            defaultValue={proprietor?.street ?? ""}
                            placeholder={textFields.street.placeholder}
                            text={textFields.street.text}
                            id={textFields.street.id}
                            register={form.register}
                            error={form.formState.errors[textFields.street.name as keyof EditProprietor]}

                        />
                        <InputText
                            key={textFields.phoneNumber.id}
                            name={textFields.phoneNumber.name}
                            size={textFields.phoneNumber.size}
                            defaultValue={proprietor?.phoneNumber ?? ""}
                            placeholder={textFields.phoneNumber.placeholder}
                            text={textFields.phoneNumber.text}
                            id={textFields.phoneNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.phoneNumber.name as keyof EditProprietor]}

                        />
                        <InputText
                            key={textFields.cellphone.id}
                            name={textFields.cellphone.name}
                            defaultValue={proprietor?.cellphone ?? ""}
                            size={textFields.cellphone.size}
                            placeholder={textFields.cellphone.placeholder}
                            text={textFields.cellphone.text}
                            id={textFields.cellphone.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cellphone.name as keyof EditProprietor]}

                        />
                        <InputText
                            key={textFields.propertyNumber.id}
                            name={textFields.propertyNumber.name}
                            size={textFields.propertyNumber.size}
                            defaultValue={proprietor?.propertyNumber ?? ""}
                            placeholder={textFields.propertyNumber.placeholder}
                            text={textFields.propertyNumber.text}
                            id={textFields.propertyNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.propertyNumber.name as keyof EditProprietor]}

                        />
                        <InputText
                            key={textFields.complement.id}
                            name={textFields.complement.name}
                            size={textFields.complement.size}
                            placeholder={textFields.complement.placeholder}
                            defaultValue={proprietor?.complement ?? ""}
                            text={textFields.complement.text}
                            id={textFields.complement.id}
                            register={form.register}
                            error={form.formState.errors[textFields.complement.name as keyof EditProprietor]}

                        />

                        <InputDropdown
                            key={dropdownFields.state.id}
                            name={dropdownFields.state.name}
                            size={dropdownFields.state.size}
                            text={dropdownFields.state.text}
                            id={dropdownFields.state.id}
                            defaultValue={proprietor?.state ?? ""}

                            register={form.register}
                            error={form.formState.errors[dropdownFields.state.name as keyof EditProprietor]}

                            options={dropdownFields.state.options}
                        />

                        <InputDropdown
                            key={dropdownFields.city.id}
                            name={dropdownFields.city.name}
                            size={dropdownFields.city.size}
                            text={dropdownFields.city.text}
                            id={dropdownFields.city.id}
                            defaultValue={proprietor?.city ?? ""}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.city.name as keyof EditProprietor]}

                            options={dropdownFields.city.options}
                        />

                        <InputDropdown
                            key={dropdownFields.neighborhood.id}
                            name={dropdownFields.neighborhood.name}
                            size={dropdownFields.neighborhood.size}
                            text={dropdownFields.neighborhood.text}
                            id={dropdownFields.neighborhood.id}
                            defaultValue={proprietor?.neighborhood ?? ""}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.neighborhood.name as keyof EditProprietor]}

                            options={dropdownFields.neighborhood.options}
                        />


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
                        <div className="containerModal">
                            <h1 className="titleModal">DESEJA EDITAR O PROPRIETÁRIO? </h1>
                            <p className="descModal"> Ao confirmar, todos os dados alterados serão salvos no novo formato, está ação não pode ser desfeita!</p>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={edit}
                />
            </form>
        </>
    )
}