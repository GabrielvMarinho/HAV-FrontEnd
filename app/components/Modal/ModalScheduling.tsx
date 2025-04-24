import patchStatus from '@/app/apiCalls/Schedules/patchStatus';
import Calendar from '../IconsTSX/Calendar';
import Clock from '../IconsTSX/Clock';
import ClosedPadlock from '../IconsTSX/ClosedPadlock';
import XButton from '../IconsTSX/XButton';
import CategoryCardImovel from '../Information/CategoryCardImovel';
import StatusScheduling from '../Information/StatusScheduling';
import Button from '../Inputs/Button';
import './css/style.css';
import "@/app/variables.css"
import MapSearchResult from '../Maps/MapSearchResult';
import decodeDoubleBase64 from '@/app/utils/decodeDoubleBase64';
import globalDatabaseNameConverter from '@/app/globalDatabaseNameConverter';

export default function ModalScheduling (props :{usuario? :any, obj :schedulesModalInfo, onClose :() =>void}) {

    const scheduleDate = new Date(props.obj.day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log("++++++++++++++", props.obj)
    const isPastDate = scheduleDate < today;

    const confirmStatus = function(){
        const fetch = async function(){
            const data = await patchStatus(props.obj.id, "confirmado")
            console.log(data)
        }
        fetch();
        window.location.href=window.location.href
    }
    const cancelStatus = function(){
        const fetch = async function(){
            const data = await patchStatus(props.obj.id, "cancelado")
            console.log(data)
        }
        fetch();
        window.location.href=window.location.href
    }

    console.log("asdasdasdccccccccc",decodeDoubleBase64(props.obj.propertyPhoto))
    return (
        <>
            <div className="containerModalScheduling">
                <div onClick={props.onClose} className='pointer containerModalSchedulingX'>
                    <XButton width={20} height={20} color='var(--box-red-pink)'/>
                </div>
                    <img
                        src={decodeDoubleBase64(props.obj.propertyPhoto) || "/Image/semFoto.png"} 
                        alt="imagem user"
                        className="imageMainContainer"/>     
                    

                <h2 className="idPropertyModalScheduling"> id: {props.obj.propertyCode} </h2>

                <div className="informs gerais ">
                    <h2 className="cityName"> {globalDatabaseNameConverter[props.obj.city]} </h2>
                    <h2 className="neighborhoodName"> {globalDatabaseNameConverter[props.obj.neighborhood]} </h2>

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
                        {props.usuario.role=="ROLE_REALTOR" ? 
                           <h2 className='realtor'> CLIENTE </h2>
                            :
                            <h2 className='realtor'> CORRETOR </h2>
                        }
                        <h2 className='localization'> LOCALIZAÇÃO </h2>
                    </div>

                    <div className='informationsModalScheduling'>
                        <div className="realtorInformation">
                        {props.usuario.role === "ROLE_REALTOR" ? (
                        props.obj.customerPhoto ? (
                            <img
                            src={`data:image/png;base64,${props.obj.customerPhoto}`} 
                            alt="imagem user"
                            className="circulo"
                            />
                        ) : (
                            <img
                            src="/Image/semFoto.png" 
                            alt="imagem user"
                            className="circulo"
                            />
                        )
                        ) : (
                        props.obj.realtorPhoto ? (
                            <img
                            src={`data:image/png;base64,${props.obj.realtorPhoto}`} 
                            alt="imagem user"
                            className="circulo"
                            />
                        ) : (
                            <img
                            src="/Image/semFoto.png" 
                            alt="imagem user"
                            className="circulo"
                            />
                        )
                        )}
                            <div className='informationsrealtor'>
                                    {props.usuario.role=="ROLE_REALTOR" ? 
                                    <>                                 
                                        <h2 className='nameRealtor'>{props.obj.userName}</h2>
                                        <h2 className='cellphoneRealtor'> {props.obj.userEmail} </h2>
                                    </>
                                        :                                            
                                        <>                                 
                                            <h2 className='nameRealtor'>{props.obj.realtorName}</h2>
                                            <h2 className='cellphoneRealtor'> {props.obj.realtorCelphone} </h2>
                                        </>
                                        }
                                
                                <StatusScheduling size={true} text={props.obj.status}></StatusScheduling>
                            </div>
                        </div>

                        <div className='maps'>
                            
                             <MapSearchResult width='150px' height='100px' addressSpecific={{
                                state: props.obj.state,
                                city: props.obj.city,
                                street: props.obj.street,
                                propertyNumber: props.obj.propertyNumber

                            }} />
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className='containerinformationsModalSchedulingMobile'> 
                    <h2 className='localization'> LOCALIZAÇÃO </h2>
                    <div className='locationiInformations'> </div>
                    {props.usuario.role=="ROLE_REALTOR" ? 
                    <>
                    <h2 className='realtor'> CLIENTE </h2>
                        <div className="realtorInformation">
                            <div className='circulo'> </div>
                            <div className='informationsrealtor'>
                                <h2 className='nameRealtor'>{props.obj.userName}</h2>
                                <h2 className='cellphoneRealtor'> {props.obj.userEmail} </h2>
                                <div className='caixinha'> {props.obj.status} </div>
                            </div>
                        </div>
                        </>
                        :
                        <>
                        <h2 className='realtor'> CORRETOR </h2>
                        <div className="realtorInformation">
                            <div className='circulo'> </div>
                            <div className='informationsrealtor'>
                                <h2 className='nameRealtor'>{props.obj.realtorName}</h2>
                                <h2 className='cellphoneRealtor'> {props.obj.realtorCelphone} </h2>
                                <div className='caixinha'> {props.obj.status} </div>
                            </div>
                        </div>
                        </>
                        
                    }
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
                    {props.obj.status =="pendente" && props.usuario.role!="ROLE_REALTOR" ?
                    <div style={{pointerEvents:"none", opacity:0.5, display:"flex", gap:"10px"}}>
                        <Button type='button' onClick ={() =>{confirmStatus()}} size='small' text='Confirmar' hover='lightHover'/>
                        <Button border={true} onClick ={() =>{cancelStatus()}} type='button' size='small' text='Cancelar' hover='darkHover' color='var(--arrow-page-manager)' background='var(--box-white)'/>

                    </div>
                    :
                  
                    
                    props.obj.status =="confirmado" ?
                        <>
                        <div style={{pointerEvents:"none", opacity:0.5, display:"flex", gap:"10px"}}>
                          <Button type='button' onClick ={() =>{confirmStatus()}} size='small' text='Confirmar' hover='lightHover'/>

                        </div>
                          <Button border={true} onClick ={() =>{cancelStatus()}} type='button' size='small' text='Cancelar' hover='darkHover' color='var(--arrow-page-manager)' background='var(--box-white)'/>
                        </>
                        :props.obj.status =="cancelado" ?
                        <>
                        <div style={{pointerEvents:"none", opacity:0.5, display:"flex", gap:"10px"}}>

                            <Button type='button' onClick ={() =>{confirmStatus()}} size='small' text='Confirmar' hover='lightHover'/>
                            <Button border={true} onClick ={() =>{cancelStatus()}} type='button' size='small' text='Cancelar' hover='darkHover' color='var(--arrow-page-manager)' background='var(--box-white)'/>
                        </div>            
                        </>
                        :
                        <>
                            <Button type='button' onClick ={() =>{confirmStatus()}} size='small' text='Confirmar' hover='lightHover'/>
                            <Button border={true} onClick ={() =>{cancelStatus()}} type='button' size='small' text='Cancelar' hover='darkHover' color='var(--arrow-page-manager)' background='var(--box-white)'/>
                        </>
                    }
                </div>
                                
            </div>
        </>
    )

}