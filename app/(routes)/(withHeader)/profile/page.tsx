"use client"

import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "./style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import Button from "@/app/components/Inputs/Button";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import ArrowNextSlide from "@/app/components/IconsTSX/ArrowNextSlide";
import { useEffect, useState } from "react";
import searchCustomerById from "@/app/apiCalls/Customer/searchCustomerById";
import { useRouter } from "next/navigation";
import ButtonUploadPhoto from "@/app/components/Inputs/ButtonUploadPhoto";
import Bell from "@/app/components/IconsTSX/Bell";
import Comments from "@/app/components/IconsTSX/Comments";
import StarIcon from "@/app/components/IconsTSX/StarIcon";
import Definition from "@/app/components/IconsTSX/Definitions";

export default function ProfilePage(props :{id :any, personName :string, userType :string  }) {
  const [customer, setCustomer] = useState<CustomerEditDto | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const customerData = await searchCustomerById(props.id);
        setCustomer(customerData);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      }
    }

    if (props.id) fetchCustomer();
  });

  return (
    <>
      <Title tag={"h1"} text={"perfil"} />
      <div className="profileContainer">
        <div className="profileHeader">
        <div className="imgPerson">
        <ButtonUploadPhoto
          name="profileImage"
          // register={form.register}
          // error={form.formState.errors.profileImage}
        />
      </div>
          <div className="profileInfo">
            <p className="personName">{customer?.name || "Carregando..."}</p>
            <p className="userType">Cliente</p>
          </div>
        </div>
        <div className="menuContainer">
          <div className="hamburgerMenu">
            <ul>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="IconProfile">
                    <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                  </div>
                  <div className="menuTextWrapperNot">
                    <a href="/notification">NOTIFICAÇÕES</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                  </div>
                </div>
              </li>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="IconProfile">
                    <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                  </div>
                  <div className="menuTextWrapperMens">
                    <a href="#">MENSAGENS</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                  </div>
                </div>
              </li>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="IconProfile">
                    <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                  </div>
                  <div className="menuTextWrapperFav">
                    <a href="#">FAVORITOS</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                  </div>
                </div>
              </li>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="IconProfile">
                    <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                  </div>
                  <div className="menuTextWrapper">
                    <a href="/configuration">CONFIGURAÇÕES</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                  </div>
                </div>
              </li>
              <HorizontalLine size={500} color="#0F0F0F80" />
            </ul>
          </div>
          <div className="logoutButton">
            <Button type="button" size="large" text="SAIR" hover="darken" color="white" background="#B23F52" />
          </div>
        </div>
      </div>
    </>
  );
}

