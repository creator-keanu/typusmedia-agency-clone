import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact";
const valid = { name: "Test", email: "test@example.com", phone: "", company: "", services: ["Webdesign"], budget: "Noch offen", message: "Testanfrage", privacy: true, website: "", requestId: "00000000-0000-4000-8000-000000000000" };
describe("contact validation", () => {
  it("accepts a complete inquiry", () => expect(contactSchema.safeParse(valid).success).toBe(true));
  it("rejects missing consent", () => expect(contactSchema.safeParse({ ...valid, privacy: false }).success).toBe(false));
  it("rejects invalid email", () => expect(contactSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false));
  it("rejects an empty message", () => expect(contactSchema.safeParse({ ...valid, message: "  " }).success).toBe(false));
  it("rejects oversized messages", () => expect(contactSchema.safeParse({ ...valid, message: "x".repeat(5001) }).success).toBe(false));
  it("rejects unsupported services", () => expect(contactSchema.safeParse({ ...valid, services: ["invalid"] }).success).toBe(false));
  it("rejects filled spam traps", () => expect(contactSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false));
});