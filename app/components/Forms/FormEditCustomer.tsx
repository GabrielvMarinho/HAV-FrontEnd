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
import { useRouter } from "next/navigation";
import NonEditableInputText from "../Inputs/NonEditableInputText";
import searchAdmDtoById from "@/app/apiCalls/Adm/searchAdmDtoById";
import editAdm from "@/app/apiCalls/Adm/editAdm";
import searchCustomerById from "@/app/apiCalls/Customer/customerService";
import editEditor from "@/app/apiCalls/Editor/editEditor";
import editCustomer from "@/app/apiCalls/Customer/editCustomer";
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import { NewCustomer, newCustomer } from "@/app/Validators/CustomerValidator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditCustomer } from "@/app/Validators/EditCustomer";

export default function FormEditCustomer(props: { id: any }) {





    const [customer, setCustomer] = useState<CustomerEditDto>();
    const [imageId, setImageId] = useState<number | undefined>();




    const form = useForm<EditCustomer>({
        resolver: zodResolver(newCustomer),
        mode: "onTouched",
    });

    function onSubmit(data: EditCustomer) {
        console.log("entro")

        if (Object.keys(form.formState.errors).length > 0) {
            console.log("erros")
            return;
        }
        setPendingFormData(data);
        setIsModalOpen(true);
        console.log(data);
    };

    useEffect(() => {
        async function fetchCustomer() {
            try {
                const { customer, imageId } = await searchCustomerById(props.id);
                setCustomer(customer);
                setImageId(imageId);
            } catch (error) {
                console.log(error);
            }
        }

        if (props.id) {
            fetchCustomer();
        }
    }, [props.id]);


    useEffect(() => {
        if (customer) {
            form.reset({
                doc: customer.doc,
                name: customer.name,
                email: customer.email,
                cellphone: customer?.cellphone,
                phoneNumber: customer?.phoneNumber,
                cep: customer.cep,
                street: customer.street,
                propertyNumber: customer.propertyNumber.toString(),
                complement: customer.complement ?? "",
                state: customer.state,
                city: customer.city,
                neighborhood: customer.neighborhood,
            });
        }
    }, [customer]);




    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();

    /* const edit = async function () {

        if (!pendingFormData) return;

        setIsModalOpen(false);

        try {
            const response = await editCustomer(props.id, pendingFormData);
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
                            form.setError(fieldName.toLowerCase() as keyof EditCustomer, {
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

    }; */
    const edit = async function () {
        if (!pendingFormData) return;

        setIsModalOpen(false);

        try {
            const response = await editCustomer(props.id, pendingFormData);
            if (response) {
                router.back();
            }
        } catch (err: any) {

            if (err.response?.data) {
                const { message, errors } = err.response.data;

                form.clearErrors();

                if (errors && Array.isArray(errors)) {
                    errors.forEach((errorMessage: string) => {
                        const [fieldName, msg] = errorMessage.split(": ");
                        if (fieldName && msg) {
                            form.setError(fieldName.toLowerCase() as keyof EditCustomer, {
                                type: "manual",
                                message: msg.trim(),
                            });
                        }
                    });
                } else {
                    form.setError("root", {
                        type: "manual",
                        message: message || "Ocorreu um erro ao processar a solicitação.",
                    });
                }
            } else {
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
                        {/*{customer?.imageBase64 && (
                            <img src={customer.imageBase64} alt="Foto do Cliente"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}*/}
                        <ButtonUploadPhoto
                            name={"image"}
                            register={form.register}
                            error={form.formState.errors["image" as keyof EditCustomer]}
                            initialImageUrl={customer?.imageBase64}
                            setValue={form.setValue}
                            imageId={imageId}
                            onDeleteImage={() => {
                                setCustomer(prev => ({ ...prev, imageBase64: undefined }));
                                form.setValue("deletedImageId", imageId); // Limpa a imagem vinda da API
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
                            defaultValue={customer?.name ?? ""}
                            text={textFields.name.text}
                            id={textFields.name.id}
                            register={form.register}
                            error={form.formState.errors[textFields.name.name as keyof EditCustomer]}
                        />
                        <NonEditableInputText
                            key={textFields.cpf.id}
                            name={textFields.cpf.name}
                            size={textFields.cpf.size}
                            text={textFields.cpf.text}
                            value={customer?.cpf ?? ""}
                            id={textFields.cpf.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cpf.name as keyof EditCustomer]}
                        />

                        <InputText
                            key={textFields.email.id}
                            name={textFields.email.name}
                            size={textFields.email.size}
                            defaultValue={customer?.email ?? ""}
                            placeholder={textFields.email.placeholder}
                            text={textFields.email.text}
                            id={textFields.email.id}
                            register={form.register}
                            error={form.formState.errors[textFields.email.name as keyof EditCustomer]}
                        />
                        <InputText
                            key={textFields.cep.id}
                            name={textFields.cep.name}
                            size={textFields.cep.size}
                            defaultValue={customer?.cep ?? ""}
                            placeholder={textFields.cep.placeholder}
                            text={textFields.cep.text}
                            id={textFields.cep.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cep.name as keyof EditCustomer]}
                        />
                        <InputText
                            key={textFields.street.id}
                            name={textFields.street.name}
                            size={textFields.street.size}
                            defaultValue={customer?.street ?? ""}
                            placeholder={textFields.street.placeholder}
                            text={textFields.street.text}
                            id={textFields.street.id}
                            register={form.register}
                            error={form.formState.errors[textFields.street.name as keyof EditCustomer]}
                        />
                        <InputText
                            key={textFields.phoneNumber.id}
                            name={textFields.phoneNumber.name}
                            size={textFields.phoneNumber.size}
                            defaultValue={customer?.phoneNumber ?? ""}
                            placeholder={textFields.phoneNumber.placeholder}
                            text={textFields.phoneNumber.text}
                            id={textFields.phoneNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.phoneNumber.name as keyof EditCustomer]}
                        />
                        <InputText
                            key={textFields.cellphone.id}
                            name={textFields.cellphone.name}
                            defaultValue={customer?.cellphone ?? ""}
                            size={textFields.cellphone.size}
                            placeholder={textFields.cellphone.placeholder}
                            text={textFields.cellphone.text}
                            id={textFields.cellphone.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cellphone.name as keyof EditCustomer]}
                        />
                        <InputText
                            key={textFields.propertyNumber.id}
                            name={textFields.propertyNumber.name}
                            size={textFields.propertyNumber.size}
                            defaultValue={customer?.propertyNumber ?? ""}
                            placeholder={textFields.propertyNumber.placeholder}
                            text={textFields.propertyNumber.text}
                            id={textFields.propertyNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.propertyNumber.name as keyof EditCustomer]}
                        />
                        <InputText
                            key={textFields.complement.id}
                            name={textFields.complement.name}
                            size={textFields.complement.size}
                            placeholder={textFields.complement.placeholder}
                            defaultValue={customer?.complement ?? ""}
                            text={textFields.complement.text}
                            id={textFields.complement.id}
                            register={form.register}
                            error={form.formState.errors[textFields.complement.name as keyof EditCustomer]}
                        />

                        <InputDropdown
                            key={dropdownFields.state.id}
                            name={dropdownFields.state.name}
                            size={dropdownFields.state.size}
                            text={dropdownFields.state.text}
                            id={dropdownFields.state.id}
                            defaultValue={customer?.state ?? ""}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.state.name as keyof EditCustomer]}
                            options={dropdownFields.state.options}
                        />

                        <InputDropdown
                            key={dropdownFields.city.id}
                            name={dropdownFields.city.name}
                            size={dropdownFields.city.size}
                            text={dropdownFields.city.text}
                            id={dropdownFields.city.id}
                            defaultValue={customer?.city ?? ""}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.city.name as keyof EditCustomer]}
                            options={dropdownFields.city.options}
                        />

                        <InputDropdown
                            key={dropdownFields.neighborhood.id}
                            name={dropdownFields.neighborhood.name}
                            size={dropdownFields.neighborhood.size}
                            text={dropdownFields.neighborhood.text}
                            id={dropdownFields.neighborhood.id}
                            defaultValue={customer?.neighborhood ?? ""}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.neighborhood.name as keyof EditCustomer]}
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
                            <h1 className="titleModal">DESEJA EDITAR O CLIENTE? </h1>
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