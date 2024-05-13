import { z } from "zod";

function validateEmail(code: string) {
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(code);
}

export const AddValSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Too Short !"),
  email: z.string().refine(validateEmail, "Invalide email !"),
  born: z.string(),
  heard: z.string(),
});

export type AddFields = z.infer<typeof AddValSchema>
