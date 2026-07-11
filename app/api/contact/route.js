import { Resend } from "resend";
import siteConfig from "../../../config/site.config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, reason } = await request.json();

    // Validación básica de campos obligatorios
    if (!name || !email || !phone || !reason) {
      return Response.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const destination = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

    await resend.emails.send({
      // "onboarding@resend.dev" funciona sin verificar dominio propio,
      // ideal para empezar. Cuando el cliente tenga su dominio,
      // se puede verificar en Resend y usar un remitente propio.
      from: "Formulario web <onboarding@resend.dev>",
      to: destination,
      replyTo: email,
      subject: `Nueva consulta de ${name} — ${siteConfig.business.name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMotivo:\n${reason}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return Response.json(
      { error: "No se ha podido enviar el mensaje" },
      { status: 500 }
    );
  }
}
