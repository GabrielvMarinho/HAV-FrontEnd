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
import MultiSelectDropdown from "../Inputs/MultiSelectDropdown";
import GetAdditionals from "@/app/apiCalls/Property/GetAdditionals";
import ButtonUploadPhotos from "../Inputs/buttonUploadPhotos";
import editProperty from "@/app/apiCalls/Property/editProperty";

export default function FormEditProperty(props: { id: any, objectData: any }) {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingFormData, setPendingFormData] = useState<{ [key: string]: FormDataEntryValue } | null>(null);
    const [isPromotional, setIsPromotional] = useState(true)
    const [isLand, setIsLand] = useState(false)
    const [isCondominiumFree, setIsCondominiumFree] = useState(false)
    const [hasIptu, setHasIptu] = useState(true)
    const router = useRouter();

    const [property, setProperty] = useState<PropertyEditDto>()

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [additionals, setAdditionals] = useState()



    //dados extra proprietor e realtor
    if (props.objectData.proprietorsData) {
        props.objectData.proprietorsData = decodeURIComponent(props.objectData.proprietorsData)
        props.objectData.proprietorsData = props.objectData.proprietorsData.split(",");
    }




    if (props.objectData.realtorsData) {
        props.objectData.realtorsData = decodeURIComponent(props.objectData.realtorsData)

        props.objectData.realtorsData = props.objectData.realtorsData.split(",");
        const grouped = [];

        for (let i = 0; i < props.objectData.realtorsData.length; i += 2) {
            grouped.push([props.objectData.realtorsData[i], props.objectData.realtorsData[i + 1]]);
        }

        props.objectData.realtorsData = grouped;

    }








    const handleSelect = (id: string, name: string) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }

    };


    useEffect(() => {
        async function fetchProperty() {
            try {
                const property: PropertyEditDto = await searchPropertyById(props.id);
                setProperty(property)
                console.log("imageBase64List:", property.imageBase64List);
                console.log("Api response:", property);
                changePurpose(props.objectData.purpose == null || props.objectData.purpose == undefined ? property?.purpose : props.objectData.purpose)
                changeStatus(props.objectData.status == null || props.objectData.status == undefined ? property?.propertyStatus : props.objectData.status)
                changeType(props.objectData.propertyType == null || props.objectData.propertyType == undefined ? property?.propertyType : props.objectData.propertyType)

            } catch (error) {
            }
        }

        if (props.id) {
            fetchProperty();
        }


    }, [props.id]);

    const changePurpose = function (type: string) {
        if (type == undefined) {
            setHasIptu(true)
            return;
        }
        if (type == "locacao") {
            setHasIptu(false)
        }
        else if (type == "venda") {
            setHasIptu(true)
        }

    }

    const changeStatus = function (type: string) {
        if (type == undefined) {
            setIsPromotional(true)
            return;
        }
        if (type == "promocao") {
            setIsPromotional(true)
            return;
        }
        else if (type == "lancamento") {
            setIsPromotional(false)

        }
        else if (type == "comum") {
            setIsPromotional(false)

        }

    }
    const changeType = function (type: string) {
        if (type == undefined) {
            setIsCondominiumFree(false)
            return;
        }
        if (type == "terreno") {
            setIsLand(true)
            setIsCondominiumFree(true)
            return;
        }
        else if (type == "casa") {
            setIsLand(false)
            setIsCondominiumFree(true)
            return;
        }
        else if (type == "apartamento") {
            setIsLand(false)
            setIsCondominiumFree(false)
        }

    }
    useEffect(() => {
        setSelectedItems(
            props.objectData.additionals ?? property?.additionals ?? []
        );
        changePurpose(props.objectData.purpose == null || props.objectData.purpose == undefined ? property?.purpose : props.objectData.purpose)
        changeStatus(props.objectData.status == null || props.objectData.status == undefined ? property?.propertyStatus : props.objectData.status)
        changeType(props.objectData.propertyType == null || props.objectData.propertyType == undefined ? property?.propertyType : props.objectData.propertyType)
    }, [property])



    const editPropertyFetch = async function () {

        if (!pendingFormData) return;

        setIsModalOpen(false);

        try {//muda o método
            console.log("----000-----")

            const response = await editProperty(props.id, pendingFormData)
            console.log("----000-----")
            console.log(response)
            window.location.href = "/manage/properties"
        }
        catch (err) {
        }
    };
    function onSubmit(data: newProperty) {
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }
        setPendingFormData(data),
            setIsModalOpen(true)
    }
    useEffect(() => {
        if (property) {
            form.reset({
                complement: String(props.objectData.complement ?? property?.complement ?? ""),
                neighborhood: String(props.objectData.neighborhood ?? property?.neighborhood ?? ""),
                state: String(props.objectData.state ?? property?.state ?? ""),
                city: String(props.objectData.city ?? property?.city ?? ""),
                cep: String(props.objectData.cep ?? property?.cep ?? ""),
                propertyNumber: String(props.objectData.propertyNumber ?? property?.propertyNumber ?? ""),
                street: String(props.objectData.street ?? property?.street ?? ""),
                highlight: String(props.objectData.highlight ?? property?.highlight ?? ""),
                promotionalPrice: String(props.objectData.propertyPromotionalPrice ?? property?.promotionalPrice ?? ""),
                price: String(props.objectData.price ?? property?.price ?? ""),
                iptu: String(props.objectData.iptu ?? property?.iptu ?? ""),
                area: String(props.objectData.area ?? property?.area ?? ""),
                title: String(props.objectData.title ?? property?.title ?? ""),
                propertyDescription: String(props.objectData.propertyDescription ?? property?.propertyDescription ?? ""),
                propertyType: String(props.objectData.propertyType ?? property?.propertyType ?? ""),
                status: String(props.objectData.status ?? property?.propertyStatus ?? ""),
                purpose: String(props.objectData.purpose ?? property?.purpose ?? ""),
                allowsPet: String(props.objectData.allowsPet ?? property?.allowsPet ?? ""),
                isFurnished: String(props.objectData.isFurnished ?? property?.isFurnished ?? ""),
                condominiumFee: String(props.objectData.condominiumFee ?? property?.condominiumFee ?? ""),
                garageSpace: String(props.objectData.garageSpace ?? property?.garageSpace ?? ""),
                suite: String(props.objectData.suite ?? property?.suite ?? ""),
                floors: String(props.objectData.floors ?? property?.floors ?? ""),
                bathRoom: String(props.objectData.bathRoom ?? property?.bathRoom ?? ""),
                livingRoom: String(props.objectData.livingRoom ?? property?.livingRoom ?? ""),
                bedRoom: String(props.objectData.bedRoom ?? property?.bedRoom ?? ""),
                additionals: String(props.objectData.additionals ?? property?.additionals ?? ""),
                realtors: String(props.objectData.realtors ?? property?.realtors ?? ""),
                proprietor: String(props.objectData.proprietor ?? property?.proprietor ?? ""),
            });
        }
    }, [property]);
    const form = useForm<newProperty>({
        resolver: zodResolver(newProperty),
        mode: "onTouched",

    });


    const findAdditionals = async function (): Promise<[]> {
        try {
            const additionals = await GetAdditionals();
            return additionals;
        } catch {
            return [];
        }
    };

    useEffect(() => {
        findAdditionals().then(setAdditionals); // Armazena os dados corretamente no estado
    }, []);


    const handleAddRealtor = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    const handleAddProprietor = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const form = event.target.closest("form") as HTMLFormElement;
        const formData = new FormData(form);

        const dados = Object.fromEntries(formData.entries());
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, value.toString());
        });
        const url = `/choose/proprietor?action=edit&id=${props.id}&${params.toString()}`;
        window.location.href = url
    }


    return (
        <>
            <form onSubmit={form.handleSubmit(onSubmit)} className="propertyForm">


                <section id="smallerSection">
                    <div className="imgPerson">
                        <ButtonUploadPhotos
                            name={"images"}
                            register={form.register}
                            error={form.formState.errors["images" as keyof newProperty]}
                            setValue={form.setValue}
                            initialImages={property?.imageBase64List}
                        />

                    </div>
                    <h3>CARACTERÍSTICAS DO IMÓVEL</h3>
                    <div className="propertyFormGroup">
                        {!isLand == true ?
                            <>

                                <InputDropdown
                                    key={dropdownFields.bedRoom.id}
                                    name={dropdownFields.bedRoom.name}
                                    size={dropdownFields.bedRoom.size}
                                    text={dropdownFields.bedRoom.text}
                                    id={dropdownFields.bedRoom.id}
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

                                    error={form.formState.errors[dropdownFields.livingRoom.name as keyof newProperty]}
                                    options={dropdownFields.livingRoom.options}
                                />
                                <InputDropdown
                                    key={dropdownFields.bathRoom.id}
                                    name={dropdownFields.bathRoom.name}
                                    size={dropdownFields.bathRoom.size}
                                    text={dropdownFields.bathRoom.text}
                                    id={dropdownFields.bathRoom.id}

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
                                    value={property?.bedRoom}


                                />
                                <NonEditableInputText
                                    key={dropdownFields.livingRoom.id}
                                    name={dropdownFields.livingRoom.name}
                                    size={"small"}
                                    register={form.register}
                                    text={dropdownFields.livingRoom.text}
                                    id={dropdownFields.livingRoom.id}
                                    value={property?.livingRoom}
                                />
                                <NonEditableInputText
                                    key={dropdownFields.bathRoom.id}
                                    name={dropdownFields.bathRoom.name}
                                    size={"small"}
                                    register={form.register}
                                    text={dropdownFields.bathRoom.text}
                                    id={dropdownFields.bathRoom.id}
                                    value={property?.bathRoom}

                                />
                                <NonEditableInputText
                                    key={dropdownFields.floors.id}
                                    name={dropdownFields.floors.name}
                                    size={"small"}
                                    register={form.register}
                                    text={dropdownFields.floors.text}
                                    id={dropdownFields.floors.id}
                                    value={property?.floors}
                                />
                                <NonEditableInputText
                                    key={dropdownFields.suite.id}
                                    name={dropdownFields.suite.name}
                                    size={"small"}
                                    value={property?.suite}
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
                                    value={property?.garageSpace}
                                />
                            </>
                        }
                    </div>
                    <h3>IMPOSTOS</h3>
                    <div className="propertyFormGroup">
                        {hasIptu ?
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
                            :
                            <NonEditableInputText
                                key={textFields.iptu.id}
                                name={textFields.iptu.name}
                                size={textFields.iptu.size}
                                text={textFields.iptu.text}
                                id={textFields.iptu.id}

                                register={form.register}
                                value={property?.iptu}
                            />
                        }
                        {isCondominiumFree ?
                            <NonEditableInputText
                                key={textFields.condominiumFee.id}
                                name={textFields.condominiumFee.name}
                                size={textFields.condominiumFee.size}
                                text={textFields.condominiumFee.text}
                                id={textFields.condominiumFee.id}
                                register={form.register}
                                value={property?.condominiumFee}
                            />

                            :
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

                            register={form.register}
                            error={form.formState.errors[dropdownFields.isFurnished.name as keyof newProperty]}
                            options={dropdownFields.isFurnished.options}
                        />
                        {hasIptu ?
                            <InputDropdown
                                key={dropdownFields.allowsPet.id}
                                name={dropdownFields.allowsPet.name}
                                size={dropdownFields.allowsPet.size}
                                text={dropdownFields.allowsPet.text}
                                id={dropdownFields.allowsPet.id}


                                register={form.register}
                                error={form.formState.errors[dropdownFields.allowsPet.name as keyof newProperty]}
                                options={dropdownFields.allowsPet.options}
                            />
                            : <NonEditableInputText
                                key={dropdownFields.allowsPet.id}
                                name={dropdownFields.allowsPet.name}
                                size={"small"}
                                text={dropdownFields.allowsPet.text}
                                register={form.register}
                                value={property?.allowsPet}

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


                            options={dropdownFields.status.options}
                            onChange={changeStatus}

                        />
                        <InputDropdown
                            key={dropdownFields.propertyType.id}
                            name={dropdownFields.propertyType.name}
                            size={dropdownFields.propertyType.size}
                            text={dropdownFields.propertyType.text}
                            id={dropdownFields.propertyType.id}
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
                        {isPromotional ?
                            <InputText
                                key={textFields.propertyPromotionalPrice.id}
                                name={textFields.propertyPromotionalPrice.name}
                                size={textFields.propertyPromotionalPrice.size}
                                placeholder={textFields.propertyPromotionalPrice.placeholder}
                                text={textFields.propertyPromotionalPrice.text}
                                id={textFields.propertyPromotionalPrice.id}

                                register={form.register}
                                error={form.formState.errors[textFields.propertyPromotionalPrice.name as keyof newProperty]} />
                            :
                            <NonEditableInputText
                                key={textFields.propertyPromotionalPrice.id}
                                name={textFields.propertyPromotionalPrice.name}
                                size={textFields.propertyPromotionalPrice.size}
                                text={textFields.propertyPromotionalPrice.text}
                                value={property?.promotionalPrice}
                                id={textFields.propertyPromotionalPrice.id}
                                register={form.register} />
                        }
                        <InputDropdown
                            key={dropdownFields.propertyHighlight.id}
                            name={dropdownFields.propertyHighlight.name}
                            size={dropdownFields.propertyHighlight.size}
                            text={dropdownFields.propertyHighlight.text}
                            id={dropdownFields.propertyHighlight.id}

                            register={form.register}
                            error={form.formState.errors[dropdownFields.propertyHighlight.name as keyof newProperty]}
                            options={dropdownFields.propertyHighlight.options}
                        />

                        <MultiSelectDropdown selectedItems={selectedItems} register={form.register} handleSelect={handleSelect} text="Adicionais" options={[additionals]} />

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

                            register={form.register}
                            error={form.formState.errors[dropdownFields.city.name as keyof newProperty]}
                        />
                        <InputDropdown
                            key={dropdownFields.state.id}
                            name={dropdownFields.state.name}
                            size={dropdownFields.state.size}
                            text={dropdownFields.state.text}
                            id={dropdownFields.state.id}

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

                            options={dropdownFields.neighborhood.options}
                            register={form.register}
                            error={form.formState.errors[dropdownFields.neighborhood.name as keyof newProperty]}
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
                    <h3>RESPONSÁVEIS</h3>

                    <div className="addProprietorsRealtors" style={{ opacity: "0.9" }}>
                        <h4 className="subtitleResponsibles">CORRETORES</h4>

                        <div className={"chooseReponsible"} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {props.objectData.realtors && props.objectData.realtorsData ? (
                                // Caso seja da URL
                                <div style={{ width: "200px", height: "60px" }}>
                                    <input
                                        hidden={true}
                                        {...(form.register ? form.register("realtors") : {})}
                                        name="realtors"
                                    />

                                    {form.formState.errors.realtors && (
                                        <p className="errorText">{form.formState.errors.realtors.message}</p>
                                    )}

                                    <input hidden={true} name="realtorsData" value={props.objectData.realtorsData} />

                                    <div className="realtorsContainer">
                                        {props.objectData.realtorsData?.map((item: string[], index: number) => (
                                            <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                                                <h3>{item[1]}</h3>
                                                <p>{item[0]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : property?.realtors ? (
                                // Caso seja do property
                                <div style={{ width: "200px", height: "60px" }}>
                                    <input
                                        hidden={true}
                                        {...(form.register ? form.register("realtors") : {})}
                                        name="realtors"
                                    />

                                    {form.formState.errors.realtors && (
                                        <p className="errorText">{form.formState.errors.realtors.message}</p>
                                    )}

                                    {/* <input hidden={true} name="realtorsData" value={property.realtorsExtraData} /> */}

                                    <div className="realtorsContainer">
                                        {property && Array.isArray(property.realtorsExtraData) && (
                                            property.realtorsExtraData.map((item: string[], index: number) => (
                                                <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                                                    <h3>{item.name}</h3>
                                                    <p>{item.cpf}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            ) : null}
                            <Button type={"button"} color={"Var(--text-red-pink)"} size={"small"} background="var(--box-white)" text="alterar" onClick={handleAddRealtor}></Button>
                        </div>
                        <h4 className="subtitleResponsibles">PROPRIETÁRIO</h4>

                        <div className={"chooseReponsible"} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {props.objectData.proprietor && props.objectData.proprietorsData ? (
                                // Caso seja da URL
                                <div style={{ width: "200px", height: "50px", display: "flex", alignItems: "center" }}>
                                    <input
                                        hidden={true}
                                        {...(form.register ? form.register("proprietor") : {})}
                                        name="proprietor"
                                    />
                                    <input hidden={true} name="proprietorsData" value={props.objectData.proprietorsData} />

                                    <div className="proprietorsContainer">
                                        <h3>{props.objectData.proprietorsData[1]}</h3>
                                        <p>{props.objectData.proprietorsData[0]}</p>
                                    </div>
                                </div>
                            ) : property?.proprietor ? (
                                // Caso seja do property
                                <div style={{ width: "200px", height: "50px", display: "flex", alignItems: "center" }}>
                                    <input
                                        hidden={true}
                                        {...(form.register ? form.register("proprietor") : {})}
                                        name="proprietor"
                                    />
                                    <input hidden={true} name="proprietorsData" value={property.proprietorsData} />
                                    {property && (
                                        <div className="proprietorsContainer">

                                            <h3>{property.proprietorExtraData?.name}</h3>
                                            <p>{property.proprietorExtraData?.cpf}</p>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                            <Button type={"button"} color={"Var(--text-red-pink)"} size={"small"} background="var(--box-white)" text="alterar" onClick={handleAddProprietor}></Button>
                        </div>
                    </div>
                    <div className="divButtonsAceptCancelForms">
                        <ButtonBackAPoint point={"/manage/properties"} size={"small"} text="Cancelar" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" />
                        <Button type="submit" size={"small"} text="Confirmar" hover="lightHover" color="var(--box-red-pink)"
                            background="var(--text-white)" />
                    </div>
                    <Modal
                        id="idModal"
                        content={
                            <div className="containerModal">
                                <h1 className="titleModal">DESEJA EDITAR A PROPRIEDADE? </h1>
                                <p className="descModal"> Ao confirmar, todos os dados alterados serão salvos no novo formato, está ação não pode ser desfeita!</p>
                            </div>
                        }
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={editPropertyFetch}
                    />
                </section>

            </form>
        </>



    )
}