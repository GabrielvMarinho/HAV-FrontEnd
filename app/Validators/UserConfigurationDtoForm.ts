
import { z } from "zod";

const UserConfigurationDtoForm = z.object({
  cpf: z.string().nullable(),
  name: z.string(),
  email: z.string().email(),
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
  neighborhood: z.string().nullable(),
  image: z.any().optional().nullable()
});
export type UserConfigurationDtoForm = z.infer<typeof UserConfigurationDtoForm>;

