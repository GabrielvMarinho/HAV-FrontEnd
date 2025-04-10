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
import searchCustomerById from "@/app/apiCalls/Customer/searchCustomerById";
import editEditor from "@/app/apiCalls/Editor/editEditor";
import editCustomer from "@/app/apiCalls/Customer/editCustomer";
import searchEditorById from "@/app/apiCalls/Editor/searchEditorById";
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import { useForm } from "react-hook-form";
import { editEditorOrAdm } from "@/app/Validators/EditEditorOrAdmValidator";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormEditEditor(props :{id :any }) {
    
    const [editor, setEditor] = useState<EditorEditDto>()

    useEffect(() => {
        async function fetchEditor() {
          try {
            const editor = await searchEditorById(props.id);
            setEditor(editor)
          } catch (error) {
          }
        }
    
        if (props.id) {
            fetchEditor();
        }
      }, [props.id]);
            
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter(); 


    const form = useForm<editEditorOrAdm>({
        resolver: zodResolver(editEditorOrAdm),
        mode: "onTouched",
        
    });
    useEffect(() => {
        console.log(editor)
        if (editor) {
          form.reset({
            doc: editor.doc,
            name: editor.name,
            email: editor.email,
            cellphone: editor?.celphone,
            phoneNumber: editor?.phoneNumber,
            cep: editor.cep,
            street: editor.street,
            propertyNumber: editor.propertyNumber.toString(),
            complement: editor.complement ?? "",
            state: editor.state,
            city: editor.city,
            neighborhood: editor.neighborhood,
          });
        }
      }, [editor]);

    
      function onSubmit(data: editEditorOrAdm) {
        console.log(data)
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }
        setPendingFormData(data),
        setIsModalOpen(true)
    }

    const edit = async function () {

        if (!pendingFormData) return;
        
        setIsModalOpen(false);

        try {
            const response = await editEditor(props.id, pendingFormData);
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
                            form.setError(fieldName.toLowerCase() as keyof NewEditorOrAdm, {
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
                    <ButtonUploadPhoto name={"image"} 
                            register={form.register}
                            error={form.formState.errors["image" as keyof editEditorOrAdm]}/>
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
                                    defaultValue={editor?.name??""}
                                    text={textFields.name.text}
                                    register={form.register}
                                    error={form.formState.errors[textFields.name.name as keyof editEditorOrAdm]}
                                    id={textFields.name.id}
                                />
                                <NonEditableInputText
                                   key={textFields.cpf.id}
                                   name={textFields.cpf.name}
                                   size={textFields.cpf.size}
                                   text={textFields.cpf.text}
                                   value={editor?.cpf??""}
                                   id={textFields.cpf.id}
                                   register={form.register}
                                    error={form.formState.errors[textFields.cpf.name as keyof editEditorOrAdm]}
                                    
                                />
                                
                                <InputText
                                    key={textFields.email.id}
                                    name={textFields.email.name}
                                    size={textFields.email.size}
                                    defaultValue={editor?.email??""}
                                    placeholder={textFields.email.placeholder}
                                    text={textFields.email.text}
                                    id={textFields.email.id}
                                    register={form.register}
                                    error={form.formState.errors[textFields.email.name as keyof editEditorOrAdm]}
                                    
                                />
                                <InputText
                                   key={textFields.cep.id}
                                   name={textFields.cep.name}
                                   size={textFields.cep.size}
                                   defaultValue={editor?.cep??""}
                                   placeholder={textFields.cep.placeholder}
                                   text={textFields.cep.text}
                                   id={textFields.cep.id}
                                   register={form.register}
                                    error={form.formState.errors[textFields.cep.name as keyof editEditorOrAdm]}
                                    
                                />
                                <InputText
                                    key={textFields.street.id}
                                    name={textFields.street.name}
                                    size={textFields.street.size}
                                    defaultValue={editor?.street??""}
                                    placeholder={textFields.street.placeholder}
                                    text={textFields.street.text}
                                    id={textFields.street.id}
                                    register={form.register}
                                    error={form.formState.errors[textFields.street.name as keyof editEditorOrAdm]}
                                    
                                />
                                <InputText
                                   key={textFields.phoneNumber.id}
                                   name={textFields.phoneNumber.name}
                                   size={textFields.phoneNumber.size}
                                   defaultValue={editor?.phoneNumber??""}
                                   placeholder={textFields.phoneNumber.placeholder}
                                   text={textFields.phoneNumber.text}
                                   id={textFields.phoneNumber.id}
                                   register={form.register}
                                    error={form.formState.errors[textFields.phoneNumber.name as keyof editEditorOrAdm]}
                                    
                                />
                                <InputText
                                     key={textFields.cellphone.id}
                                     name={textFields.cellphone.name}
                                     defaultValue={editor?.celphone??""}
                                     size={textFields.cellphone.size}
                                     placeholder={textFields.cellphone.placeholder}
                                     text={textFields.cellphone.text}
                                     id={textFields.cellphone.id}
                                     register={form.register}
                                    error={form.formState.errors[textFields.cellphone.name as keyof editEditorOrAdm]}
                                    
                                />
                                <InputText
                                   key={textFields.propertyNumber.id}
                                   name={textFields.propertyNumber.name}
                                   size={textFields.propertyNumber.size}
                                   defaultValue={editor?.propertyNumber??""}
                                   placeholder={textFields.propertyNumber.placeholder}
                                   text={textFields.propertyNumber.text}
                                   id={textFields.complement.id}
                                   register={form.register}
                                   error={form.formState.errors[textFields.complement.name as keyof editEditorOrAdm]}
                                   
                                    />
                                <InputText
                                     key={textFields.complement.id}
                                     name={textFields.complement.name}
                                     size={textFields.complement.size}
                                     placeholder={textFields.complement.placeholder}
                                     defaultValue={editor?.complement??""}
                                     text={textFields.complement.text}
                                     id={textFields.complement.id}
                                     register={form.register}
                                    error={form.formState.errors[textFields.complement.name as keyof editEditorOrAdm]}
                                    
                                />

                                <InputDropdown
                                    key={dropdownFields.state.id}
                                    name={dropdownFields.state.name}
                                    size={dropdownFields.state.size}
                                    text={dropdownFields.state.text}
                                    id={dropdownFields.state.id}
                                    defaultValue={editor?.state??""}
                                    options={dropdownFields.state.options}
                                    register={form.register}
                                    error={form.formState.errors[dropdownFields.state.name as keyof editEditorOrAdm]}
                                    
                                />

                                <InputDropdown
                                   key={dropdownFields.city.id}
                                   name={dropdownFields.city.name}
                                   size={dropdownFields.city.size}
                                   text={dropdownFields.city.text}
                                   id={dropdownFields.city.id}
                                   defaultValue={editor?.city??""}
                                   options={dropdownFields.city.options}
                                   register={form.register}
                                    error={form.formState.errors[dropdownFields.city.name as keyof editEditorOrAdm]}
                                    
                                />

                                <InputDropdown
                                    key={dropdownFields.neighborhood.id}
                                    name={dropdownFields.neighborhood.name}
                                    size={dropdownFields.neighborhood.size}
                                    text={dropdownFields.neighborhood.text}
                                    id={dropdownFields.neighborhood.id}
                                    defaultValue={editor?.neighborhood??""}
                                    register={form.register}
                                    error={form.formState.errors[dropdownFields.neighborhood.name as keyof editEditorOrAdm]}
                                    
                                    options={dropdownFields.neighborhood.options}
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
                        <h1 className="titleModal">DESEJA EDITAR O EDITOR? </h1>
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