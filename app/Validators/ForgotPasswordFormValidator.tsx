import { z } from "zod";

export const ForgotPasswordFormValidator = z.object({
  email: z.string().min(1, { message: "* Campo obrigatório" }).email()
})


export type ForgotPasswordFormValidator = z.infer<typeof ForgotPasswordFormValidator>;
