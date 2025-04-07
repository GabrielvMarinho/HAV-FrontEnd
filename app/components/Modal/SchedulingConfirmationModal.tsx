import CategoryCardImovel from '../Information/CategoryCardImovel';
import Button from '../Inputs/Button';
import './css/style.css';


export default function SchedulingConfirmationModal () {

    return (
        <>
            <div className="cardContainer">
            <div className="mainImageContainer">

            </div>
            <div className="mainContentContainer">
                <h2 className='timeSchedulingConfirmation'> 10 minutoos </h2>
                <div className="mainContentContainerTop">
                    <div className="addressData">
                        <p className="city"> kaksai </p>
                        <p className="neighborhood">kiqdiniqn8f8wb8</p>
                    </div>
                </div>

                {/* desktop */}
                <div className='containerCategoryLineDesktop'>
                    <CategoryCardImovel text='casa'/>
                    <CategoryCardImovel text='Venda'/>
                    <div className="styleCustomerInfo"></div>
                </div>

                {/* mobile */}
                <div className='containerCategoryLineMobile'>
                    <div className="styleCustomerInfo"></div>
                    <div className='containerCategoryLine'>
                        <CategoryCardImovel text='casa'/>
                        <CategoryCardImovel text='Venda'/>
                    </div>
                </div>

                <div className="mainContentContainerBottom">
                    <div className="customerInfo">
                        <div className="imageContentInfo">

                        </div>
                        
                        <div className="textContentInfo">
                            <p className="name">dwwddw</p>
                            <p className="phone">ass</p>
                        </div>
                    </div> 
                </div>
                <div className='buttonSchedulingConfirmation'>
                    <Button type="submit" size={"small"} text="Mais Dados" hover="lightHover" color="var(--text-white)"
                        background="var(--button-color)" />
                        {/* <div className={"overlay"}>
                                <div>
                                    <h1>dados do imóvel</h1>
                                </div>
                        </div>:<></> */}
                </div>
            </div>
        </div>
        </>
    )

}