import { z } from "zod";

export const newUser = z.object({
    type: z.enum(["pf", "pj"]),
    name: z.string().min(1, { message: "nome é obrigatório" }),
    email: z.string().min(1, { message: "email é obrigatório" }),
    cep: z.string().min(1, { message: "cep é obrigatório" }),
    street: z.string().min(1, { message: "street é obrigatório" }),
    phone: z.string().min(1, { message: "phone é obrigatório" }),
    cellphone: z.string().min(1, { message: "cellphone é obrigatório" }),
    propertyNumber: z.string().min(1, { message: "propertyNumber é obrigatório" }),
    complement: z.string().min(1, { message: "complement é obrigatório " }),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.type === "pf" && (!data.cpf || data.cpf.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "CPF é obrigatório ",
            path: ["cpf"],
        });
    }

    if (data.type === "pj" && (!data.cnpj || data.cnpj.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "CNPJ é obrigatório ",
            path: ["cnpj"],
        });
    }
});

export type NewUser = z.infer<typeof newUser>;
