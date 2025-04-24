import { z } from "zod";

export const SignUpValidator = z.object({
  email: z.string()
    .min(1, { message: "* Campo obrigatório" })
    .email({ message: "* E-mail inválido" }),

  name: z.string()
    .min(1, { message: "* Campo obrigatório" })
    .min(3, { message: "* Nome deve ter pelo menos 3 caracteres" }),

    password: z.string()
    .min(7, { message: "* Deve ter no mínimo 7 caracteres" })
    .refine(value => /[A-Z]/.test(value), {
      message: "* Deve conter uma letra maiúscula"
    })
    .refine(value => /[a-z]/.test(value), {
      message: "* A senha deve uma letra minúscula"
    })
    .refine(value => /[\W_]/.test(value), {
      message: "* A senha deve um caractere especial"
    }),
  confirmPassword: z.string()
    .min(1, { message: "* Campo obrigatório" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "* As senhas não coincidem",
  path: ["confirmPassword"],
});

export type SignUpValidator = z.infer<typeof SignUpValidator>;
