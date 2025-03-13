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

export default function FormEditEditor(props :{id :any }) {
    
    const [editor, setEditor] = useState<EditorEditDto>()

    useEffect(() => {
        async function fetchEditor() {
          try {
            const editor = await searchEditorById(props.id);
            console.log(editor)
            setEditor(editor)
          } catch (error) {
            console.error("Error fetching admin data:", error);
          }
        }
    
        if (props.id) {
            fetchEditor();
        }
      }, [props.id]);
            
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter(); 




    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const formObject = Object.fromEntries(formData.entries()); // Converte para objeto

        console.log("----------------")
        console.log("Formulário enviado:", formObject);
    
        setPendingFormData(formObject); // Atualiza o estado com os dados preenchidos
        setIsModalOpen(true); // Abre o modal
    };


    const edit = async function () {

        if (!pendingFormData) return;
        
        setIsModalOpen(false);
        console.log("-------", pendingFormData)

        try{
            const editor :EditorEditDto= {
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

            await editEditor(props.id, editor); 

            router.back(); //volta um point sem ter que escrever a barra
        }
        catch(err){
            console.log(err)
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
                                    key={"name"}
                                    name={"name"}
                                    size={"large"}
                                    placeholder={"ex: "}
                                    defaultValue={editor?.name??""}
                                    text={"Nome"}
                                    id={"name"}
                                />
                                <NonEditableInputText
                                    key={"cpf"}
                                    name={"cpf"}
                                    size={"small"}
                                    text={"CPF"}
                                    value={editor?.cpf??""}
                                    id={"cpf"}
                                />
                                
                                <InputText
                                    key={"email"}
                                    name={"email"}
                                    size={"large"}
                                    defaultValue={editor?.email??""}
                                    placeholder={"ex: kauani@gmail.com"}
                                    text={"E-mail"}
                                    id={"email"}
                                />
                                <InputText
                                    key={"cep"}
                                    name={"cep"}
                                    size={"small"}
                                    defaultValue={editor?.cep??""}
                                    placeholder={"ex: 00000-000"}
                                    text={"CEP"}
                                    id={"cep"}
                                />
                                <InputText
                                    key={"street"}
                                    name={"street"}
                                    size={"large"}
                                    defaultValue={editor?.street??""}

                                    placeholder={"Frederico Curt Alberto Vasel"}
                                    text={"Rua"}
                                    id={"rua"}
                                />
                                <InputText
                                    key={"phone"}
                                    name={"phone"}
                                    size={"small"}
                                    defaultValue={editor?.phoneNumber??""}
                                    placeholder={"Digite o telefone"}
                                    text={"Telefone"}
                                    id={"telefone"}
                                />
                                <InputText
                                    key={"cellphone"}
                                    name={"cellphone"}
                                    defaultValue={editor?.celphone??""}
                                    size={"small"}
                                    placeholder={"+55 ( )"}
                                    text={"Celular"}
                                    id={"celular"}
                                />
                                <InputText
                                    key={"propertyNumber"}
                                    name={"propertyNumber"}
                                    size={"small"}
                                    defaultValue={editor?.propertyNumber??""}

                                    placeholder={"1002"}
                                    text={"Número"}
                                    id={"numero"}
                                />
                                <InputText
                                    key={"complement"}
                                    name={"complement"}
                                    size={"small"}
                                    placeholder={"1030"}
                                    defaultValue={editor?.complement??""}

                                    text={"Complemento"}
                                    id={"complemento"}
                                />

                                <InputDropdown
                                    defaultValue={editor?.state ?? ""}
                                    key="estado"
                                    name="state"
                                    size="medium"
                                    text="Estado"
                                    id="estado"
                                    options={[
                                        ["sc", "Santa Catarina"],
                                        ["pr", "Paraná"],
                                        ["rs", "Rio Grande do Sul"]
                                    ]}
                                />

                                <InputDropdown
                                    defaultValue={editor?.city ?? ""}
                                    key="cidade"
                                    name="city"
                                    size="medium"
                                    text="Cidade"
                                    id="cidade"
                                    options={[
                                        ["São Paulo", "Jaraguá do Sul"],
                                        ["blumenau", "Blumenau"],
                                        ["joinville", "Joinville"]
                                    ]}
                                />

                                <InputDropdown
                                    defaultValue={editor?.neighborhood ?? ""}
                                    key="bairro"
                                    name="neighborhood"
                                    size="medium"
                                    text="Bairro"
                                    id="bairro"
                                    options={[
                                        ["centro", "Centro"],
                                        ["vila_nova", "Vila Nova"],
                                        ["três_rios_do_norte", "Três Rios do Norte"]
                                    ]}
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
                            <h1>Deseja confirmar o editar do editor?</h1>
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