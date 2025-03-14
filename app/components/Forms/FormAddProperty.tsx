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
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Title from "../NonInteractable/Title";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import { textFields } from "../globalFormsConfig/InputTextConfig";
import { newProperty } from "@/app/Validators/PropertyValidator";

export default function FormAddProperty(props :{proprietor :any; realtors :any[]}) {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const router = useRouter();


    const addProperty = async function () {

        if (!pendingFormData) return;

        setIsModalOpen(false);
        console.log("-------", pendingFormData)

        try {
            await postProperty(pendingFormData)
            router.back(); //volta um point sem ter que escrever a barra
        }
        catch (err) {
            console.log(err)
        }
    };

    function onSubmit(data: newProperty) {
        if (Object.keys(form.formState.errors).length > 0) {
            console.log("Ocorreu um erro");
            return;
        }
        setPendingFormData(data),
            setIsModalOpen(true)
    }

    const form = useForm<newProperty>({
        resolver: zodResolver(newProperty),
        mode: "onTouched"
    });





    


    const handleAddRealtor = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault(); 
        const form = event.target.closest("form") as HTMLFormElement; 
        const formData = new FormData(form); 

        const dados = Object.fromEntries(formData.entries()); 
        console.log(dados)
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
        params.append(key, value.toString());
        });
        const url = `/choose/realtor?${params.toString()}`;
        window.location.href = url
    }
    const handleAddProprietor = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        const form = event.target.closest("form") as HTMLFormElement; 
        const formData = new FormData(form);

        const dados = Object.fromEntries(formData.entries()); 
        console.log(dados)
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
        params.append(key, value.toString());
        });
        const url = `/choose/proprietor?${params.toString()}`;
        console.log(url)
        window.location.href = url
    }



    return (
        <>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="propertyForm">
        <section id="smallerSection">
            <div className="imgPerson">
                                    <ButtonUploadPhoto />
                                </div>
            <h3>CARACTERÍSTICAS DO IMÓVEL</h3>
            <div className="propertyFormGroup">
                <InputDropdown
                    key={dropdownFields.bedRoom.id}
                    name={dropdownFields.bedRoom.name}
                    size={dropdownFields.bedRoom.size}
                    text={dropdownFields.bedRoom.text}
                    id={dropdownFields.bedRoom.id}
                    options={dropdownFields.bedRoom.options}
                />
                <InputDropdown
                    key={dropdownFields.livingRoom.id}
                    name={dropdownFields.livingRoom.name}
                    size={dropdownFields.livingRoom.size}
                    text={dropdownFields.livingRoom.text}
                    id={dropdownFields.livingRoom.id}
                    options={dropdownFields.livingRoom.options}
                />
                <InputDropdown
                    key={dropdownFields.bathRoom.id}
                    name={dropdownFields.bathRoom.name}
                    size={dropdownFields.bathRoom.size}
                    text={dropdownFields.bathRoom.text}
                    id={dropdownFields.bathRoom.id}
                    options={dropdownFields.bathRoom.options}
                />
                <InputDropdown
                    key={dropdownFields.suite.id}
                    name={dropdownFields.suite.name}
                    size={dropdownFields.suite.size}
                    text={dropdownFields.suite.text}
                    id={dropdownFields.suite.id}
                    options={dropdownFields.suite.options}
                />
                <InputDropdown
                    key={dropdownFields.garageSpace.id}
                    name={dropdownFields.garageSpace.name}
                    size={dropdownFields.garageSpace.size}
                    text={dropdownFields.garageSpace.text}
                    id={dropdownFields.garageSpace.id}
                    options={dropdownFields.garageSpace.options}
                />
            </div>
            <h3>IMPOSTOS</h3>
            <div className="propertyFormGroup">
                <InputText
                    key={textFields.iptu.id}
                    name={textFields.iptu.name}
                    size={textFields.iptu.size}
                    placeholder={textFields.iptu.placeholder}
                    text={textFields.iptu.text}
                    id={textFields.iptu.id}
                    register={form.register}
                    error={form.formState.errors[textFields.iptu.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.condominiumFee.id}
                    name={textFields.condominiumFee.name}
                    size={textFields.condominiumFee.size}
                    placeholder={textFields.condominiumFee.placeholder}
                    text={textFields.condominiumFee.text}
                    id={textFields.condominiumFee.id}
                    register={form.register}
                    error={form.formState.errors[textFields.condominiumFee.name as keyof newProperty]}
                />
               
            </div>
            <h3>OUTROS</h3>
            <div className="propertyFormGroup">
                <InputDropdown
                    key={dropdownFields.isFurnished.id}
                    name={dropdownFields.isFurnished.name}
                    size={dropdownFields.isFurnished.size}
                    text={dropdownFields.isFurnished.text}
                    id={dropdownFields.isFurnished.id}
                    options={dropdownFields.isFurnished.options}
                />
                <InputDropdown
                    key={dropdownFields.allowsPet.id}
                    name={dropdownFields.allowsPet.name}
                    size={dropdownFields.allowsPet.size}
                    text={dropdownFields.allowsPet.text}
                    id={dropdownFields.allowsPet.id}
                    options={dropdownFields.allowsPet.options}
                />
            </div>
        </section>
        <section id="biggerSection">
        <h2>SOBRE O IMÓVEL</h2>

        <div className="propertyFormGroup">
        <InputDropdown
                    key={dropdownFields.purpose.id}
                    name={dropdownFields.purpose.name}
                    size={dropdownFields.purpose.size}
                    text={dropdownFields.purpose.text}
                    id={dropdownFields.purpose.id}
                    options={dropdownFields.purpose.options}
                />
                <InputDropdown
                    key={dropdownFields.status.id}
                    name={dropdownFields.status.name}
                    size={dropdownFields.status.size}
                    text={dropdownFields.status.text}
                    id={dropdownFields.status.id}
                    options={dropdownFields.status.options}
                />
                <InputDropdown
                    key={dropdownFields.propertyType.id}
                    name={dropdownFields.propertyType.name}
                    size={dropdownFields.propertyType.size}
                    text={dropdownFields.propertyType.text}
                    id={dropdownFields.propertyType.id}
                    options={dropdownFields.propertyType.options}
                />
            </div>
            <h3>CARACTERÍSTICAS GERAIS</h3>
            <div className="propertyFormGroup">
                <InputText
                    key={textFields.propertyDescription.id}
                    name={textFields.propertyDescription.name}
                    size={textFields.propertyDescription.size}
                    placeholder={textFields.propertyDescription.placeholder}
                    text={textFields.propertyDescription.text}
                    id={textFields.propertyDescription.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyDescription.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyTitle.id}
                    name={textFields.propertyTitle.name}
                    size={textFields.propertyTitle.size}
                    placeholder={textFields.propertyTitle.placeholder}
                    text={textFields.propertyTitle.text}
                    id={textFields.propertyTitle.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyTitle.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyArea.id}
                    name={textFields.propertyArea.name}
                    size={textFields.propertyArea.size}
                    placeholder={textFields.propertyArea.placeholder}
                    text={textFields.propertyArea.text}
                    id={textFields.propertyArea.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyArea.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyPrice.id}
                    name={textFields.propertyPrice.name}
                    size={textFields.propertyPrice.size}
                    placeholder={textFields.propertyPrice.placeholder}
                    text={textFields.propertyPrice.text}
                    id={textFields.propertyPrice.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyPrice.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyPromotionalPrice.id}
                    name={textFields.propertyPromotionalPrice.name}
                    size={textFields.propertyPromotionalPrice.size}
                    placeholder={textFields.propertyPromotionalPrice.placeholder}
                    text={textFields.propertyPromotionalPrice.text}
                    id={textFields.propertyPromotionalPrice.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyPromotionalPrice.name as keyof newProperty]}
                />
                <InputDropdown
                    key={dropdownFields.propertyHighlight.id}
                    name={dropdownFields.propertyHighlight.name}
                    size={dropdownFields.propertyHighlight.size}
                    text={dropdownFields.propertyHighlight.text}
                    id={dropdownFields.propertyHighlight.id}
                    options={dropdownFields.propertyHighlight.options}
                />
            </div>
            <h3>ENDEREÇO</h3>
            <div className="propertyFormGroup">
            <InputText
                    key={textFields.street.id}
                    name={textFields.street.name}
                    size={textFields.street.size}
                    placeholder={textFields.street.placeholder}
                    text={textFields.street.text}
                    id={textFields.street.id}
                    register={form.register}
                    error={form.formState.errors[textFields.street.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyNumber.id}
                    name={textFields.propertyNumber.name}
                    size={textFields.propertyNumber.size}
                    placeholder={textFields.propertyNumber.placeholder}
                    text={textFields.propertyNumber.text}
                    id={textFields.propertyNumber.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyNumber.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.cep.id}
                    name={textFields.cep.name}
                    size={textFields.cep.size}
                    placeholder={textFields.cep.placeholder}
                    text={textFields.cep.text}
                    id={textFields.cep.id}
                    register={form.register}
                    error={form.formState.errors[textFields.cep.name as keyof newProperty]}
                />
                <InputDropdown
                    key={dropdownFields.city.id}
                    name={dropdownFields.city.name}
                    size={dropdownFields.city.size}
                    text={dropdownFields.city.text}
                    id={dropdownFields.city.id}
                    options={dropdownFields.city.options}
                />
                <InputDropdown
                    key={dropdownFields.state.id}
                    name={dropdownFields.state.name}
                    size={dropdownFields.state.size}
                    text={dropdownFields.state.text}
                    id={dropdownFields.state.id}
                    options={dropdownFields.state.options}
                />
                <InputDropdown
                    key={dropdownFields.neighborhood.id}
                    name={dropdownFields.neighborhood.name}
                    size={dropdownFields.neighborhood.size}
                    text={dropdownFields.neighborhood.text}
                    id={dropdownFields.neighborhood.id}
                    options={dropdownFields.neighborhood.options}
                />
                 <InputText
                    key={textFields.complement.id}
                    name={textFields.complement.name}
                    size={textFields.complement.size}
                    placeholder={textFields.complement.placeholder}
                    text={textFields.complement.text}
                    id={textFields.complement.id}
                    register={form.register}
                    error={form.formState.errors[textFields.complement.name as keyof newProperty]}
                />
                

                </div>
                <div>
                
                
                    <button onClick={handleAddRealtor}>adicionar corretor</button>  
                    {props.realtors &&
                        <>
                        <input hidden={true} value ={props.realtors} name = {"realtors"}/>
                        <div>{props.realtors}</div>
                        </>
                        }
                    <button onClick={handleAddProprietor}>adicionar proprietario</button>                 
                    {props.proprietor &&
                        <>
                        <input hidden={true} value ={props.proprietor} name = {"proprietor"}/>
                        <div>{props.proprietor}</div>
                        </>
                        }
                </div>
                <div className="divButtonsAceptCancelForms">
                    <ButtonBackAPoint point = {"/manage/properties"} size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" />
                    <Button type="submit" size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)"
                    background="var(--text-white)" />
                </div>
                <Modal
                    id="idModal"
                    content={
                        <div>
                            <h1>Deseja confirmar o cadastro da propriedade?</h1>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={addProperty}
                />
        </section>

        </form>
        </>
        


    )
}