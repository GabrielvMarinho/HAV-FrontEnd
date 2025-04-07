import { z } from "zod";

export const Login = z.object({
    email: z.string().min(1, { message: "* Campo obrigatório" })
        .email({ message: "* E-mail inválido" })
        .refine(email => email.includes("@"), { message: "O E-mal deve ser válido", path: ["email"], }),
    password: z.string().min(1, { message: "* Campo obrigatório" })

    

})

export type Login = z.infer<typeof Login>;
