import { z } from "zod";

export const newProperty = z.object({
        cep: z.string().min(1, { message: "* Campo obrigatório" })
                .regex(/^\d{8}$/, { message: "* 8 dígitos numéricos" }), // Apenas números
        title: z.string().min(1, {message: "* Campo obrigatório"}),
        propertyDescription: z.string().min(1, {message: "* Campo obrigatório"}),
        
});

export type newProperty = z.infer<typeof newProperty>;