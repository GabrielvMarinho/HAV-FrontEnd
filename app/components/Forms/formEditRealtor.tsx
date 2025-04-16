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
import searchRealtorById from "@/app/apiCalls/Realtor/searchRealtorById";
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import { editEditorOrAdm } from "@/app/Validators/EditEditorOrAdmValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditRealtor, editRealtor } from "@/app/Validators/EditRealtor";
import editRealtorFetch from "@/app/apiCalls/Realtor/editRealtor";
import { newRealtor } from "@/app/Validators/RealtorValidator";

export default function FormEditRealtor(props: { id: any }) {

    const [realtor, setRealtor] = useState<RealtorEditDto>();
    const [imageId, setImageId] = useState<number | undefined>();

    useEffect(() => {
        async function fetchRealtor() {
            try {
                const { realtor, imageId } = await searchRealtorById(props.id);
                setRealtor(realtor)
                setImageId(imageId);
            } catch (error) {
            }
        }

        if (props.id) {
            fetchRealtor();
        }
    }, [props.id]);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();



    const form = useForm<EditRealtor>({
        resolver: zodResolver(newRealtor),
        mode: "onTouched",

    });
    useEffect(() => {
        console.log(realtor)
        if (realtor) {
            form.reset({
                doc: realtor.doc,
                name: realtor.name,
                email: realtor.email,
                cellphone: realtor?.cellphone,
                phoneNumber: realtor?.phoneNumber,
                cep: realtor.cep,
                street: realtor.street,
                propertyNumber: realtor.propertyNumber.toString(),
                complement: realtor.complement ?? "",
                state: realtor.state,
                city: realtor.city,
                creci: realtor.creci.toString(),
                neighborhood: realtor.neighborhood,
                deletedImageId: realtor.deletedImageId
            });
        }
    }, [realtor]);


    function onSubmit(data: EditRealtor) {
        console.log(data)
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }
        setPendingFormData(data);
        setIsModalOpen(true);
    }

    const edit = async function () {
        if (!pendingFormData) return;

        setIsModalOpen(false);

        try {
            const response = await editRealtorFetch(props.id, pendingFormData);
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
                            form.setError(fieldName.toLowerCase() as keyof EditRealtor, {
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
                        <ButtonUploadPhoto
                            name={"image"}
                            register={form.register}
                            error={form.formState.errors["image" as keyof EditRealtor]}
                            initialImageUrl={realtor?.imageBase64}
                            setValue={form.setValue}
                            imageId={imageId}
                            onDeleteImage={() => {
                                setRealtor(prev => ({ ...prev, imageBase64: undefined }));
                                console.log(imageId);
                                console.log("capturando custormer", realtor);
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
                            defaultValue={realtor?.name ?? ""}
                            text={textFields.name.text}
                            id={textFields.name.id}
                            register={form.register}
                            error={form.formState.errors[textFields.name.name as keyof EditRealtor]}

                        />
                        <NonEditableInputText
                            key={textFields.cpf.id}
                            name={textFields.cpf.name}
                            size={textFields.cpf.size}
                            text={textFields.cpf.text}
                            value={realtor?.cpf ?? ""}
                            id={textFields.cpf.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cpf.name as keyof EditRealtor]}

                        />

                        <InputText
                            key={textFields.email.id}
                            name={textFields.email.name}
                            size={textFields.email.size}
                            defaultValue={realtor?.email ?? ""}
                            placeholder={textFields.email.placeholder}
                            text={textFields.email.text}
                            id={textFields.email.id}
                            register={form.register}
                            error={form.formState.errors[textFields.email.name as keyof EditRealtor]}

                        />
                        <InputText
                            key={textFields.cep.id}
                            name={textFields.cep.name}
                            size={textFields.cep.size}
                            defaultValue={realtor?.cep ?? ""}
                            placeholder={textFields.cep.placeholder}
                            text={textFields.cep.text}
                            id={textFields.cep.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cep.name as keyof EditRealtor]}

                        />
                        <InputText
                            key={textFields.street.id}
                            name={textFields.street.name}
                            size={textFields.street.size}
                            defaultValue={realtor?.street ?? ""}
                            placeholder={textFields.street.placeholder}
                            text={textFields.street.text}
                            id={textFields.street.id}
                            register={form.register}
                            error={form.formState.errors[textFields.street.name as keyof EditRealtor]}

                        />
                        <InputText
                            key={textFields.phoneNumber.id}
                            name={textFields.phoneNumber.name}
                            size={textFields.phoneNumber.size}
                            defaultValue={realtor?.phoneNumber ?? ""}
                            placeholder={textFields.phoneNumber.placeholder}
                            text={textFields.phoneNumber.text}
                            id={textFields.phoneNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.phoneNumber.name as keyof EditRealtor]}

                        />
                        <InputText
                            key={textFields.cellphone.id}
                            name={textFields.cellphone.name}
                            defaultValue={realtor?.cellphone ?? ""}
                            size={textFields.cellphone.size}
                            placeholder={textFields.cellphone.placeholder}
                            text={textFields.cellphone.text}
                            id={textFields.cellphone.id}
                            register={form.register}
                            error={form.formState.errors[textFields.cellphone.name as keyof EditRealtor]}

                        />
                        <InputText
                            key={textFields.propertyNumber.id}
                            name={textFields.propertyNumber.name}
                            size={textFields.propertyNumber.size}
                            defaultValue={realtor?.propertyNumber ?? ""}
                            placeholder={textFields.propertyNumber.placeholder}
                            text={textFields.propertyNumber.text}
                            id={textFields.propertyNumber.id}
                            register={form.register}
                            error={form.formState.errors[textFields.propertyNumber.name as keyof EditRealtor]}

                        />
                        <InputText
                            key={textFields.complement.id}
                            name={textFields.complement.name}
                            size={textFields.complement.size}
                            placeholder={textFields.complement.placeholder}
                            defaultValue={realtor?.complement ?? ""}
                            text={textFields.complement.text}
                            id={textFields.complement.id}
                            register={form.register}
                            error={form.formState.errors[textFields.complement.name as keyof EditRealtor]}

                        />

                        <InputDropdown
                            key={dropdownFields.state.id}
                            name={dropdownFields.state.name}
                            size={dropdownFields.state.size}
                            text={dropdownFields.state.text}
                            id={dropdownFields.state.id}
                            defaultValue={realtor?.state ?? ""}

                            options={dropdownFields.state.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.state.name as keyof EditRealtor]}

                        />


                        <InputDropdown
                            key={dropdownFields.city.id}
                            name={dropdownFields.city.name}
                            size={dropdownFields.city.size}
                            text={dropdownFields.city.text}
                            id={dropdownFields.city.id}
                            defaultValue={realtor?.city ?? ""}

                            options={dropdownFields.city.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.city.name as keyof EditRealtor]}

                        />

                        <InputText
                            key={textFields.creci.id}
                            name={textFields.creci.name}
                            size={textFields.creci.size}
                            defaultValue={realtor?.creci ?? ""}
                            placeholder={textFields.creci.placeholder}
                            text={textFields.creci.text}
                            id={textFields.creci.id}
                            register={form.register}
                            error={form.formState.errors[textFields.creci.name as keyof EditRealtor]}

                        />
                        <InputDropdown
                            key={dropdownFields.neighborhood.id}
                            name={dropdownFields.neighborhood.name}
                            size={dropdownFields.neighborhood.size}
                            text={dropdownFields.neighborhood.text}
                            id={dropdownFields.neighborhood.id}
                            defaultValue={realtor?.neighborhood ?? ""}

                            options={dropdownFields.neighborhood.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.neighborhood.name as keyof EditRealtor]}

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
                        <div className="containerModal">
                            <h1 className="titleModal">DESEJA EDITAR O CORRETOR? </h1>
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


