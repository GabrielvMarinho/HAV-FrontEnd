
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
            ["três_rios_do_norte", "Três Rios do Norte"]
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
            [1, "Confirmado"],
            [2, "Cancelado"],
            [3, "Pendente"]
        ]
    },
    data: {
        name: "data",
        size: "medium",
        title: "DATA",
        id: "data",
        options: [
            [1, "Ultima Semana"],
            [2, "Ultimo Mês"],
            [3, "Ultimo Ano"]
        ]
    }
}

///satus e data