export default async function fetchUserImage(imageId: number): Promise<string> {
    const url = `http://localhost:9090/images/user/${imageId}`;

    const response = await fetch(url);
    const blob = await response.blob();

    return await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
    });
}