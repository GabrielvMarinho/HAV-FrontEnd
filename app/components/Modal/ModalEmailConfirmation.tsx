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


export default function ModalEmailConfirmation () {

   
        const [page, setPage] = useState(0);
        
        if(page==0){
            return(
                <div className='containerModalEmailConfirmation'>
                    <div className='XButtonModalEmailConfirmation'>
                        <XButton width={16} height={16} color='var(--text-white)'/>
                    </div>
                    <div className='subContainerModalEmailConfirmation'>
                        <h2 className='titleModalEmailConfirmation'> Alteração do E-mail</h2>
                        <div className='lineModalEmailConfirmation'>  </div>
                        <div className='textModalEmailConfirmation'> Um código de confirmação será enviado para este E-mail para validá-lo </div>
                    </div>
                    <div className='inputModalEmailConfirmation'>  
                        <InputText name="name" size="large" id="user" text="E-mail" placeholder="Digite seu e-mail"/>
                    </div>

                    <div className="buttonModalEmailConfirmation">
                        <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Enviar Código"} onClick={() =>{setPage(1)}}></Button>
                    </div>

                </div>
            )
        }
        if(page==1){
            
            return(
                <div className='containerModalEmailConfirmation'>
                <div className='subContainerModalEmailConfirmation'>
                    <div className='XButtonModalEmailConfirmation'>
                        <XButton width={16} height={16} color='var(--text-white)'/>
                    </div>
                    <h2 className='titleModalEmailConfirmationSecond'> Insira o código de 6 dígitos</h2>
                    <div className='lineModalEmailConfirmation'>  </div>
                    <div className='textModalEmailConfirmationSecond'> Verifique se há um código de verificação para ex*****@gmail.com.  <a className='mudarModalEmail'> Mudar </a> </div>
                </div>
                <div className='inputModalEmailConfirmation'>  
                    <InputText name="name" size="large" id="user" text="Código de 6 dígitos" placeholder="Digite seu e-mail"/>
                </div>
                <h2 className='codigoModalEmailConfirmation'> Reenviar código </h2>

                <div className="buttonModalEmailConfirmationSecond">
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(1)}}></Button>
                </div>
                <div className='textInformationModalEmailConfirmation'> Se não encontrar o código na sua caixa de entrada, verifique a pasta de spam. Caso não esteja lá, o e-mail pode não ter sido confirmado ou pode não estar associado a uma conta HAV. </div>

            </div>
            )
        }
        

    return (
        <>

        </>
        )

}