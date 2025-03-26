import Filter from "@/app/components/Filters/Filter";
import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import TableList from "@/app/components/Information/TableList";
import InputDropdown from "@/app/components/Inputs/InputDropdownNoLabel";
import PageManager from "@/app/components/Inputs/PageManager";
import SearchFavorite from "@/app/components/Inputs/SearchFavorite";
import Favorites from "@/app/components/Inputs/SearchFavorite";
import SearchResult from "@/app/components/Inputs/SearchResult";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import "../../pageStructure.css";


export default function favorite (){
    return(
        <>
        <HeaderAdm/>
        <SearchFavorite/>
        <div className="dropdownFavorite">
        <InputDropdown
            key={dropdownFields.order.id}
            name={dropdownFields.order.name}
            size={dropdownFields.order.size}
            title={dropdownFields.order.title}
            id={dropdownFields.order.id}
            options={dropdownFields.order.options}
        />
        <div className="dropdownSegundo">
        <InputDropdown
            key={dropdownFields.visualization.id}
            name={dropdownFields.visualization.name}
            size={dropdownFields.visualization.size}
            title={dropdownFields.visualization.title}
            id={dropdownFields.visualization.id}
            options={dropdownFields.visualization.options}
        />
        </div>
        </div>
        {/* <PageManager totalPages={props.totalPages}></PageManager> */}
        <Footer/>
        
        </>
    )

}

