import FormAddUserRealtor from "@/app/components/Forms/FormAddUserRealtor";
import Title from "@/app/components/NonInteractable/Title";
import React from 'react';

export default function ProfilePage() {
  return (
    <>
      <Title text="cadastrar editor" tag="h1" />
      <FormAddUserRealtor />
    </>
  );
}
