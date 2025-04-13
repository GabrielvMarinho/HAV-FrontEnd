import { z } from "zod";

export const editCustomer = z.object({
    name: z.string().min(1, { message: "* Campo obrigatório" }),
    email: z.string().min(1, { message: "* Campo obrigatório" })
        .email({ message: "* E-mail inválido" })
        .refine(email => email.includes("@"), { message: "O E-mal deve ser válido", path: ["email"], }),
    phoneNumber: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{10}$/, { message: "* 10 dígitos" }),
    cellphone: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{11}$/, { message: "* 11 dígitos" }),
    cpf: z.string(),

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
    image: z.any().optional().nullable(),
    deletedImageId: z.any().optional().nullable()
});

export type EditCustomer = z.infer<typeof editCustomer>;