import { z } from "zod";
import { contact } from "@/content/site";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an.").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255).transform((value) => value.toLowerCase()),
  phone: z.string().trim().max(40).regex(/^[+\d\s().\-/]*$/, "Bitte prüfen Sie Ihre Telefonnummer."),
  company: z.string().trim().max(150),
  services: z.array(z.enum(contact.services)).max(contact.services.length),
  budget: z.enum(contact.budgets),
  message: z.string().trim().min(1, "Bitte beschreiben Sie Ihr Anliegen.").max(5000),
  privacy: z.boolean().refine((value) => value, "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu."),
  website: z.string().max(0, "Die Anfrage konnte nicht verarbeitet werden."),
  requestId: z.string().uuid(),
});
export type ContactInput = z.input<typeof contactSchema>;