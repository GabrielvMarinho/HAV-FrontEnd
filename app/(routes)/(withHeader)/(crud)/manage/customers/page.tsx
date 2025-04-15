import Title from "../../../../../components/NonInteractable/Title";
import SearchBar from "../../../../../components/Filters/SearchBar";
import TableList from "../../../../../components/Information/TableList";
import Filter from "../../../../../components/Filters/Filter";
import "@/app/pageStructure.css";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import ActionButton from "@/app/components/Inputs/ActionButton";
import Trashcan from "@/app/components/IconsTSX/Trashcan";
import getByParamsCustomers from "@/app/apiCalls/Customer/getByParamsCustomers";
import deleteCustomerList from "@/app/apiCalls/Customer/deleteByListCustomer";
import changeArchivedStatusCustomer from "@/app/apiCalls/Customer/changeArchivedStatusCustomer";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import AuthGuard from "@/app/context/AuthGuard";

interface DropdownOption {
  name: string;
  size: string;
  text: string;
  id: string;
  options?: [string, string][];
}

const withDefaultOptions = (dropdownConfig: DropdownOption[]): DropdownOption[] => {
  return dropdownConfig.map(item => ({
    ...item,
    options: item.options || [] // Garante que options sempre será um array
  }));
};

export default async function page({ searchParams }: { 
  searchParams: {
    cpf?: string;
    name?: string;
    email?: string;
    cellphone?: string;
    status?: string;
    page?: number;
  }
}) {
  const params = await searchParams;
  const { cpf = null, name = null, email = null, cellphone = null, status = null, page = null } = params;
  
  const { customers, totalPages } = await getByParamsCustomers(
    cpf, name, email, cellphone, status, false, page ?? 0
  );

  const inputDropdown = withDefaultOptions([
    {
      name: "numberProperties",
      size: "large",
      text: "Número de Propriedades",
      id: "numberProperties",
      options: [[1, "1"], [2, '2'], [3, '3'], [4, "4"], [5, "5+"]]
    },
    {
      name: "goal",
      size: "large",
      text: "Objetivo",
      id: "goal",
      options: [['locacao', "Locação"], ["venda", 'Venda'], ["misto", 'Misto']]
    }
  ]);

  return (
    <>
    <AuthGuard requiredRole="ROLE_ADM">
        <Title tag="h1" text="Usuários Comuns" />
        <NavBarAdm options={NavBarPath.users} /> 
        <SearchBar placeholder="Busca:" />
        <div className="containerFilterListAction">
          <Filter
            size="medium"
            inputs={[
              InputFilterConfig.cpf, 
              InputFilterConfig.name, 
              InputFilterConfig.email, 
              InputFilterConfig.cellphone,
              InputFilterConfig.phoneNumber
            ]}
            inputsDropdown={inputDropdown}
            inputPriceRanges={[]}
          />
          <TableList 
            changeArchivedStatus={changeArchivedStatusCustomer}
            deleteFunction={deleteCustomerList}
            archived={false}
            context="admin"
            size="large"
            titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
            data={customers}
            totalPages={totalPages}
          />
        </div>
      </AuthGuard>
    </>
  );
}