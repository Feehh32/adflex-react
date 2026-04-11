import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres."),

  email_primary: z
    .string()
    .min(1, "Email é obrigatório")
    .pipe(z.email("Email inválido")),

  email_secondary: z
    .string()
    .trim()
    .pipe(z.email("Email inválido"))
    .optional()
    .nullable()
    .or(z.literal(""))
    .transform((val) => (val === "" || val === undefined ? null : val)),

  phone_primary: z
    .string()
    .trim()
    .min(1, "Telefone é obrigatório.")
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 10 || val.length === 11, {
      message: "O telefone deve ter 10 ou 11 dígitos.",
    }),

  phone_secondary: z
    .string()
    .optional()
    .nullable()
    .or(z.literal(""))
    .transform((val) => {
      if (!val) return null;
      const cleaned = val.replace(/\D/g, "");
      return cleaned === "" ? null : cleaned;
    })
    .refine(
      (val) => {
        if (val == null) return true;
        return val.length === 10 || val.length === 11;
      },
      {
        message: "O telefone secundário deve ter 10 ou 11 dígitos.",
      }
    ),

  charge: z
    .string()
    .min(1, "Cobrança é obrigatório.")
    .transform((value) => value.trim().replace(",", "."))
    .refine((value) => !isNaN(value), {
      message: "Informe um valor numérico válido (ex: 0,11 ou 0.11).",
    })
    .transform((value) => Number(value))
    .refine((value) => value >= 0, {
      message: "O valor não pode ser negativo.",
    }),
});
