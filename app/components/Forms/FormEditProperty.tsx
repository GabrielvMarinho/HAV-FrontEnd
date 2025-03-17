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
import NonEditableInputText from "../Inputs/NonEditableInputText";
import postProperty from "@/app/apiCalls/Property/postProperty";
import searchPropertyById from "@/app/apiCalls/Property/searchPropertyById";

export default function FormEditProperty(props :{id :any, objectData :any}) {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const [isPromotional, setIsPromotional] = useState(true)
    const [isLand, setIsLand] = useState(false)
    const [isCondominiumFree, setIsCondominiumFree] = useState(false)
    const [hasIptu, setHasIptu] = useState(true)
    const router = useRouter();

    const [property, setProperty] = useState<PropertyEditDto>()

    useEffect(() => {
        async function fetchProperty() {
          try {
            const property = await searchPropertyById(props.id);
            console.log(property)
            setProperty(property)
          } catch (error) {
            console.error("Error fetching admin data:", error);
          }
        }
    
        if (props.id) {
            fetchProperty();
        }
      }, [props.id]);

    const changePurpose = function(type :string){
        if(type == undefined){
            setHasIptu(true)
            return;
        }
        if(type != "locacao"){
            setHasIptu(true)
        }
        else{
            setHasIptu(false)
        }
    }

    const changeStatus = function(type :string){
        if(type == undefined){
            setIsPromotional(true)
            return;
        }
        if(type == "promocao"){
            setIsPromotional(true)
        }
        else{
            setIsPromotional(false)
        }
    }   
    const changeType = function(type :string){
        if(type == undefined){
            setIsCondominiumFree(false)
            return;
        }
        if(type == "terreno"){
            setIsLand(true)
            setIsCondominiumFree(true)
        }
        if(type != "apartamento"){
            setIsCondominiumFree(true)
        }
        else{
            setIsCondominiumFree(false)

            setIsLand(false)
        }
    }   
    useEffect(() =>{
        changePurpose(props.objectData.purpose)
        changeStatus(props.objectData.status)
        changeType(props.objectData.propertyType)
    }, [])
    
    

    const addProperty = async function () {

        if (!pendingFormData) return;

        setIsModalOpen(false);

        try {
            const response = await postProperty(pendingFormData)
            console.log(response)
            window.location.href = "/manage/properties"
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
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
        params.append(key, value.toString());
        });
        const url = `/choose/realtor?action=edit&id=${props.id}&${params.toString()}`;
        window.location.href = url
    }
    const handleAddProprietor = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        const form = event.target.closest("form") as HTMLFormElement; 
        const formData = new FormData(form);

        const dados = Object.fromEntries(formData.entries()); 
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
        params.append(key, value.toString());
        });
        const url = `/choose/proprietor?action=edit&id=${props.id}${params.toString()}`;
        window.location.href = url
    }


    console.log(props.objectData.bedRoom)
    console.log(property?.bedRoom)

    return (
        <>
        <form onSubmit={form.handleSubmit(onSubmit)} className="propertyForm">
       

        <section id="smallerSection">
            <div className="imgPerson">
                                    <ButtonUploadPhoto />
                                </div>
            <h3>CARACTERÍSTICAS DO IMÓVEL</h3>
            <div className="propertyFormGroup">
                {!isLand==true? 
                                <>

                <InputDropdown
                    key={dropdownFields.bedRoom.id}
                    name={dropdownFields.bedRoom.name}
                    size={dropdownFields.bedRoom.size}
                    text={dropdownFields.bedRoom.text}
                    id={dropdownFields.bedRoom.id}
                    defaultValue={props.objectData.bedRoom===undefined?property?.bedRoom:props.objectData.bedRoom}
                    register={form.register}
                    error={form.formState.errors[dropdownFields.bedRoom.name as keyof newProperty]}
                    options={dropdownFields.bedRoom.options}
                    
                />
                <InputDropdown
                    key={dropdownFields.livingRoom.id}
                    name={dropdownFields.livingRoom.name}
                    size={dropdownFields.livingRoom.size}
                    text={dropdownFields.livingRoom.text}
                    id={dropdownFields.livingRoom.id}
                    register={form.register}
                    defaultValue={props.objectData.livingRoom}

                    error={form.formState.errors[dropdownFields.livingRoom.name as keyof newProperty]}
                    options={dropdownFields.livingRoom.options}
                />
                <InputDropdown
                    key={dropdownFields.bathRoom.id}
                    name={dropdownFields.bathRoom.name}
                    size={dropdownFields.bathRoom.size}
                    text={dropdownFields.bathRoom.text}
                    id={dropdownFields.bathRoom.id}
                    defaultValue={props.objectData.bathRoom}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.bathRoom.name as keyof newProperty]}
                    options={dropdownFields.bathRoom.options}
                />
                <InputDropdown
                    key={dropdownFields.floors.id}
                    name={dropdownFields.floors.name}
                    size={dropdownFields.floors.size}
                    text={dropdownFields.floors.text}
                    id={dropdownFields.floors.id}
                    defaultValue={props.objectData.floors}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.floors.name as keyof newProperty]}
                    options={dropdownFields.floors.options}
                />
                <InputDropdown
                    key={dropdownFields.suite.id}
                    name={dropdownFields.suite.name}
                    size={dropdownFields.suite.size}
                    text={dropdownFields.suite.text}
                    id={dropdownFields.suite.id}
                    defaultValue={props.objectData.suite}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.suite.name as keyof newProperty]}
                    options={dropdownFields.suite.options}
                />
                <InputDropdown
                    key={dropdownFields.garageSpace.id}
                    name={dropdownFields.garageSpace.name}
                    size={dropdownFields.garageSpace.size}
                    text={dropdownFields.garageSpace.text}
                    id={dropdownFields.garageSpace.id}
                    defaultValue={props.objectData.garageSpace}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.garageSpace.name as keyof newProperty]}
                    options={dropdownFields.garageSpace.options}
                />
                </>
                :
                <>

                <NonEditableInputText
                    key={dropdownFields.bedRoom.id}
                    name={dropdownFields.bedRoom.name}
                    size={"small"}
                    register={form.register}
                    text={dropdownFields.bedRoom.text}
                    id={dropdownFields.bedRoom.id}
                    value={0}
                    
                />
                <NonEditableInputText
                    key={dropdownFields.livingRoom.id}
                    name={dropdownFields.livingRoom.name}
                    size={"small"}
                    register={form.register}
                    text={dropdownFields.livingRoom.text}
                    id={dropdownFields.livingRoom.id}
                    value={0}
                />
                <NonEditableInputText
                    key={dropdownFields.bathRoom.id}
                    name={dropdownFields.bathRoom.name}
                    size={"small"}
                    register={form.register}
                    text={dropdownFields.bathRoom.text}
                    id={dropdownFields.bathRoom.id}
                    value={0}

                />
                <NonEditableInputText
                    key={dropdownFields.floors.id}
                    name={dropdownFields.floors.name}
                    size={"small"}
                    register={form.register}
                    text={dropdownFields.floors.text}
                    id={dropdownFields.floors.id}
                    value={0}
                />
                <NonEditableInputText
                    key={dropdownFields.suite.id}
                    name={dropdownFields.suite.name}
                    size={"small"}
                    value={0}
                    register={form.register}
                    text={dropdownFields.suite.text}
                    id={dropdownFields.suite.id}
                />
                <NonEditableInputText
                    key={dropdownFields.garageSpace.id}
                    name={dropdownFields.garageSpace.name}
                    size={"small"}
                    register={form.register}
                    text={dropdownFields.garageSpace.text}
                    id={dropdownFields.garageSpace.id}
                    value={0}
                />
                </>
                }
            </div>
            <h3>IMPOSTOS</h3>
            <div className="propertyFormGroup">
                {hasIptu?
                <InputText
                    key={textFields.iptu.id}
                    name={textFields.iptu.name}
                    size={textFields.iptu.size}
                    placeholder={textFields.iptu.placeholder}
                    text={textFields.iptu.text}
                    id={textFields.iptu.id}
                    defaultValue={props.objectData.iptu}

                    register={form.register}
                    error={form.formState.errors[textFields.iptu.name as keyof newProperty]}
                />
                :
                <NonEditableInputText
                    key={textFields.iptu.id}
                    name={textFields.iptu.name}
                    size={textFields.iptu.size}
                    text={textFields.iptu.text}
                    id={textFields.iptu.id}
                    
                    register={form.register}
                    value={0}
                />
                }
                {isCondominiumFree?
                <NonEditableInputText
                key={textFields.condominiumFee.id}
                name={textFields.condominiumFee.name}
                size={textFields.condominiumFee.size}
                text={textFields.condominiumFee.text}
                id={textFields.condominiumFee.id}
                register={form.register}
                value={0}
            />
            
                :
                <InputText
                    key={textFields.condominiumFee.id}
                    name={textFields.condominiumFee.name}
                    size={textFields.condominiumFee.size}
                    placeholder={textFields.condominiumFee.placeholder}
                    text={textFields.condominiumFee.text}
                    defaultValue={props.objectData.condominiumFee}

                    id={textFields.condominiumFee.id}
                    register={form.register}
                    error={form.formState.errors[textFields.condominiumFee.name as keyof newProperty]}
                />
                }   
               
            </div>
            <h3>OUTROS</h3>
            <div className="propertyFormGroup">
                <InputDropdown
                    key={dropdownFields.isFurnished.id}
                    name={dropdownFields.isFurnished.name}
                    size={dropdownFields.isFurnished.size}
                    text={dropdownFields.isFurnished.text}
                    id={dropdownFields.isFurnished.id}
                    defaultValue={props.objectData.isFurnished}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.isFurnished.name as keyof newProperty]}
                    options={dropdownFields.isFurnished.options}
                />
                {hasIptu?
                <InputDropdown
                    key={dropdownFields.allowsPet.id}
                    name={dropdownFields.allowsPet.name}
                    size={dropdownFields.allowsPet.size}
                    text={dropdownFields.allowsPet.text}
                    id={dropdownFields.allowsPet.id}
                    defaultValue={props.objectData.allowsPet}

                    
                    register={form.register}
                    error={form.formState.errors[dropdownFields.allowsPet.name as keyof newProperty]}
                    options={dropdownFields.allowsPet.options}
                />
                :<NonEditableInputText
                key={dropdownFields.allowsPet.id}
                name={dropdownFields.allowsPet.name}
                size={"small"}
                text={dropdownFields.allowsPet.text}
                register={form.register}
                value={(false)}
                id={dropdownFields.allowsPet.id}
                options={dropdownFields.allowsPet.options}
            />
                }
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
                    defaultValue={props.objectData.purpose}
                    register={form.register}
                    error={form.formState.errors[dropdownFields.purpose.name as keyof newProperty]}
                    options={dropdownFields.purpose.options}
                    onChange={changePurpose}

                />
                <InputDropdown
                    key={dropdownFields.status.id}
                    name={dropdownFields.status.name}
                    size={dropdownFields.status.size}
                    text={dropdownFields.status.text}
                    id={dropdownFields.status.id}
                    register={form.register}
                    error={form.formState.errors[dropdownFields.status.name as keyof newProperty]}
                    defaultValue={props.objectData.status}

                    options={dropdownFields.status.options}
                    onChange={changeStatus}

                />
                <InputDropdown
                    key={dropdownFields.propertyType.id}
                    name={dropdownFields.propertyType.name}
                    size={dropdownFields.propertyType.size}
                    text={dropdownFields.propertyType.text}
                    id={dropdownFields.propertyType.id}
                    defaultValue={props.objectData.propertyType}
                    register={form.register}
                    error={form.formState.errors[dropdownFields.propertyType.name as keyof newProperty]}
                    options={dropdownFields.propertyType.options}
                    onChange={changeType}
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
                    defaultValue={props.objectData.propertyDescription}

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
                    defaultValue={props.objectData.title}

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
                    defaultValue={props.objectData.area}

                    register={form.register}
                    error={form.formState.errors[textFields.propertyArea.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyPrice.id}
                    name={textFields.propertyPrice.name}
                    size={textFields.propertyPrice.size}
                    placeholder={textFields.propertyPrice.placeholder}
                    text={textFields.propertyPrice.text}
                    defaultValue={props.objectData.price}

                    id={textFields.propertyPrice.id}
                    register={form.register}
                    error={form.formState.errors[textFields.propertyPrice.name as keyof newProperty]}
                />
                {isPromotional?
                    <InputText
                    key={textFields.propertyPromotionalPrice.id}
                    name={textFields.propertyPromotionalPrice.name}
                    size={textFields.propertyPromotionalPrice.size}
                    placeholder={textFields.propertyPromotionalPrice.placeholder}
                    text={textFields.propertyPromotionalPrice.text}
                    id={textFields.propertyPromotionalPrice.id}
                    defaultValue={props.objectData.promotionalPrice}

                    register={form.register}
                    error={form.formState.errors[textFields.propertyPromotionalPrice.name as keyof newProperty]}/>
                :
                <NonEditableInputText
                    key={textFields.propertyPromotionalPrice.id}
                    name={textFields.propertyPromotionalPrice.name}
                    size={textFields.propertyPromotionalPrice.size}                    
                    text={textFields.propertyPromotionalPrice.text}
                    value={0}
                    id={textFields.propertyPromotionalPrice.id}
                    register={form.register}/>
                }
                <InputDropdown
                    key={dropdownFields.propertyHighlight.id}
                    name={dropdownFields.propertyHighlight.name}
                    size={dropdownFields.propertyHighlight.size}
                    text={dropdownFields.propertyHighlight.text}
                    id={dropdownFields.propertyHighlight.id}
                    defaultValue={props.objectData.highlight}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.propertyHighlight.name as keyof newProperty]}
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
                    defaultValue={props.objectData.street}

                    register={form.register}
                    error={form.formState.errors[textFields.street.name as keyof newProperty]}
                />
                <InputText
                    key={textFields.propertyNumber.id}
                    name={textFields.propertyNumber.name}
                    size={textFields.propertyNumber.size}
                    placeholder={textFields.propertyNumber.placeholder}
                    text={textFields.propertyNumber.text}
                    defaultValue={props.objectData.propertyNumber}

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
                    defaultValue={props.objectData.cep}

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
                    defaultValue={props.objectData.city}

                    register={form.register}
                    error={form.formState.errors[dropdownFields.city.name as keyof newProperty]}
                />
                <InputDropdown
                    key={dropdownFields.state.id}
                    name={dropdownFields.state.name}
                    size={dropdownFields.state.size}
                    text={dropdownFields.state.text}
                    id={dropdownFields.state.id}
                    defaultValue={props.objectData.state}

                    options={dropdownFields.state.options}
                    register={form.register}
                    error={form.formState.errors[dropdownFields.state.name as keyof newProperty]}
                />
                <InputDropdown
                    key={dropdownFields.neighborhood.id}
                    name={dropdownFields.neighborhood.name}
                    size={dropdownFields.neighborhood.size}
                    text={dropdownFields.neighborhood.text}
                    id={dropdownFields.neighborhood.id}
                    defaultValue={props.objectData.neighborhood}

                    options={dropdownFields.neighborhood.options}
                    register={form.register}
                    error={form.formState.errors[dropdownFields.neighborhood.name as keyof newProperty]}
                />
                 <InputText
                    key={textFields.complement.id}
                    name={textFields.complement.name}
                    size={textFields.complement.size}
                    defaultValue={props.objectData.complement}

                    placeholder={textFields.complement.placeholder}
                    text={textFields.complement.text}
                    id={textFields.complement.id}
                    register={form.register}
                    error={form.formState.errors[textFields.complement.name as keyof newProperty]}
                />
                

                </div>
                <div className="addProprietorsRealtors">
                
                
                    <button onClick={handleAddRealtor}>adicionar corretor</button>  
                    {props.objectData.realtors &&
                    
                        <>
                        
                        <input hidden={true} value ={props.objectData.realtors} {...(form.register ? form.register("realtors") : {})} name = {"realtors"}/>
                        
                        {form.formState.errors.realtors && (
                            <p className="errorText">{form.formState.errors.realtors.message}</p>
                            )}

                        <div>{props.objectData.realtors}</div>
                        
                        </>//falta fazer para validar se tem algum corretor e proprietor
                        }
                    <button onClick={handleAddProprietor}>adicionar proprietario</button>                 
                    {props.objectData.proprietor &&
                        <>

                        <input hidden={true} {...(form.register ? form.register("proprietor") : {})} value ={props.objectData.proprietor} name = {"proprietor"}/>
                        <div>{props.objectData.proprietor}</div>
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