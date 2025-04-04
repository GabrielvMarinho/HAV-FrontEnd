'use client'

import { useState } from 'react';
import Calendar from '../IconsTSX/Calendar';
import Clock from '../IconsTSX/Clock';
import CategoryCardImovel from '../Information/CategoryCardImovel';
import Button from '../Inputs/Button';
import './css/style.css';
import InputText from '../Inputs/InputText';
import { textFields } from '../globalFormsConfig/InputTextConfig';
import { NewEditorOrAdm } from '@/app/Validators/EditorOrAdmValidator';
import InputTextLogin from '../Inputs/InputTextLogin';
import Envelope from '../IconsTSX/Envelope';
import XButton from '../IconsTSX/XButton';


export default function ModalConfirmPassword () {

   
        const [page, setPage] = useState(0);
        
        if(page==0){
            return(
                <div className='containerModalPasswordConfirmation'>
                    <div className='XButtonModalEmailConfirmation'>
                        <XButton width={16} height={16} color='var(--text-white)'/>
                    </div>
                    <div className='subContainerModalEmailConfirmation'>
                        <h2 className='titleModalPasswordConfirmation'> Alteração de Senha</h2>
                        <div className='lineModalEmailConfirmation'>  </div>
                        <div className='textModalPasswordConfirmation'> Digite a senha antiga para se identificar e em seguida digite a nova senha </div>
                    </div>
                    <div className='inputModalEmailConfirmation'>  
                        <InputText name="name" size="large" id="user" text="Senha Antiga" placeholder="Digite sua senha"/>
                    </div>
                    <div className='inputModalPasswordConfirmation'>  
                        <InputText name="name" size="large" id="user" text="Senha Nova" placeholder="Digite sua senha"/>
                    </div>
                    <div className='inputModalPasswordConfirmation'>  
                        <InputText name="name" size="large" id="user" text="Confirmar senha" placeholder="Digite sua senha"/>
                    </div>

                    <div className="buttonModalPasswordConfirmation">
                        <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"trocar a senha"} ></Button>
                    </div>

                </div>
            )
        }

    return (
        <>

        </>
        )

}