export default async function FindHistoryByCustomerId(id :any, page :number){
    const url = `http://localhost:9090/schedules/history/customer/${id}?page=${page}`;
    const response = await fetch(url)
    const data = await response.json()
    const schedulesHistoryCustomerDto: schedulesHistoryCustomerDTO[] = data.content.map((schdto :any) => {
        return {
            day: schdto.day,
            start_hour: schdto.start_hour,
            realtorId: schdto.realtor.id,
            realtorName: schdto.realtor.name,
            realtorCreci: schdto.realtor.creci,
            realtorCelphone: schdto.realtor.celphone,
            realtorEmail: schdto.realtor.email,
            purpose: schdto.property.purpose,
            propertyType: schdto.property.propertyType,
            status: schdto.status,

        }
    });

    return {schedules :schedulesHistoryCustomerDto, totalPages: data.totalPages}
}