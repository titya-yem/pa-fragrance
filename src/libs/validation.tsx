import { z } from "zod";

export const validateLogin = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const validateSignup = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});
