import { NextRequest, NextResponse } from "next/server";
import { brand } from "@/data/asher";

/**
 * Envía un correo inmediato cuando alguien deja sus datos — desde el modal de
 * contacto (ver LeadModalProvider.tsx) o el diagnóstico de 3 pasos (ver
 * DiagnosticoQuiz.tsx) — mismo mecanismo (Resend, vía fetch directo a su API
 * REST, sin SDK) que ya usa asher-web.vercel.app en app/api/notify/route.ts.
 * Requiere la env var RESEND_API_KEY en Vercel; si falta, no falla —
 * simplemente no envía (el registro nunca se bloquea por un correo).
 */

function esc(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function fecha(): string {
  return new Date().toLocaleString("es-EC", {
    timeZone: "America/Guayaquil",
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

/** Shared card chrome; each notification type only builds its own rows + extra block. */
function emailShell(title: string, rowsHtml: string, extraHtml: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7f4ed;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f4ed;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#0b1956;border-radius:16px;overflow:hidden;">

        <tr>
          <td style="padding:28px 32px;border-bottom:1px solid #26346f;">
            <p style="margin:0;color:#d8cbb8;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">${esc(brand.name)}</p>
            <h1 style="margin:8px 0 0;color:#f7f4ed;font-size:22px;font-weight:700;">${title}</h1>
            <p style="margin:6px 0 0;color:rgba(245,243,238,0.45);font-size:13px;">${fecha()} (Ecuador)</p>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rowsHtml}
            </table>
          </td>
        </tr>

        ${extraHtml}

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string, opts?: { accent?: boolean }): string {
  return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #1a2760;">
          <span style="color:rgba(245,243,238,0.45);font-size:12px;">${esc(label)}</span><br>
          <span style="color:${opts?.accent ? "#d8cbb8" : "#f7f4ed"};font-size:16px;font-weight:${opts?.accent ? 700 : 600};">${esc(value) || "—"}</span>
        </td>
      </tr>`;
}

/** Modal "Cuéntanos un poco sobre ti" (Navbar / Hero / Contacto). */
function buildLeadHtml(data: Record<string, unknown>): string {
  const rows =
    row("Nombre", String(data.nombre ?? "")) +
    row("Celular / WhatsApp", String(data.celular ?? ""), { accent: true }) +
    row("Correo electrónico", String(data.correo ?? "") || "No proporcionó") +
    row("Sección de origen", String(data.seccion_origen ?? ""));

  const mensaje = data.mensaje
    ? `
        <tr>
          <td style="padding:8px 32px 0;">
            <p style="margin:0 0 12px;color:#d8cbb8;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Mensaje</p>
            <div style="background:#0f1d63;border:1px solid #26346f;border-radius:10px;padding:16px;">
              <p style="margin:0;color:#f7f4ed;font-size:14px;line-height:1.6;font-style:italic;">"${esc(data.mensaje)}"</p>
            </div>
          </td>
        </tr>`
    : "";

  const whatsapp = `
        <tr>
          <td style="padding:28px 32px;">
            <a href="https://wa.me/${String(data.celular ?? "").replace(/[^0-9]/g, "")}"
               style="display:block;text-align:center;background:linear-gradient(135deg,#520000,#7d1a1f);color:#f7f4ed;font-weight:700;font-size:15px;text-decoration:none;border-radius:50px;padding:16px 24px;">
              📲 Contactar por WhatsApp ahora
            </a>
          </td>
        </tr>`;

  return emailShell("🆕 Nuevo registro", rows, mensaje + whatsapp);
}

/** "Haz tu diagnóstico en 3 pasos" (ver DiagnosticoQuiz.tsx). */
function buildDiagnosticoHtml(data: Record<string, unknown>): string {
  const rows =
    row("Negocio", String(data.nombre_negocio ?? "")) +
    row("Contacto", String(data.contacto ?? ""), { accent: true }) +
    row("Sección de origen", String(data.seccion_origen ?? "Diagnóstico"));

  const respuestas = Array.isArray(data.respuestas) ? (data.respuestas as { pregunta: string; respuesta: string }[]) : [];
  const respuestasHtml = respuestas.length
    ? `
        <tr>
          <td style="padding:8px 32px 0;">
            <p style="margin:0 0 12px;color:#d8cbb8;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Respuestas</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1d63;border:1px solid #26346f;border-radius:10px;">
              ${respuestas
                .map(
                  (r, i) => `
              <tr>
                <td style="padding:14px 16px;${i < respuestas.length - 1 ? "border-bottom:1px solid #26346f;" : ""}">
                  <p style="margin:0 0 4px;color:rgba(245,243,238,0.5);font-size:11px;">${esc(r.pregunta)}</p>
                  <p style="margin:0;color:#f7f4ed;font-size:14px;font-weight:600;">${esc(r.respuesta)}</p>
                </td>
              </tr>`
                )
                .join("")}
            </table>
          </td>
        </tr>`
    : "";

  return emailShell("📋 Nuevo diagnóstico", rows, respuestasHtml);
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, reason: "missing_api_key" });

  try {
    const data = await req.json();
    const isDiagnostico = data.tipo === "diagnostico";
    const subject = isDiagnostico
      ? `📋 Diagnóstico: ${data.nombre_negocio ?? "Sin nombre"}`
      : `🆕 Nuevo registro: ${data.nombre ?? "Sin nombre"}`;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${brand.name} <onboarding@resend.dev>`,
        to: brand.notifyEmails,
        subject,
        html: isDiagnostico ? buildDiagnosticoHtml(data) : buildLeadHtml(data),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
