import Calendar from '../IconsTSX/Calendar';
import Clock from '../IconsTSX/Clock';
import ClosedPadlock from '../IconsTSX/ClosedPadlock';
import XButton from '../IconsTSX/XButton';
import CategoryCardImovel from '../Information/CategoryCardImovel';
import StatusScheduling from '../Information/StatusScheduling';
import Button from '../Inputs/Button';
import './css/style.css';
import "@/app/variables.css"

export default function ModalScheduling (props :{obj :schedulesModalInfo, onClose :() =>void}) {

    const scheduleDate = new Date(props.obj.day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isPastDate = scheduleDate < today;
    return (
        <>
            <div className="containerModalScheduling">
                <div onClick={props.onClose} className='pointer containerModalSchedulingX'>
                    <XButton width={20} height={20} color='var(--box-red-pink)'/>
                </div>
                <div className='imageMainContainer'>
                    <img></img>
                </div>

                <h2 className="idPropertyModalScheduling"> id: {props.obj.propertyCode} </h2>

                <div className="informs gerais ">
                    <h2 className="cityName"> {props.obj.city} </h2>
                    <h2 className="neighborhoodName"> {props.obj.neighborhood} </h2>

                    {/* desktop */}
                    <div className='containerPriceCategory'>
                        <h2 className="priceModalScheduling"> R$ {props.obj.price} {props.obj.purpose=="venda"||"vendido"?"":"/Mês"}</h2>
                        <div className='CategoryCardImovelModalScheduling'>
                            <CategoryCardImovel text={props.obj.propertyType}/>
                        </div>
                        <div className='CategoryCardImovelModalSchedulingType'>
                            <CategoryCardImovel text={props.obj.purpose}/>
                        </div>
                    </div>
                    <div className='lineModalScheduling'></div>

                    {/* mobile */}
                    <div className='containerPriceCategoryModalScheduling'>   
                        <div className='containerPriceMobile'>
                            <h2 className="priceModalScheduling">  R$ {props.obj.price} {props.obj.purpose=="venda"||"vendido"?"":"/Mês"}</h2>
                            <div className='lineModalSchedulingMobile'> </div>
                        </div>
                        <div className='containerCategoryModalScheduling'>
                            <div className='CategoryCardImovelModalSchedulingMobile'>
                                <CategoryCardImovel text={props.obj.propertyType}/>
                            </div>
                            <div className='CategoryCardImovelModalSchedulingMobile'>
                                <CategoryCardImovel text={props.obj.purpose}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* desktop */}
                <div className='containerinformationsModalScheduling'> 
                    <div className='titleModalScheduling'>
                        <h2 className='realtor'> CORRETOR </h2>
                        <h2 className='localization'> LOCALIZAÇÃO </h2>
                    </div>

                    <div className='informationsModalScheduling'>
                        <div className="realtorInformation">
                            <div className='circulo'> </div>
                            <div className='informationsrealtor'>
                                <h2 className='nameRealtor'>{props.obj.realtorName}</h2>
                                <h2 className='cellphoneRealtor'> {props.obj.realtorCelphone} </h2>
                                <StatusScheduling size={true} text={props.obj.status}></StatusScheduling>
                            </div>
                        </div>

                        <div className='maps'>
                            <div className='locationiInformations'> </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className='containerinformationsModalSchedulingMobile'> 
                    <h2 className='localization'> LOCALIZAÇÃO </h2>
                    <div className='locationiInformations'> </div>

                    <h2 className='realtor'> CORRETOR </h2>
                        <div className="realtorInformation">
                            <div className='circulo'> </div>
                            <div className='informationsrealtor'>
                                <h2 className='nameRealtor'>{props.obj.realtorName}</h2>
                                <h2 className='cellphoneRealtor'> {props.obj.realtorCelphone} </h2>
                                <div className='caixinha'> {props.obj.status} </div>
                            </div>
                        </div>
                    
                </div>

                <h2 className='date'> DATA </h2>
                <div className="dateModalScheduling"> 
                    <div className='containerDateAndHour'>
                        <Calendar width="28" height="28" color='var(--text--mid-dark-red)'/>
                        <h2 className='dateHour'> {props.obj.day} </h2>
                    </div>

                    <div className='containerDateAndHour'>
                        <Clock width="28" height="28" color='var(--text--mid-dark-red)'/>
                        <h2 className='dateHour'> {props.obj.start_hour} - </h2>
                    </div>
                </div>

                <div
                    className='buttonsModalScheduling'
                    style={isPastDate ? { display: "none" } : props.obj.purpose === "venda" || props.obj.purpose === "aluguel" ? {} : { pointerEvents: "none", opacity: "0.5" }}
                >
                    <Button type='button' size='small' text='Confirmar' hover='lightHover'/>
                    <Button type='button' size='small' text='Reagendar' hover='lightHover'/>
                    <Button border={true} type='button' size='small' text='Cancelar' hover='darkHover' color='var(--arrow-page-manager)' background='var(--box-white)'/>
                </div>
                                
            </div>
        </>
    )

}