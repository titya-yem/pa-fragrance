import { z } from "zod";

export const validateLogin = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
