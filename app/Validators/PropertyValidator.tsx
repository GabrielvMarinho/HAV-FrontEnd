import { z } from "zod";

export const newProperty = z.object({
        purpose: z.string().nonempty("* Campo obrigatório"),
        status: z.string().nonempty("* Campo obrigatório"),
        propertyType: z.string().nonempty("* Campo obrigatório"),
        allowsPet: z.string().nonempty("*Campo obrigatório"),
        title: z.string().min(1, { message: "* Campo obrigatório" }),
        propertyDescription: z.string().min(1, { message: "* Campo obrigatório" }),
        area: z.string()
                .min(1, { message: "* Campo obrigatório" })
                .regex(/^\d+([.,]\d+)?$/, { message: "* Apenas números" })
                .refine((value) => {
                        const number = parseFloat(value.replace(",", ".")); // Substitui vírgula por ponto
                        return !isNaN(number) && number > 0;
                }, { message: "* Valor deve ser positivo" }),
        price: z.string()
                .min(1, { message: "* Campo obrigatório" })
                .regex(/^\d+([.,]\d+)?$/, { message: "* Apenas números" })
                .refine((value) => {
                        const number = parseFloat(value.replace(",", ".")); // Substitui vírgula por ponto
                        return !isNaN(number) && number > 0;
                }, { message: "* Valor deve ser positivo" }),
        promotionalPrice: z.string()
                .refine((value) => {

                        // Se o campo não estiver vazio, aplica as validações
                        const number = parseFloat(value.replace(",", ".")); // Substitui vírgula por ponto
                        return !isNaN(number) && number >= 0;
                }, { message: "* Valor deve ser positivo" })
                .refine((value) => {
                        // Se o campo estiver vazio, a validação passa
                        if (!value || value.trim() === "") return true;

                        // Se o campo não estiver vazio, valida se contém apenas números e decimais
                        return /^\d+([.,]\d+)?$/.test(value);
                }, { message: "* Apenas números" }),

        cep: z.string().min(1, { message: "* Campo obrigatório" })
                .regex(/^\d{8}$/, { message: "* 8 dígitos numéricos" }),
        street: z.string().min(1, { message: "* Campo obrigatório" }),
        propertyNumber: z.string()
                .min(1, { message: "* Campo obrigatório" })
                .regex(/^\d+$/, { message: "* Apenas números" })
                .refine((value) => {
                        const number = parseFloat(value);
                        return !isNaN(number) && number > 0;
                }, { message: "* Valor deve ser positivo" }),
        city: z.string().nonempty("* Campo obrigatório"),
        neighborhood: z.string().nonempty("* Campo obrigatório"),
        state: z.string().nonempty("* Campo obrigatório"),
        complement: z.string().optional(),

        condominiumFee: z.string().nonempty("* Campo obrigatório")
                .refine((value) => {

                        const number = parseFloat(value.replace(",", ".")); // Substitui vírgula por ponto
                        return !isNaN(number) && number >= 0;
                }, { message: "* Valor deve ser positivo" })
                .refine((value) => {
                        // Se o campo estiver vazio, a validação passa
                        if (!value || value.trim() === "") return true;

                        // Se o campo não estiver vazio, valida se contém apenas números e decimais
                        return /^\d+([.,]\d+)?$/.test(value);
                }, { message: "* Apenas números" }),
        iptu: z.string()
                .min(1, { message: "* Campo obrigatório" })
                .regex(/^\d+([.,]\d+)?$/, { message: "* Apenas números" })
                .refine((value) => {
                        const number = parseFloat(value.replace(",", ".")); // Substitui vírgula por ponto
                        return !isNaN(number) && number >= 0;
                }, { message: "* Valor deve ser positivo" }),

        bedRoom: z.string().nonempty("* Campo obrigatório"),
        livingRoom: z.string().nonempty("* Campo obrigatório"),
        suite: z.string().nonempty("* Campo obrigatório"),
        bathRoom: z.string().nonempty("* Campo obrigatório"),
        garageSpace: z.string().nonempty("* Campo obrigatório"),
        isFurnished: z.string().nonempty("* Campo obrigatório"),
        highlight: z.string().nonempty("* Campo obrigatório"),
        realtors: z.string().nonempty("* Selecione ao menos um corretor"),
        proprietor: z.string().nonempty("* Selecione ao menos um corretor"),
        floors: z.string().nonempty("* Campo obrigatório"),
        images: z.any().optional().nullable()

});

export type newProperty = z.infer<typeof newProperty>;