import fetchUserImage from "../Image/searchUserImageById";

export default async function getUserConfigurationInfo() {
    const response = await fetch(`http://localhost:9090/users/configuration`, {
        method: "GET",
        credentials: "include"
    });
    const data = await response.json();
    console.log(data);

    let imageBase64;
    if (data.imageId) {
        imageBase64 = await fetchUserImage(data.imageId);
    }

    data.imageBase64 = imageBase64;
    data.cep = data.address.cep;
    data.street = data.address.street;
    data.propertyNumber = data.address.propertyNumber.toString();
    data.complement = data.address.complement;
    data.state = data.address.state;
    data.city = data.address.city;
    data.neighborhood = data.address.neighborhood;
    delete data.address;

    return data;
}

