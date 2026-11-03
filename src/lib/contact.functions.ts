import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    // A public, write-only action: never return or query private inquiry content.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name, email: data.email, phone: data.phone, company: data.company,
      services: data.services, budget: data.budget, message: data.message,
      privacy_consent: data.privacy, request_id: data.requestId,
    });
    if (error?.code === "23505") return { saved: true };
    if (error) {
      if (error.message.includes("contact_rate_limit")) return { saved: false, reason: "rate_limit" };
      return { saved: false, reason: "unavailable" };
    }
    return { saved: true };
  });