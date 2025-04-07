"use client"; // Add this directive at the top

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Updated import
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "../profile/style/style.css";

// Dynamically load components
const HeaderAdm = dynamic(() => import("@/app/components/Header/HeaderAdm"));
/*const HeaderRealtor = dynamic(() => import("@/app/components/Header/HeaderRealtor"));
const HeaderDefault = dynamic(() => import("@/app/components/Header/HeaderDefault"));*/
const Title = dynamic(() => import("@/app/components/NonInteractable/Title"));
const Button = dynamic(() => import("@/app/components/Inputs/Button"));
const HorizontalLine = dynamic(() => import("@/app/components/NonInteractable/HorizontalLine"));
const ArrowNextSlide = dynamic(() => import("@/app/components/IconsTSX/ArrowNextSlide"));
const ButtonUploadPhoto = dynamic(() => import("@/app/components/Inputs/ButtonUploadPhoto"));

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'realtor' | 'customer' | 'editor';
  profileImage?: string;
  phoneNumber?: string;
  creci?: string;
  status?: string;
  editorialPermissions?: string[];
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const form = useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/auth/me');
        if (!response.ok) throw new Error('Failed to fetch user');
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error loading user:", error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const renderHeader = () => {
    if (!user) return <HeaderAdm />;  // Isso só será alterado hora que cada user ter o seu header
    switch(user.role) {
      case 'admin': return <HeaderAdm />;
      case 'realtor': return <HeaderAdm />; //no caso HeaderRealtor
      default: return <HeaderAdm />;  
    }
  };

  const renderRoleSpecificInfo = () => {
    if (!user) return null;
    
    switch(user.role) {
      case 'admin':
        return <p className="admin-contact">Admin Contact: {user.phoneNumber}</p>;
      case 'realtor':
        return <p className="creci">CRECI: {user.creci}</p>;
      case 'editor':
        return <p className="permissions">Permissions: {user.editorialPermissions?.join(', ')}</p>;
      case 'customer':
        return <p className="status">Status: {user.status}</p>;
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <>
      {renderHeader()}
      <Title tag={"h1"} text={"perfil"} />
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="imgPerson">
            <ButtonUploadPhoto
              name="profileImage"
              register={form.register}
              error={form.formState.errors.profileImage}
              defaultValue={user?.profileImage}
            />
          </div>
          <div className="profileInfo">
            <p className="personName">{user?.name || "Usuário"}</p>
            <p className="userType">
              {user?.role === 'admin' ? 'Administrador' :
               user?.role === 'realtor' ? 'Corretor' :
               user?.role === 'editor' ? 'Editor' : 'Cliente'}
            </p>
            {renderRoleSpecificInfo()}
          </div>
        </div>

        <div className="menuContainer">
          <div className="hamburgerMenu">
            <ul>
              <MenuItem href="/notifications" label="NOTIFICAÇÕES" />
              <MenuItem href="/messages" label="MENSAGENS" />
              
              {user?.role === 'customer' && (
                <MenuItem href="/favorites" label="FAVORITOS" />
              )}
              {user?.role === 'realtor' && (
                <MenuItem href="/my-properties" label="MEUS IMÓVEIS" />
              )}
              {user?.role === 'admin' && (
                <MenuItem href="/admin-dashboard" label="PAINEL ADMIN" />
              )}
              {user?.role === 'editor' && (
                <MenuItem href="/content-manager" label="GERENCIAR CONTEÚDO" />
              )}

              <MenuItem href="/settings" label="CONFIGURAÇÕES" />
            </ul>
          </div>
          
          <div className="logoutButton">
            <Button 
              type="button" 
              size="large" 
              text="SAIR" 
              hover="darken" 
              color="white" 
              background="#B23F52" 
              onClick={() => router.push('/logout')}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const MenuItem = ({ href, label }: { href: string; label: string }) => (
  <li className="menuItem">
    <HorizontalLine size={500} color="#0F0F0F80" />
    <div className="menuContent">
      <div className="menuTextWrapper">
        <span className="menuIconPlaceholder"></span>
        <a href={href}>{label}</a>
      </div>
      <div className="lineSpacing">
        <ArrowNextSlide height={40} width={25} color="#5F1E2A" />
      </div>
    </div>
  </li>
);