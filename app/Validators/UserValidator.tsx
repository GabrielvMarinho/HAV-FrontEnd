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
    complement: z.string().min(1, { message: "Campo obrigatório" }),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.type === "pf" && (!data.cpf || data.cpf.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "Campo obrigatório",
            path: ["cpf"],
        });
    }

    if (data.type === "pj" && (!data.cnpj || data.cnpj.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "Campo obrigatório",
            path: ["cnpj"],
        });
    }
});

export type NewUser = z.infer<typeof newUser>;
