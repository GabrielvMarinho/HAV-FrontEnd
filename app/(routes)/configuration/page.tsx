"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Title from "@/app/components/NonInteractable/Title";
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import InputText from "@/app/components/Inputs/InputText";
import ButtonUploadPhoto from "@/app/components/Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "@/app/components/Inputs/ButtonBackAPoint";
import Modal from "@/app/components/Modal/Modal";
import { configFields } from "@/app/components/globalFormsConfig/InputProfileConfigTextConfig";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { saveConfig } from "@/app/Validators/ProfileConfigValidator";
import postCustomer from "@/app/apiCalls/Customer/postCustomer";
import "../../variables.css";
import "../configuration/style/style.css";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import Button from "@/app/components/Inputs/Button";
import ToggleButton from "@/app/components/Inputs/ToggleButton";
import editCustomer from "@/app/apiCalls/Customer/editCustomer";

type FormData = {
  [key: string]: FormDataEntryValue;
};

export default function Configuration(props :{id :any}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingFormData, setPendingFormData] = useState<FormData | null>(null);
  const [toggleStates, setToggleStates] = useState({
    tema: false,
    idioma: false,
    autenticacao2Fatores: false,
    libras: true,
    leitorTela: false,
    tamanhoFonte: false
  });
  const router = useRouter();

  const form = useForm<saveConfig>({
    resolver: zodResolver(saveConfig),
    mode: "onSubmit",
  });

  const handleToggle = (key: string) => {
    setToggleStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const onSubmit = (data: saveConfig) => {
    if (Object.keys(form.formState.errors).length > 0) return;
    setPendingFormData(data);
    setIsModalOpen(true);
  };

  const saveChanges = async () => {
    if (!pendingFormData) return;
    setIsModalOpen(false);
    try{
      const customer :CustomerEditDto= {
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

      await editCustomer(props.id, customer); 

      router.back(); //volta um point sem ter que escrever a barra
  }
  catch(err){
  }

};

  return (
    <>
      <HeaderAdm />
      <Title tag="h1" text="configurações" />

      <div className="configurationLayout">
        <div className="formContainer">
          <form className="profileConfig" onSubmit={form.handleSubmit(onSubmit)}>
            <ProfileSection form={form} />
            <FormSection form={form} />
          </form>
        </div>

        <div className="menuColumns">
          <div className="menuColumn">
            <h3 className="columnTitle">PREFERÊNCIAS</h3>
            <ul className="menuList">
              <MenuItem
  
                label="TEMA" 
                isToggled={toggleStates.tema}
                onToggle={() => handleToggle('tema')}
              />
              <MenuItem
                label="IDIOMA"
                isToggled={toggleStates.idioma}
                onToggle={() => handleToggle('idioma')}
              />
              <MenuItem
                label="AUTENTICAÇÃO 2 FATORES"
                isToggled={toggleStates.autenticacao2Fatores}
                onToggle={() => handleToggle('autenticacao2Fatores')}
              />
            </ul>
          </div>

          <div className="menuColumn">
            <h3 className="columnTitle">ACESSIBILIDADE</h3>
            <ul className="menuList">
              <MenuItem 
                label="LIBRAS"
                isToggled={toggleStates.libras}
                onToggle={() => handleToggle('libras')}
              />
              <MenuItem
                label="LEITOR DE TELA"
                isToggled={toggleStates.leitorTela}
                onToggle={() => handleToggle('leitorTela')}
              />
              <MenuItem
                label="TAMANHO FONTE"
                isToggled={toggleStates.tamanhoFonte}
                onToggle={() => handleToggle('tamanhoFonte')}
              />
            </ul>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={saveChanges}
      />
    </>
  );
}

const MenuItem = ({ 
  label,
  isToggled = false,
  onToggle = () => {}
}: {
  label: string;
  isToggled?: boolean;
  onToggle?: () => void;
}) => (
  <li className="menuItem">
    <HorizontalLine size={500} color="#0F0F0F80" />
    <div className="menuContent">
      <span className="menuLabel">{label}</span>
      <div className="toggleWrapper">
        <ToggleButton toggled={isToggled} onChange={onToggle} />
      </div>
    </div>
  </li>
);

const ProfileSection = ({ form }: { form: any }) => (
  <section className="profileSection">
    <div className="imgPerson">
      <ButtonUploadPhoto
        name="image"
        register={form.register}
        error={form.formState.errors["image" as keyof saveConfig]}
      />
    </div>
    <div>
      <p className="personName">KAUANI DA SILVA</p>
      <p className="userType">Administrador</p>
    </div>
  </section>
);

const FormSection = ({ form }: { form: any }) => (
  <article className="articleDataForm">
    <div className="info-section">
      <p className="info-section__title">INFORMAÇÕES PESSOAIS</p>
    </div>
    <div className="inputArticle">
      <InputText {...configFields.name} register={form.register} error={form.formState.errors[configFields.name.name as keyof saveConfig]} />
      <InputText {...configFields.phoneNumber} register={form.register} error={form.formState.errors[configFields.phoneNumber.name as keyof saveConfig]} />
      <InputText {...configFields.cpf} register={form.register} error={form.formState.errors[configFields.cpf.name as keyof saveConfig]} disabled className="disabled-input" />
      <InputText {...configFields.email} register={form.register} error={form.formState.errors[configFields.email.name as keyof saveConfig]} />
      <InputText {...configFields.cellphone} register={form.register} error={form.formState.errors[configFields.cellphone.name as keyof saveConfig]} />
      <InputText {...configFields.birthdate} register={form.register} error={form.formState.errors[configFields.birthdate.name as keyof saveConfig]} disabled className="disabled-input" />
      <div style={{ width: "100%", margin: "15px 0" }} />
      <InputText {...configFields.cep} register={form.register} error={form.formState.errors[configFields.cep.name as keyof saveConfig]} />
      <InputDropdown {...dropdownFields.city} register={form.register} error={form.formState.errors[dropdownFields.city.name as keyof saveConfig]} />
      <InputDropdown {...dropdownFields.state} register={form.register} error={form.formState.errors[dropdownFields.state.name as keyof saveConfig]} />
      <InputDropdown {...dropdownFields.neighborhood} register={form.register} error={form.formState.errors[dropdownFields.neighborhood.name as keyof saveConfig]} />
      <InputText {...configFields.propertyNumber} register={form.register} error={form.formState.errors[configFields.propertyNumber.name as keyof saveConfig]} />
      <InputText {...configFields.street} register={form.register} error={form.formState.errors[configFields.street.name as keyof saveConfig]} />
      <InputText {...configFields.complement} register={form.register} error={form.formState.errors[configFields.complement.name as keyof saveConfig]} />
    </div>
    <div className="divButtonSaveForms">
      <div className="changeButton">
        <ButtonBackAPoint
          point=""
          size=""
          text="Mudar dados"
          hover="darkHover"
          color="var(--text-white)"
          background="var(--text-red-pink)"
        />
      </div>
    </div>
  </article>
);

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => (
  <Modal
    id="idModal"
    content={<h1>Deseja confirmar as alterações?</h1>}
    isOpen={isOpen}
    onClose={onClose}
    onConfirm={onConfirm}
  />
);