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
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";

export default function FormEditAdm(props :{id :any }) {
    
    const [adm, setAdm] = useState<AdmEditDto>()

    useEffect(() => {
        async function fetchAdm() {
          try {
            const adm = await searchAdmDtoById(props.id);
            setAdm(adm)
          } catch (error) {
          }
        }
    
        if (props.id) {
          fetchAdm();
        }
      }, [props.id]);
            
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter(); 




    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const formObject = Object.fromEntries(formData.entries()); // Converte para objeto

    
        setPendingFormData(formObject); // Atualiza o estado com os dados preenchidos
        setIsModalOpen(true); // Abre o modal
    };


    const edit = async function () {

        if (!pendingFormData) return;
        
        setIsModalOpen(false);

        try{
            const adm :AdmEditDto= {
                cpf: pendingFormData.cpf as string,
                name: pendingFormData.name as string,
                email: pendingFormData.email as string,
                celphone: Number(pendingFormData.celphone),
                phoneNumber: pendingFormData.phoneNumber as string,
                cep: pendingFormData.cep as string,
                street: pendingFormData.street as string,
                propertyNumber: pendingFormData.propertyNumber as string,
                complement: pendingFormData.complement as string,
                state: pendingFormData.state as string,
                city: pendingFormData.city as string,
                neighborhood: pendingFormData.neighborhood as string

            };

            await editAdm(props.id, adm); 

            router.back(); //volta um point sem ter que escrever a barra
        }
        catch(err){
        }

    };
   
    

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
                                    key={textFields.name.id}
                                    name={textFields.name.name}
                                    size={textFields.name.size}
                                    placeholder={textFields.name.placeholder}
                                    defaultValue={adm?.name??""}
                                    text={textFields.name.text}
                                    id={textFields.name.id}
                                />
                                <NonEditableInputText
                                    key={textFields.cpf.id}
                                    name={textFields.cpf.name}
                                    size={textFields.cpf.size}
                                    text={textFields.cpf.text}
                                    value={adm?.cpf??""}
                                    id={textFields.cpf.id}
                                />
                                
                                <InputText
                                    key={textFields.email.id}
                                    name={textFields.email.name}
                                    size={textFields.email.size}
                                    defaultValue={adm?.email??""}
                                    placeholder={textFields.email.placeholder}
                                    text={textFields.email.text}
                                    id={textFields.email.id}
                                />
                                <InputText
                                    key={textFields.cep.id}
                                    name={textFields.cep.name}
                                    size={textFields.cep.size}
                                    defaultValue={adm?.cep??""}
                                    placeholder={textFields.cep.placeholder}
                                    text={textFields.cep.text}
                                    id={textFields.cep.id}
                                />
                                <InputText
                                    key={textFields.street.id}
                                    name={textFields.street.name}
                                    size={textFields.street.size}
                                    defaultValue={adm?.street??""}
                                    placeholder={textFields.street.placeholder}
                                    text={textFields.street.text}
                                    id={textFields.street.id}
                                />
                                <InputText
                                    key={textFields.phoneNumber.id}
                                    name={textFields.phoneNumber.name}
                                    size={textFields.phoneNumber.size}
                                    defaultValue={adm?.phoneNumber??""}
                                    placeholder={textFields.phoneNumber.placeholder}
                                    text={textFields.phoneNumber.text}
                                    id={textFields.phoneNumber.id}
                                />
                                <InputText
                                    key={textFields.cellphone.id}
                                    name={textFields.cellphone.name}
                                    defaultValue={adm?.celphone??""}
                                    size={textFields.cellphone.size}
                                    placeholder={"+55 ( )"}
                                    text={textFields.cellphone.text}
                                    id={textFields.cellphone.id}
                                />
                                <InputText
                                    key={textFields.propertyNumber.id}
                                    name={textFields.propertyNumber.name}
                                    size={textFields.propertyNumber.size}
                                    defaultValue={adm?.propertyNumber??""}
                                    placeholder={textFields.propertyNumber.placeholder}
                                    text={textFields.propertyNumber.text}
                                    id={textFields.propertyNumber.id}
                                />
                                <InputText
                                    key={textFields.complement.id}
                                    name={textFields.complement.name}
                                    size={textFields.complement.size}
                                    placeholder={textFields.complement.placeholder}
                                    defaultValue={adm?.complement??""}
                                    text={textFields.complement.text}
                                    id={textFields.complement.id}
                                />

                                <InputDropdown
                                    key={dropdownFields.state.id}
                                    name={dropdownFields.state.name}
                                    size={dropdownFields.state.size}
                                    text={dropdownFields.state.text}
                                    id={dropdownFields.state.id}
                                    defaultValue={adm?.state??""}

                                    options={dropdownFields.state.options}
                                />

                                <InputDropdown
                                   key={dropdownFields.city.id}
                                   name={dropdownFields.city.name}
                                   size={dropdownFields.city.size}
                                   text={dropdownFields.city.text}
                                   id={dropdownFields.city.id}
                                   defaultValue={adm?.city??""}

                                   options={dropdownFields.city.options}
                                />

                                <InputDropdown
                                    key={dropdownFields.neighborhood.id}
                                    name={dropdownFields.neighborhood.name}
                                    size={dropdownFields.neighborhood.size}
                                    text={dropdownFields.neighborhood.text}
                                    id={dropdownFields.neighborhood.id}
                                    defaultValue={adm?.neighborhood??""}

                                    options={dropdownFields.neighborhood.options}
                                />


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
                            <h1>Deseja confirmar o editar do adm?</h1>
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