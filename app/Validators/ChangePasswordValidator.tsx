import { z } from "zod";

export const ChangePassword = z.object({
  password: z.string().min(1, { message: "* Campo obrigatório" }),
  confirmPassword: z.string().min(1, { message: "* Campo obrigatório" })
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"], // aponta o erro no campo confirmPassword
  message: "* As senhas não coincidem"
});

export type ChangePassword = z.infer<typeof ChangePassword>;
