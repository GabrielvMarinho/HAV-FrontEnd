'use client';

import Button from "../Inputs/Button";
import InputText from "../Inputs/InputText";
import InputTextArea from "../Inputs/InputTextArea";

export default function ContactUsForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("Enviou", data);
    };

    return (
        <div className="subContainerContactUs">
            <h2 className="contatoTitle">FORMULÁRIO DE CONTATO</h2>
            <div className="containerInputs">
                <form onSubmit={handleSubmit}>
                    <div className="inputsContactUs">
                        <InputText 
                            name="name"
                            size="large"
                            id="name"
                            text="Nome"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="inputsContactUs">
                        <InputText 
                            name="cellphone"
                            size="large"
                            id="cellphone"
                            text="Celular"
                            placeholder="Digite seu celular"
                        />
                    </div>
                    <div className="inputsContactUs">
                        <InputText 
                            name="email"
                            size="large"
                            id="email"
                            text="Email"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="inputMensageContactUs">
                        <InputTextArea 
                            name="contactUsDescription"
                            rows={10} 
                            size="extense" 
                            id="contactUsDescription"
                            text="Mensagem"
                            placeholder="Digite sua mensagem"
                        />
                    </div>
                    <div className="buttonContainer">
                        <Button 
                            type="submit" 
                            size="large" 
                            text="ENVIAR" 
                            hover="darken" 
                            color="#B23F52" 
                            background="white"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

