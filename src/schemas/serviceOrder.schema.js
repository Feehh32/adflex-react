import { z } from "zod";

const serviceSchema = z.object({
  service_name: z
    .string()
    .trim()
    .min(3, "Nome do serviço deve ter pelo menos 3 caracteres."),

  width: z
    .string()
    .min(1, "Largura é obrigatória.")
    .transform((val) => val.replace(",", "."))
    .refine((val) => !isNaN(val), {
      message: "Informe um número válido.",
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, {
      message: "Largura deve ser maior que zero.",
    }),

  height: z
    .string()
    .min(1, "Altura é obrigatória.")
    .transform((val) => val.replace(",", "."))
    .refine((val) => !isNaN(val), {
      message: "Informe um número válido.",
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, {
      message: "Altura deve ser maior que zero.",
    }),

  amount: z
    .string()
    .min(1, "Quantidade é obrigatória.")
    .refine((val) => !isNaN(val), {
      message: "Informe um número válido.",
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, {
      message: "Quantidade deve ser maior que zero.",
    }),

  thickness_id: z
    .number({
      required_error: "Selecione uma espessura.",
      invalid_type_error: "Espessura inválida.",
    })
    .positive("Espessura inválida."),

  budget_value: z
    .string()
    .optional()
    .nullable()
    .or(z.literal(""))
    .transform((val) => {
      if (!val) return null;

      const parsed = val.replace(",", ".");
      return parsed === "" ? null : Number(parsed);
    })
    .refine((val) => val === null || !isNaN(val), {
      message: "Valor de orçamento inválido.",
    })
    .refine((val) => val === null || val >= 0, {
      message: "O valor não pode ser negativo.",
    }),
});

export const serviceOrderSchema = z.object({
  client_id: z
    .number()
    .min(1, "Cliente é obrigatório.")
    .transform((val) => Number(val)),

  hide_measure: z.boolean().optional(),

  services: z.array(serviceSchema).min(1, "Adicione pelo menos um serviço."),
});
