import CategoryCardImovel from '../Information/CategoryCardImovel';
import DescriptionProperty from '../Information/DescriptionProperty';
import ProfileCard from '../Information/ProfileCard';
import TapeCardImovel from '../Information/TapeCardImovel';
import './css/style.css';


export default function ModalScheduling (){
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
                </div>

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

                            <div>

                            </div>
                        </div>

                        <div className='maps'>

                        </div>
                    </div>
                </div>

                <div className="dia e hora"> </div>
            </div>
        </>
    )
}