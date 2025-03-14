import { z } from "zod";

export const newProperty = z.object({
        cep: z.string().min(1, { message: "* Campo obrigatório" })
                .regex(/^\d{8}$/, { message: "* 8 dígitos numéricos" }),
        iptu: z.string().min(1, {message: "* Campo obrigatório"}),
        propertyPromotionalPrice: z.string().optional(),
        propertyDescription: z.string().min(1, {message: "* Campo obrigatório"}),
        propertyTitle: z.string().min(1, {message: "* Campo obrigatório"}),
        propertyArea: z.string().min(1, {message: "* Camp obrigatório"}),
        propertyPrice: z.string().min(1, {message: "* Campo obrigatório"}),
        condominiumFee: z.string().optional()
});

export type newProperty = z.infer<typeof newProperty>;