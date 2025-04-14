import { z } from "zod";

export const newUser = z.object({
    type: z.enum(["pf", "pj"]),
    name: z.string().min(1, { message: "* Campo obrigatório" }),
    email: z.string().min(1, { message: "* Campo obrigatório" })
        .email({ message: "* E-mail inválido" }).refine(email => email.includes("@"), { message: "O E-mal deve ser válido", path: ["email"], }),
    phoneNumber: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{10}$/, { message: "* 10 dígitos" }),
    cellphone: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{11}$/, { message: "* 11 dígitos" }), // Apenas números
    cpf: z.string().optional()
        .refine(cpf => !cpf || /^\d{11}$/.test(cpf), {
            message: "* 11 dígitos ",
            path: ["cpf"]
        }),
    cnpj: z.string().optional()
        .refine(cnpj => !cnpj || /^\d{14}$/.test(cnpj), {
            message: "* 14 dígitos ",
            path: ["cnpj"]
        }),

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

}).superRefine((data, ctx) => {
    if (data.type === "pf" && (!data.cpf || data.cpf.trim().length !== 11)) {
        ctx.addIssue({
            code: "custom",
            message: "* CPF deve ter 11 caracteres",
            path: ["cpf"],
        });
    }

    if (data.type === "pj" && (!data.cnpj || data.cnpj.trim().length !== 14)) {
        ctx.addIssue({
            code: "custom",
            message: "* CNPJ deve ter 14 caracteres",
            path: ["cnpj"],
        });
    }
});


export type NewUser = z.infer<typeof newUser>;