import { z } from "zod"

export const newContactUsEmail = z.object({
    reason: z.string().min(1, { message: "* Campo obrigatório" }),
    contactUsDescription: z.string().min(1, { message: "* Campo obrigatório" }),

})
export type newContactUsEmail = z.infer<typeof newContactUsEmail>;