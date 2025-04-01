"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import HeaderAdm from "../../components/Header/HeaderAdm";
import Title from "../../components/NonInteractable/Title";
import Modal from "../../components/Modal/Modal";
import ButtonUploadPhoto from "../../components/Inputs/ButtonUploadPhoto";
import ButtonBackAPoint from "../../components/Inputs/ButtonBackAPoint";
import "@/variables.css";
import "./style.css";
import React from "react";

export enum UserType {
  CUSTOMER = "customer",
  REALTOR = "realtor",
  EDITOR = "editor",
  ADMIN = "admin",
}

interface ProfileEditBaseProps {
  id: string;
  userType: UserType;
  formConfig: {
    resolver: any;
    defaultValues?: any;
  };
  children: React.ReactNode;
}

export default function ProfileEditBase({
  id,
  userType,
  formConfig,
  children,
}: ProfileEditBaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const methods = useForm({
    resolver: formConfig.resolver,
    defaultValues: formConfig.defaultValues,
    mode: "onSubmit",
  });

  const onSubmit = methods.handleSubmit((data) => {
    if (Object.keys(methods.formState.errors).length > 0) return;
    setIsModalOpen(true);
  });

  const saveChanges = () => {
    setIsModalOpen(false);
    router.back();
  };

  return (
    <FormProvider {...methods}>
      <HeaderAdm />
      <Title tag="h1" text="configurações" />

      <div className="configurationLayout">
        <div className="formContainer">
          <form onSubmit={onSubmit}>
            <section className="profileSection">
              <ButtonUploadPhoto name="image" register={methods.register} />
              <p className="personName">{userType.toUpperCase()}</p>
            </section>
            
            {children}

            <div className="divButtonSaveForms">
              <ButtonBackAPoint 
                text="Cancelar" 
                onClick={() => router.back()}
              />
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>

      <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={saveChanges}
              content="Deseja confirmar as alterações?" id={""}      />
    </FormProvider>
  );
}