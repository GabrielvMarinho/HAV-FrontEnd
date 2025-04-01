import Calendar from '../IconsTSX/Calendar';
import Clock from '../IconsTSX/Clock';
import CategoryCardImovel from '../Information/CategoryCardImovel';
import Button from '../Inputs/Button';
import './css/style.css';


export default function ModalScheduling () {

    return (
        <>
            <div className="containerModalScheduling">
                <div className='imageMainContainer'>
                    <img></img>
                </div>

                <h2 className="idPropertyModalScheduling"> id: 1243231 </h2>

                <div className="informs gerais ">
                    <h2 className="cityName"> JARAGUA DO SUL </h2>
                    <h2 className="neighborhoodName"> MANOSOHWDHUU8BC8UE </h2>

                    {/* desktop */}
                    <div className='containerPriceCategory'>
                        <h2 className="priceModalScheduling"> R$ 2.000,00 </h2>
                        <div className='CategoryCardImovelModalScheduling'>
                            <CategoryCardImovel text='casa'/>
                        </div>
                        <div className='CategoryCardImovelModalSchedulingType'>
                            <CategoryCardImovel text='venda'/>
                        </div>
                    </div>
                    <div className='lineModalScheduling'> </div>

                    {/* mobile */}
                    <div className='containerPriceCategoryModalScheduling'>   
                        <div className='containerPriceMobile'>
                            <h2 className="priceModalScheduling"> R$ 2.000,00 </h2>
                            <div className='lineModalSchedulingMobile'> </div>
                        </div>
                        <div className='containerCategoryModalScheduling'>
                            <div className='CategoryCardImovelModalSchedulingMobile'>
                                <CategoryCardImovel text='casa'/>
                            </div>
                            <div className='CategoryCardImovelModalSchedulingMobile'>
                                <CategoryCardImovel text='venda'/>
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
                                <h2 className='nameRealtor'> Kauani da silva </h2>
                                <h2 className='cellphoneRealtor'> 47 9918297102 </h2>
                                <div className='caixinha'> confirmado </div>
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
                                <h2 className='nameRealtor'> Kauani da silva </h2>
                                <h2 className='cellphoneRealtor'> 47 9918297102 </h2>
                                <div className='caixinha'> confirmado </div>
                            </div>
                        </div>
                    
                </div>

                <h2 className='date'> DATA </h2>
                <div className="dateModalScheduling"> 
                    <div className='containerDateAndHour'>
                        <Calendar width="28" height="28" color='var(--text--mid-dark-red)'/>
                        <h2 className='dateHour'> 02/02/2002 </h2>
                    </div>

                    <div className='containerDateAndHour'>
                        <Clock width="28" height="28" color='var(--text--mid-dark-red)'/>
                        <h2 className='dateHour'> 09:00 - 10:00 </h2>
                    </div>
                </div>

                <div className='buttonsModalScheduling'>
                    <Button type='button' size='small' text='Reagendar' hover='lightHover'/>
                    <div className='buttonModal'> 
                        <Button type='button' size='small' text='Cancelar' hover='darkHover' color='var(--arrow-page-manager)' background='var(--box-white)'/>
                    </div>
                </div>
            </div>
        </>
    )

}