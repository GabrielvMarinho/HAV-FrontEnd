import { z } from "zod"

export const newUser = z.object({
    name: z.string().min(1, {message: "Campo obrigatório"}),
    email: z.string().min(1, {message: "Campo obrigatório"})
});

export type NewUser = z.infer<typeof newUser>