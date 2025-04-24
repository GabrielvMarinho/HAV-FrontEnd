import { z } from "zod";

export const ChangePassword = z.object({
  password: z.string()
    .min(7, { message: "* A senha deve ter no mínimo 7 caracteres" })
    .refine(value => /[A-Z]/.test(value), {
      message: "* A senha deve conter ao menos uma letra maiúscula"
    })
    .refine(value => /[a-z]/.test(value), {
      message: "* A senha deve conter ao menos uma letra minúscula"
    })
    .refine(value => /[\W_]/.test(value), {
      message: "* A senha deve conter ao menos um caractere especial"
    }),
  confirmPassword: z.string().min(1, { message: "* Campo obrigatório" })
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"], // aponta o erro no campo confirmPassword
  message: "* As senhas não coincidem"
});

export type ChangePassword = z.infer<typeof ChangePassword>;
