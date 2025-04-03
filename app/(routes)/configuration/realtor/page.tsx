"use client";
import { useEffect, useState } from "react";
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
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { saveConfig } from "@/app/Validators/ProfileConfigValidator";
import searchRealtorById from "@/app/apiCalls/Realtor/searchRealtorById";
import "@/app/variables.css";
import "@/app/(routes)/configuration/style/style.css";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import ToggleButton from "@/app/components/Inputs/ToggleButton";
import { textFields } from "@/app/components/globalFormsConfig/InputTextConfig";
import NonEditableInputText from "@/app/components/Inputs/NonEditableInputText";
import editRealtor from "@/app/apiCalls/Realtor/editRealtor";

export default function FormEditCustomer(props :{id :any }) {
  const [realtor, setRealtor] = useState<RealtorEditDto>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleStates, setToggleStates] = useState({
    tema: false,
    idioma: false,
    autenticacao2Fatores: false,
    libras: true,
    leitorTela: false,
    tamanhoFonte: false,
  });
  const router = useRouter();

  const form = useForm<RealtorEditDto>({
    resolver: zodResolver(saveConfig),
    mode: "onSubmit",
  });

  // Carrega os dados do cliente
  useEffect(() => {
    async function fetchRealtor() {
      try {
        const customerData = await searchRealtorById(props.id);
        setRealtor(customerData);
        form.reset(customerData);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      }
    }

    if (props.id) fetchRealtor();
  }, [props.id, form]);

  const handleToggle = (key: string) => {
    setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const onSubmit = (data: RealtorEditDto) => {
    if (Object.keys(form.formState.errors).length > 0) {
      console.error("Erros no formulário:", form.formState.errors);
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmEdit = async () => {
    try {
      await editRealtor(props.id, form.getValues());
      router.back();
    } catch (err) {
      console.error("Erro ao editar corretor:", err);
    } finally {
      setIsModalOpen(false);
    }
  };

  // Componente MenuItem interno
  const MenuItem = ({
    label,
    isToggled = false,
    onToggle = () => {},
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

  // Componente ProfileSection interno
  const ProfileSection = () => (
    <section className="profileSection">
      <div className="imgPerson">
        <ButtonUploadPhoto/>
      </div>
      <div>
        <p className="personName">{realtor?.name || "Carregando..."}</p>
        <p className="userType">Corretor</p>
      </div>
    </section>
  );

  // Componente FormSection interno
  const FormSection = () => (
    <article className="articleDataForm">
      <div className="info-section">
        <p className="info-section__title">INFORMAÇÕES PESSOAIS</p>
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
        />
        <InputText
          key={textFields.phoneNumber.id}
          name={textFields.phoneNumber.name}
          size={textFields.phoneNumber.size}
          defaultValue={realtor?.phoneNumber ?? ""}
          placeholder={textFields.phoneNumber.placeholder}
          text={textFields.phoneNumber.text}
          id={textFields.phoneNumber.id}
        />
        <NonEditableInputText
          key={textFields.cpf.id}
          name={textFields.cpf.name}
          size={textFields.cpf.size}
          text={textFields.cpf.text}
          value={realtor?.cpf ?? ""}
          id={textFields.cpf.id}
        />
        <InputText
          key={textFields.email.id}
          name={textFields.email.name}
          size={textFields.email.size}
          defaultValue={realtor?.email ?? ""}
          placeholder={textFields.email.placeholder}
          text={textFields.email.text}
          id={textFields.email.id}
        />
        <InputText
          key={textFields.cellphone.id}
          name={textFields.cellphone.name}
          defaultValue={realtor?.celphone ?? ""}
          size={textFields.cellphone.size}
          placeholder={textFields.cellphone.placeholder}
          text={textFields.cellphone.text}
          id={textFields.cellphone.id}
        />
        <div style={{ width: "100%", margin: "15px 0" }} />
        <InputText
          key={textFields.cep.id}
          name={textFields.cep.name}
          size={textFields.cep.size}
          defaultValue={realtor?.cep ?? ""}
          placeholder={textFields.cep.placeholder}
          text={textFields.cep.text}
          id={textFields.cep.id}
        />
        <InputDropdown
          key={dropdownFields.city.id}
          name={dropdownFields.city.name}
          size={dropdownFields.city.size}
          text={dropdownFields.city.text}
          id={dropdownFields.city.id}
          defaultValue={realtor?.city ?? ""}
          options={dropdownFields.city.options}
        />
        <InputDropdown
          key={dropdownFields.state.id}
          name={dropdownFields.state.name}
          size={dropdownFields.state.size}
          text={dropdownFields.state.text}
          id={dropdownFields.state.id}
          defaultValue={realtor?.state ?? ""}
          options={dropdownFields.state.options}
        />
        <InputDropdown
          key={dropdownFields.neighborhood.id}
          name={dropdownFields.neighborhood.name}
          size={dropdownFields.neighborhood.size}
          text={dropdownFields.neighborhood.text}
          id={dropdownFields.neighborhood.id}
          defaultValue={realtor?.neighborhood ?? ""}
          options={dropdownFields.neighborhood.options}
        />
        <InputText
          key={textFields.propertyNumber.id}
          name={textFields.propertyNumber.name}
          size={textFields.propertyNumber.size}
          defaultValue={realtor?.propertyNumber ?? ""}
          placeholder={textFields.propertyNumber.placeholder}
          text={textFields.propertyNumber.text}
          id={textFields.propertyNumber.id}
        />
        <InputText
          key={textFields.street.id}
          name={textFields.street.name}
          size={textFields.street.size}
          defaultValue={realtor?.street ?? ""}
          placeholder={textFields.street.placeholder}
          text={textFields.street.text}
          id={textFields.street.id}
        />
        <InputText
          key={textFields.complement.id}
          name={textFields.complement.name}
          size={textFields.complement.size}
          placeholder={textFields.complement.placeholder}
          defaultValue={realtor?.complement ?? ""}
          text={textFields.complement.text}
          id={textFields.complement.id}
        />
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

  // Componente ConfirmationModal interno
  const ConfirmationModal = () => (
    <Modal
      id="idModal"
      content={
        <div className="containerModal">
          <h1 className="titleModal">DESEJA EDITAR O CORRETOR?</h1>
          <p className="descModal">
            Ao confirmar, todos os dados alterados serão salvos no novo formato,
            está ação não pode ser desfeita!
          </p>
        </div>
      }
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onConfirm={handleConfirmEdit}
    />
  );

  return (
    <>
      <HeaderAdm />
      <Title tag="h1" text="configurações" />

      <div className="configurationLayout">
        <div className="formContainer">
          <form
            className="profileConfig"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ProfileSection />
            <FormSection />
          </form>
        </div>

        <div className="menuColumns">
          <div className="menuColumn">
            <h3 className="columnTitle">PREFERÊNCIAS</h3>
            <ul className="menuList">
              <MenuItem
                label="TEMA"
                isToggled={toggleStates.tema}
                onToggle={() => handleToggle("tema")}
              />
              <MenuItem
                label="IDIOMA"
                isToggled={toggleStates.idioma}
                onToggle={() => handleToggle("idioma")}
              />
              <MenuItem
                label="AUTENTICAÇÃO 2 FATORES"
                isToggled={toggleStates.autenticacao2Fatores}
                onToggle={() => handleToggle("autenticacao2Fatores")}
              />
            </ul>
          </div>

          <div className="menuColumn">
            <h3 className="columnTitle">ACESSIBILIDADE</h3>
            <ul className="menuList">
              <MenuItem
                label="LIBRAS"
                isToggled={toggleStates.libras}
                onToggle={() => handleToggle("libras")}
              />
              <MenuItem
                label="LEITOR DE TELA"
                isToggled={toggleStates.leitorTela}
                onToggle={() => handleToggle("leitorTela")}
              />
              <MenuItem
                label="TAMANHO FONTE"
                isToggled={toggleStates.tamanhoFonte}
                onToggle={() => handleToggle("tamanhoFonte")}
              />
            </ul>
          </div>
        </div>
      </div>

      <ConfirmationModal />
    </>
  );
}
