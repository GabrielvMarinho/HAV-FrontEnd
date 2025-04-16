
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "./style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import Button from "@/app/components/Inputs/Button";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import ArrowNextSlide from "@/app/components/IconsTSX/ArrowNextSlide";
import searchCustomerById from "@/app/apiCalls/Customer/searchCustomerById";
import ButtonUploadPhoto from "@/app/components/Inputs/ButtonUploadPhoto";
import Bell from "@/app/components/IconsTSX/Bell";
import Comments from "@/app/components/IconsTSX/Comments";
import StarIcon from "@/app/components/IconsTSX/StarIcon";
import Definition from "@/app/components/IconsTSX/Definitions";
import ProfileValidation from "@/app/components/ValidationComponents/ProfileValidation";
import findUserOnCookie from "@/app/utils/findUserOnCookie";

export default async function ProfilePage() {

  const usuario = await findUserOnCookie();
  
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
            <p className="personName">{usuario?.name}</p>
            <p className="userType">Cliente</p>
          </div>
        </div>
        <ProfileValidation/>
      </div>
    </>
  );
}

