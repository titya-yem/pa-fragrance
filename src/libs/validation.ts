import { z } from "zod";

export const validateSignup = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  name: z.string(),
});

export const validateQuestion = z.object({
  email: z.string().email(),
  message: z.string().min(1, "Message is required"),
});

export const validateLogin = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});
