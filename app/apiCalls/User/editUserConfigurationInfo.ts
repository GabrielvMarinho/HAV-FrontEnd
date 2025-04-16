import { UserConfigurationDtoForm } from "@/app/Validators/UserConfigurationDtoForm";

export default async function editUserConfigurationInfo(form: UserConfigurationDtoForm) {
    console.log(form)
    console.log(JSON.stringify({
        name: form.name,
        email: form.email,
        celphone: form.celphone,
        phoneNumber: form.phoneNumber,
        address: {
            cep: form.cep,
            street: form.street,
            propertyNumber: form.propertyNumber,
            complement: form.complement,
            state: form.state,
            city: form.city,
            neighborhood: form.neighborhood
        }
    }))
    const response = await fetch(`http://localhost:9090/users/configuration`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            celphone: form.celphone,
            phoneNumber: form.phoneNumber,
            address: {
                cep: form.cep,
                street: form.street,
                propertyNumber: form.propertyNumber,
                complement: form.complement,
                state: form.state,
                city: form.city,
                neighborhood: form.neighborhood
            }
        })
        
    });
    const data = await response.json();
    console.log(data);
    


    
    return data;
}

