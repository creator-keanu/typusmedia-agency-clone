import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { contact } from "@/content/site";
import { contactSchema, type ContactInput } from "@/lib/contact";
import { submitContact } from "@/lib/contact.functions";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [saved, setSaved] = useState(false);
  const [failure, setFailure] = useState("");
  const requestId = useRef<string | undefined>(undefined);
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", services: [], budget: "Noch offen", message: "", privacy: false, website: "", requestId: "00000000-0000-4000-8000-000000000000" },
  });
  const { errors, isSubmitting } = form.formState;
  if (saved) return <div role="status" className="py-8"><CheckCircle2 className="size-10 text-primary" /><h2 className="mt-6 text-3xl font-bold">{contact.successTitle}</h2><p className="mt-4 text-muted-foreground">{contact.successText}</p><Button variant="outline" className="mt-8" onClick={() => { form.reset(); requestId.current = undefined; setSaved(false); }}>Weitere Anfrage</Button></div>;
  return <form noValidate onSubmit={form.handleSubmit(async (values) => {
    setFailure("");
    requestId.current ??= crypto.randomUUID();
    try {
      const result = await send({ data: { ...values, requestId: requestId.current } });
      if (result.saved) setSaved(true);
      else setFailure(result.reason === "rate_limit" ? "Zu viele Anfragen. Bitte versuchen Sie es später erneut." : "Ihre Nachricht konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.");
    } catch { setFailure("Ihre Nachricht konnte nicht gespeichert werden. Bitte versuchen Sie es erneut."); }
  })} className="min-w-0 space-y-7">
    <h2 className="text-3xl font-bold">{contact.formTitle}</h2>
    <fieldset disabled={isSubmitting} className="space-y-7 disabled:opacity-70">
      <div className="grid gap-6 sm:grid-cols-2">
        {([{ key: "name", label: "Name *", type: "text", max: 100, auto: "name" }, { key: "email", label: "E-Mail *", type: "email", max: 255, auto: "email" }, { key: "company", label: "Unternehmen", type: "text", max: 150, auto: "organization" }, { key: "phone", label: "Telefon", type: "tel", max: 40, auto: "tel" }] as const).map((field) => <div key={field.key}><label htmlFor={field.key} className="mb-2 block text-sm font-semibold">{field.label}</label><Input id={field.key} type={field.type} autoComplete={field.auto} maxLength={field.max} className="h-12" aria-invalid={Boolean(errors[field.key])} aria-describedby={errors[field.key] ? `${field.key}-error` : undefined} {...form.register(field.key)} />{errors[field.key] && <p id={`${field.key}-error`} className="mt-2 text-sm text-destructive">{errors[field.key]?.message}</p>}</div>)}
      </div>
      <fieldset><legend className="mb-3 text-sm font-semibold">Welche Leistungen interessieren Sie?</legend><div className="grid gap-3 sm:grid-cols-2">{contact.services.map((service) => <label key={service} className="flex cursor-pointer items-center gap-3 text-sm"><Checkbox checked={form.watch("services").includes(service)} onCheckedChange={(checked) => { const selected = form.getValues("services"); form.setValue("services", checked === true ? [...selected, service] : selected.filter((value) => value !== service), { shouldValidate: true }); }} />{service}</label>)}</div></fieldset>
      <div><label htmlFor="budget" className="mb-2 block text-sm font-semibold">Geplantes Budget</label><select id="budget" {...form.register("budget")} className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">{contact.budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></div>
      <div><label htmlFor="message" className="mb-2 block text-sm font-semibold">Ihr Anliegen *</label><Textarea id="message" rows={6} maxLength={5000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} {...form.register("message")} />{errors.message && <p id="message-error" className="mt-2 text-sm text-destructive">{errors.message.message}</p>}</div>
      <div hidden aria-hidden="true"><label htmlFor="website">Website</label><Input id="website" tabIndex={-1} autoComplete="off" {...form.register("website")} /></div>
      <div><div className="flex items-start gap-3"><Checkbox id="privacy" className="mt-1" checked={form.watch("privacy")} onCheckedChange={(checked) => form.setValue("privacy", checked === true, { shouldValidate: true })} aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><label htmlFor="privacy" className="text-sm leading-relaxed text-muted-foreground">{contact.privacy} <Link to="/datenschutz" className="text-primary underline">Datenschutz</Link></label></div>{errors.privacy && <p id="privacy-error" className="mt-2 text-sm text-destructive">{errors.privacy.message}</p>}</div>
      {failure && <p role="alert" className="text-sm text-destructive">{failure}</p>}
      <Button type="submit" disabled={isSubmitting} size="lg" className="h-12">{isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowUpRight />} {isSubmitting ? "Wird gespeichert …" : "Anfrage senden"}</Button>
    </fieldset>
  </form>;
}