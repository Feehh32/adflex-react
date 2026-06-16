import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .pipe(z.email("Email inválido")),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres."),
});
