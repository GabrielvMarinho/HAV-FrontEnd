'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import HeaderAdm from '@/components/Header/HeaderAdm'
import Title from '@/components/NonInteractable/Title'
import InputDropdown from '@/components/Inputs/InputDropdown'
import InputText from '@/components/Inputs/InputText'
import ButtonUploadPhoto from '@/components/Inputs/ButtonUploadPhoto'
import ButtonBackAPoint from '@/components/Inputs/ButtonBackAPoint'
import Modal from '@/components/Modal/Modal'
import { configFields } from '@/components/globalFormsConfig/InputProfileConfigTextConfig'
import { dropdownFields } from '@/components/globalFormsConfig/InputDropdownsConfig'
import { saveConfig } from '@/Validators/ProfileConfigValidator'
import '@/variables.css'
import './style/style.css'
import HorizontalLine from '@/components/NonInteractable/HorizontalLine'
import ToggleButton from '@/components/Inputs/ToggleButton'
import editCustomer from '@/apiCalls/Customer/editCustomer'

export default function ConfigurationPage() {
  const { data: session } = useSession()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pendingFormData, setPendingFormData] = useState<any>(null)
  const [toggleStates, setToggleStates] = useState({
    tema: false,
    idioma: false,
    autenticacao2Fatores: false,
    libras: true,
    leitorTela: false,
    tamanhoFonte: false
  })
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(saveConfig),
    mode: 'onSubmit',
  })

  if (!session?.user) {
    return <div className="login-message">Faça login para acessar as configurações</div>
  }

  const handleToggle = (key: string) => {
    setToggleStates(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const onSubmit = (data: any) => {
    if (Object.keys(form.formState.errors).length > 0) return
    setPendingFormData(data)
    setIsModalOpen(true)
  }

  const saveChanges = async () => {
    if (!pendingFormData || !session?.user?.id) return
    setIsModalOpen(false)
    try {
      const customerData = {
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
      }
      await editCustomer(session.user.id, customerData)
      router.back()
    } catch (err) {
      console.error('Erro ao salvar:', err)
    }
  }

  return (
    <>
      <HeaderAdm />
      <Title tag="h1" text="Configurações do Cliente" />

      <div className="configurationLayout">
        <div className="formContainer">
          <form className="profileConfig" onSubmit={form.handleSubmit(onSubmit)}>
            <section className="profileSection">
              <div className="imgPerson">
                <ButtonUploadPhoto
                  name="image"
                  register={form.register}
                  error={form.formState.errors.image}
                />
              </div>
              <div>
                <p className="personName">{session.user.name?.toUpperCase() || 'CLIENTE'}</p>
                <p className="userType">Perfil do Cliente</p>
              </div>
            </section>

            <article className="articleDataForm">
              <div className="info-section">
                <p className="info-section__title">INFORMAÇÕES PESSOAIS</p>
              </div>
              <div className="inputArticle">
                <InputText {...configFields.name} register={form.register} error={form.formState.errors.name} />
                <InputText {...configFields.phoneNumber} register={form.register} error={form.formState.errors.phoneNumber} />
                <InputText {...configFields.cpf} register={form.register} error={form.formState.errors.cpf} disabled className="disabled-input" />
                <InputText {...configFields.email} register={form.register} error={form.formState.errors.email} />
                <InputText {...configFields.cellphone} register={form.register} error={form.formState.errors.cellphone} />
                <InputText {...configFields.birthdate} register={form.register} error={form.formState.errors.birthdate} disabled className="disabled-input" />
                <div style={{ width: "100%", margin: "15px 0" }} />
                <InputText {...configFields.cep} register={form.register} error={form.formState.errors.cep} />
                <InputDropdown {...dropdownFields.city} register={form.register} error={form.formState.errors.city} />
                <InputDropdown {...dropdownFields.state} register={form.register} error={form.formState.errors.state} />
                <InputDropdown {...dropdownFields.neighborhood} register={form.register} error={form.formState.errors.neighborhood} />
                <InputText {...configFields.propertyNumber} register={form.register} error={form.formState.errors.propertyNumber} />
                <InputText {...configFields.street} register={form.register} error={form.formState.errors.street} />
                <InputText {...configFields.complement} register={form.register} error={form.formState.errors.complement} />
              </div>
              <div className="divButtonSaveForms">
                <ButtonBackAPoint
                  text="Cancelar"
                  hover="darkHover"
                  color="var(--text-white)"
                  background="var(--text-light-red)"
                  onClick={() => router.back()}
                />
                <button 
                  type="submit"
                  className="save-button"
                >
                  Salvar Alterações
                </button>
              </div>
            </article>
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={saveChanges}
        title="Confirmar Alterações"
        content="Tem certeza que deseja salvar as alterações?"
      />
    </>
  )
}

// Componente auxiliar para os itens do menu
function MenuItem({ 
  label,
  isToggled,
  onToggle 
}: { 
  label: string
  isToggled: boolean
  onToggle: () => void 
}) {
  return (
    <li className="menuItem">
      <HorizontalLine size={500} color="#0F0F0F80" />
      <div className="menuContent">
        <span className="menuLabel">{label}</span>
        <ToggleButton toggled={isToggled} onChange={onToggle} />
      </div>
    </li>
  )
}