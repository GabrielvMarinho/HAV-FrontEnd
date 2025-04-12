// customerService.ts

async function fetchCustomerImage(imageId: number): Promise<string> {
    const url = `http://localhost:9090/images/customer/image/${imageId}`;

    const response = await fetch(url);
    const blob = await response.blob();

    return await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
    });
}

export default async function searchCustomerById(id: number): Promise<{ customer: CustomerEditDto, imageId?: number }> {
    const url = `http://localhost:9090/customer/${id}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Resposta da API:", data);

        let imageBase64;
        if (data.imageId) {
            imageBase64 = await fetchCustomerImage(data.imageId);
        }

        const { address, ...rest } = data;
        const customer = { ...rest, ...address, imageBase64 };

        return { customer, imageId: data.imageId };

    } catch (error) {
        console.log(error);
        return { customer: {} as CustomerEditDto };
    }
}
