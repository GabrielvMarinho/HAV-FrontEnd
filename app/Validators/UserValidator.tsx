import { z } from "zod";

export const newUser = z.object({
    type: z.enum(["pf", "pj"]),
    name: z.string().min(1, { message: "Campo obrigatório" }),
    email: z.string().min(1, { message: "Campo obrigatório" }),
    cep: z.string().min(1, { message: "Campo obrigatório" }),
    street: z.string().min(1, { message: "Campo obrigatório" }),
    phone: z.string().min(1, { message: "Campo obrigatório" }),
    cellphone: z.string().min(1, { message: "Campo obrigatório" }),
    propertyNumber: z.string().min(1, { message: "Campo obrigatório" }),
    complement: z.string().optional(),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.type === "pf" && (!data.cpf || data.cpf.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "CPF é obrigatório para Pessoa Física",
            path: ["cpf"],
        });
    }

    if (data.type === "pj" && (!data.cnpj || data.cnpj.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "CNPJ é obrigatório para Pessoa Jurídica",
            path: ["cnpj"],
        });
    }
});

export type NewUser = z.infer<typeof newUser>;
