import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export function ensureResendConfigured(context) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(`${context} email service is not configured. Set RESEND_API_KEY.`);
  }
}
