const getLastWeekDate = () => {
    const today = new Date();
    today.setDate(today.getDate() - 7);
    return today.toISOString().split('T')[0];
};
const getLastMonthDate = () => {
    const today = new Date();
    today.setDate(today.getDate() - 30);
    return today.toISOString().split('T')[0];
};
const getLastYearDate = () => {
    const today = new Date();
    today.setDate(today.getDate() - 365);
    return today.toISOString().split('T')[0];
};
export const dropdownFields = {
    state: {
        name: "state",
        size: "medium",
        text: "Estado",
        id: "state",
        options: [
            ["sc", "Santa Catarina"],
            ["pr", "Paraná"],
            ["rs", "Rio Grande do Sul"]
        ]
    },
    reasonContactUs: {
        name: "reason",
        size: "medium",
        text: "Motivo Contato",
        id: "reason",
        options: [
            ["Dúvida", "Dúvida"],
            ["Reclamação", "Reclamação"],
            ["Feedback", "Feedback"],
            ["Interesse Em Imóvel", "Interesse Em Imóvel"],
            ["Outro", "Outro"]

        ]
    },
    floors: {
        name: "floors",
        size: "medium",
        text: "N. Andares",
        id: "floors",
        options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"]

        ]
    },
    city: {
        name: "city",
        size: "medium",
        text: "Cidade",
        id: "city",
        options: [
            ["jaragua_do_sul", "Jaraguá do Sul"],
            ["blumenau", "Blumenau"],
            ["joinville", "Joinville"]
        ]
    },
    neighborhood: {
        name: "neighborhood",
        size: "medium",
        text: "Bairro",
        id: "neighborhood",
        options: [
            ["centro", "Centro"],
            ["vila_nova", "Vila Nova"],
            ["tres_rios_do_norte", "Três Rios do Norte"]
        ]
    },
    purpose: { //this component has dependencies, (toggle rent or buy)
        name: "purpose",
        size: "medium",
        text: "Finalidade",
        id: "purpose",
        options: [
            ["venda", "Venda"],
            ["locacao", "Locação"]
        ]
    },
    status: {
        name: "status",
        size: "medium",
        text: "Status",
        id: "status",
        options: [
            ["comum", "Comum"],
            ["lancamento", "Lançamento"],
            ["promocao", "Promoção"]
        ]
    },
    propertyType: {
        name: "propertyType",
        size: "medium",
        text: "Tipo de Ímovel",
        id: "propertyType",
        options: [
            ["apartamento", "Apartamento"],
            ["casa", "Casa"],
            ["terreno", "Terreno"]
        ]
    },
    propertyHighlight: {
        name: "highlight",
        size: "medium",
        text: "Destaque",
        id: "highlight",
        options: [
            ["1", "SIM"],
            ["0", "NÃO"]
        ]
    },
    bedRoom: {
        name: "bedRoom",
        size: "medium",
        text: "Quartos",
        id: "bedRoom",
        options: [
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
        ]
    },
    livingRoom: {
        name: "livingRoom",
        size: "medium",
        text: "Salas",
        id: "livingRoom",
        options: [
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
        ]
    },
    suite: {
        name: "suite",
        size: "medium",
        text: "Suítes",
        id: "suite",
        options: [
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
        ]
    },
    bathRoom: {
        name: "bathRoom",
        size: "medium",
        text: "Banheiros",
        id: "bathRoom",
        options: [
        
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
        ]
    },
    garageSpace: {
        name: "garageSpace",
        size: "medium",
        text: "Garagens",
        id: "garageSpace",
        options: [
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
        ]
    },
    isFurnished: {
        name: "isFurnished",
        size: "medium",
        text: "Mobiliado",
        id: "isFurnished",
        options: [
            ["1", "SIM"],
            ["0", "NÃO"]
        ]
    },
    allowsPet: {
        name: "allowsPet",
        size: "medium",
        text: "Animais",
        id: "allowsPet",
        options: [
            ["1", "Permitido"],
            ["0", "Não Permitido"]
        ]
    },
    order: {
        name: "order",
        size: "medium",
        title: "ORDENAR",
        id: "order",
        options: [
            [1, "Maior Valor"],
            [2, "Menor Valor"],
            [3, "Lançamento"]
        ]
    },
    visualization: {
        name: "visualization",
        size: "medium",
        title: "VISUALIZAÇÃO",
        id: "visualization",
        options: [
            [1, "Card"],
            [2, "Lista"],
            [3, "Mapa"]
        ]
    },
    statusHistoric: {
        name: "status",
        size: "medium",
        title: "STATUS",
        id: "status",
        options: [
            ["confirmado", "Confirmado"],
            ["cancelado", "Cancelado"],
            ["pendente", "Pendente"],
            ["", "Todos"],

        ]
    },
    date: {
        name: "data",
        size: "medium",
        title: "DATA",
        id: "data",
        options: [
            [getLastWeekDate(), "Ultima Semana"],
            [getLastMonthDate(), "Ultimo Mês"],
            [getLastYearDate(), "Ultimo Ano"],
            ["", "Todos"],

        ]
    }
}


///satus e data