import { z } from "zod";

export const UserConfigurationDtoForm = z.object({

    cpf: z.string().nullable(),
    name: z.string().min(1, { message: "* Campo obrigatório" }),
    email: z.string().min(1, { message: "* Campo obrigatório" }).email({ message: "* E-mail inválido" }),
    celphone: z.string().nullable(),
    phoneNumber: z.string().nullable(),

    cep: z
    .string()
    .nullable()
    .refine((val) => !val || val.length === 8, {
      message: "CEP deve ter 8 dígitos",
    }),
    street: z.string().nullable(),
    propertyNumber: z.string().nullable(),
    complement: z.string().nullable(),
    state: z.string().nullable(),
    city: z.string().nullable(),
    neighborhood: z.string().nullable()
});

export type UserConfigurationDtoForm = z.infer<typeof UserConfigurationDtoForm>;