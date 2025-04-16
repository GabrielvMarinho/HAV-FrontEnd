import { z } from "zod";

export const SignUpValidator = z.object({
  email: z.string()
    .min(1, { message: "* Campo obrigatório" })
    .email({ message: "* E-mail inválido" }),

  name: z.string()
    .min(1, { message: "* Campo obrigatório" })
    .min(3, { message: "* Nome deve ter pelo menos 3 caracteres" }),

  password: z.string()
    .min(1, { message: "* Campo obrigatório" })
    .min(6, { message: "* Deve ter ao menos 6 caracteres" }),

  confirmPassword: z.string()
    .min(1, { message: "* Campo obrigatório" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "* As senhas não coincidem",
  path: ["confirmPassword"],
});

export type SignUpValidator = z.infer<typeof SignUpValidator>;
