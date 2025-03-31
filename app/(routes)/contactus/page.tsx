import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../faq/style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import Button from "@/app/components/Inputs/Button";
import "../contactus/style/style.css";
import Cellphone from "@/app/components/IconsTSX/CellPhone";
import Envelope from "@/app/components/IconsTSX/Envelope";
import MarcadorDeMapa from "@/app/components/IconsTSX/MarcadorDeMapa";
import InputText from "@/app/components/Inputs/InputText";
import StatusScheduling from "@/app/components/Information/StatusScheduling";

export default function contactus() {
    return (
        <>
        <HeaderAdm />
           <Title tag="h1" text="fale conosco"/>
           {/* <StatusScheduling text="confirmado"/> */}
           <div className="containerContactUs">
                <div className="subContainer">
                    <h2 className="contatoTitle"> CONTATO </h2>
                    <div className="containerIcons">
                        <div className="containerIconText">
                            <MarcadorDeMapa width="32" height="32" color="var(--box-yello-light)"/>
                            <h2 className="text"> smosinwinwi ciwnwçwswsidn ucusbcubcu</h2>
                        </div>
                        <div className="containerIconText">
                            <Envelope width="32" height="32" color="var(--box-yello-light)"/>
                            <h2 className="text" > smosinwinwi ciwnwçwswsidn ucusbcubcu </h2>
                        </div>
                        <div className="containerIconText">
                            <Cellphone width="32" height="32" color="var(--box-yello-light)"/>
                            <h2 className="text"> smosinwinwi ciwnwçwswsidn ucusbcubcu </h2>
                        </div>
                        <div className="containerIconText">
                            <Cellphone width="32" height="32" color="var(--box-yello-light)"/>
                            <h2 className="text"> smosinwinwi ciwnwçwswsidn ucusbcubcu </h2>
                        </div>
                        <div className="containerIconText">
                            <Cellphone width="32" height="32" color="var(--box-yello-light)"/>
                            <h2 className="text"> smosinwinwi ciwnwçwswsidn ucusbcubcu </h2>
                        </div>
                    </div>
                </div>
                
                <div className="subContainerContactUs">
                    <h2 className="contatoTitle"> FORMULÁRIO DE CONTATO </h2>
                    <div className="containerInputs">
                        <div className="inputsContactUs">
                            <InputText name="name" size="large" id="User" text="Nome" placeholder="Digite seu nome"/>
                        </div>
                        <div className="inputsContactUs">
                            <InputText name="name" size="large" id="User" text="Telefone" placeholder="Digite seu telefone"/>
                        </div>
                        <div className="inputsContactUs">
                            <InputText name="name" size="large" id="User" text="E-mail" placeholder="Digite seu e-mail"/>
                        </div>
                        <div className="inputMensageContactUs">
                            <InputText name="name" size="extense" id="User" text="Mensagem" placeholder="Digite seu e-mail"/>
                        </div>
                    </div>
                    <Button type="button" size="large" text="ENVIAR" hover="darken" color="#B23F52" background="white"/>
                </div>
           </div>
        <Footer />
        </>
    );
}
