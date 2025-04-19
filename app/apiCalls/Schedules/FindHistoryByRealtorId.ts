export default async function FindHistoryByRealtorId(page :string, latestDate: string | null = null, status: string | null = null){
    var url = `http://localhost:9090/schedules/history/realtor?page=${page}`;
    
    if (status !== null) {
        url += `&status=${encodeURIComponent(status)}`;
    }
    if (latestDate !== null) {
        url += `&latestDate=${encodeURIComponent(latestDate)}`;
    }
    
    const response = await fetch(url, {
        
        credentials:"include"
    })
    const data = await response.json()
    console.log("response", data)
    const schedulesHistoryCustomerDto: schedulesHistoryCustomerDTO[] = data.content.map((schdto :any) => {
        return {
            id: schdto.id,
            day: schdto.day,
            start_hour: schdto.start_hour,
            realtorId: schdto.realtor.id,
            realtorName: schdto.realtor.name,
            realtorCreci: schdto.realtor.creci,
            realtorCelphone: schdto.realtor.celphone,
            realtorEmail: schdto.realtor.email,
            purpose: schdto.property.purpose,
            propertyType: schdto.property.propertyType,
            price: schdto.property.price,
            city: schdto.property.address.city,
            state: schdto.property.address.state,
            neighborhood: schdto.property.address.neighborhood,
            status: schdto.status,

        }
    });
    return {schedules :schedulesHistoryCustomerDto, totalPages: data.totalPages}
}

      
    
    