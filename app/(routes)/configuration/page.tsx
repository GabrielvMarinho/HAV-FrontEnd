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

type FormData = {
  [key: string]: FormDataEntryValue;
};

export default function Configuration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingFormData, setPendingFormData] = useState<FormData | null>(null);
  const router = useRouter();

  const form = useForm<saveConfig>({
    resolver: zodResolver(saveConfig),
    mode: "onSubmit",
  });

  const onSubmit = (data: saveConfig) => {
    if (Object.keys(form.formState.errors).length > 0) return;
    setPendingFormData(data);
    setIsModalOpen(true);
  };

  const addCustomer = async () => {
    if (!pendingFormData) return;
    setIsModalOpen(false);

    try {
      const response = await postCustomer(pendingFormData);
      if (response) router.back();
    } catch (err: any) {
    }
  };

  return (
    <>
      <HeaderAdm />
      <Title tag="h1" text="configuração" />

      <form className="ownerForm" onSubmit={form.handleSubmit(onSubmit)}>
        <ProfileSection form={form} />

        <FormSection form={form} />

        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={addCustomer}
        />
      </form>
    </>
  );
}

const ProfileSection = ({ form }: { form: any }) => (
  <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
      {/* Campos pessoais */}
      <PersonalInfoFields form={form} />

      {/* Divisor visual - mantido pixel-perfect */}
      <div style={{ width: "100%", margin: "30px 0" }} />

      {/* Campos de endereço */}
      <AddressInfoFields form={form} />
    </div>

    <div className="divButtonsAceptCancelForms">
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

const PersonalInfoFields = ({ form }: { form: any }) => (
  <>
    <InputText
      {...configFields.name}
      register={form.register}
      error={form.formState.errors[configFields.name.name as keyof saveConfig]}
    />
    <InputText
      {...configFields.phoneNumber}
      register={form.register}
      error={
        form.formState.errors[configFields.phoneNumber.name as keyof saveConfig]
      }
    />
    <InputText
      {...configFields.cpf}
      register={form.register}
      error={form.formState.errors[configFields.cpf.name as keyof saveConfig]}
      disabled
      className="disabled-input"
    />
    <InputText
      {...configFields.email}
      register={form.register}
      error={form.formState.errors[configFields.email.name as keyof saveConfig]}
    />
    <InputText
      {...configFields.cellphone}
      register={form.register}
      error={
        form.formState.errors[configFields.cellphone.name as keyof saveConfig]
      }
    />
    <InputText
      {...configFields.birthdate}
      register={form.register}
      error={
        form.formState.errors[configFields.birthdate.name as keyof saveConfig]
      }
      disabled
      className="disabled-input"
    />
  </>
);

const AddressInfoFields = ({ form }: { form: any }) => (
  <>
    <InputText
      {...configFields.cep}
      register={form.register}
      error={form.formState.errors[configFields.cep.name as keyof saveConfig]}
    />
    <InputDropdown
      {...dropdownFields.city}
      register={form.register}
      error={
        form.formState.errors[dropdownFields.city.name as keyof saveConfig]
      }
    />
    <InputDropdown
      {...dropdownFields.state}
      register={form.register}
      error={
        form.formState.errors[dropdownFields.state.name as keyof saveConfig]
      }
    />
    <InputDropdown
      {...dropdownFields.neighborhood}
      register={form.register}
      error={
        form.formState.errors[
          dropdownFields.neighborhood.name as keyof saveConfig
        ]
      }
    />
    <InputText
      {...configFields.propertyNumber}
      register={form.register}
      error={
        form.formState.errors[
          configFields.propertyNumber.name as keyof saveConfig
        ]
      }
    />
    <InputText
      {...configFields.street}
      register={form.register}
      error={
        form.formState.errors[configFields.street.name as keyof saveConfig]
      }
    />
    <InputText
      {...configFields.complement}
      register={form.register}
      error={
        form.formState.errors[configFields.complement.name as keyof saveConfig]
      }
    />
  </>
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
