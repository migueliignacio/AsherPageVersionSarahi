import { NextRequest, NextResponse } from "next/server";
import { brand } from "@/data/asher";

/**
 * Envía un correo inmediato cuando alguien se registra desde el modal de
 * contacto (ver LeadModalProvider.tsx) — mismo mecanismo (Resend, vía fetch
 * directo a su API REST, sin SDK) que ya usa asher-web.vercel.app en
 * app/api/notify/route.ts. Requiere la env var RESEND_API_KEY en Vercel;
 * si falta, no falla — simplemente no envía (el registro nunca se bloquea
 * por un correo).
 */
function buildHtml(data: Record<string, unknown>): string {
  const fecha = new Date().toLocaleString("es-EC", {
    timeZone: "America/Guayaquil",
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

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
            <p style="margin:0;color:#d8cbb8;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">${brand.name}</p>
            <h1 style="margin:8px 0 0;color:#f7f4ed;font-size:22px;font-weight:700;">🆕 Nuevo registro</h1>
            <p style="margin:6px 0 0;color:rgba(245,243,238,0.45);font-size:13px;">${fecha} (Ecuador)</p>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1a2760;">
                  <span style="color:rgba(245,243,238,0.45);font-size:12px;">Nombre</span><br>
                  <span style="color:#f7f4ed;font-size:16px;font-weight:600;">${data.nombre ?? "—"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1a2760;">
                  <span style="color:rgba(245,243,238,0.45);font-size:12px;">Celular / WhatsApp</span><br>
                  <span style="color:#d8cbb8;font-size:16px;font-weight:700;">${data.celular ?? "—"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1a2760;">
                  <span style="color:rgba(245,243,238,0.45);font-size:12px;">Correo electrónico</span><br>
                  <span style="color:#f7f4ed;font-size:14px;">${data.correo || "No proporcionó"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1a2760;">
                  <span style="color:rgba(245,243,238,0.45);font-size:12px;">Sección de origen</span><br>
                  <span style="color:#f7f4ed;font-size:14px;">${data.seccion_origen ?? "—"}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        ${data.mensaje ? `
        <tr>
          <td style="padding:8px 32px 0;">
            <p style="margin:0 0 12px;color:#d8cbb8;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Mensaje</p>
            <div style="background:#0f1d63;border:1px solid #26346f;border-radius:10px;padding:16px;">
              <p style="margin:0;color:#f7f4ed;font-size:14px;line-height:1.6;font-style:italic;">"${data.mensaje}"</p>
            </div>
          </td>
        </tr>` : ""}

        <tr>
          <td style="padding:28px 32px;">
            <a href="https://wa.me/${String(data.celular ?? "").replace(/[^0-9]/g, "")}"
               style="display:block;text-align:center;background:linear-gradient(135deg,#520000,#7d1a1f);color:#f7f4ed;font-weight:700;font-size:15px;text-decoration:none;border-radius:50px;padding:16px 24px;">
              📲 Contactar por WhatsApp ahora
            </a>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, reason: "missing_api_key" });

  try {
    const data = await req.json();

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${brand.name} <onboarding@resend.dev>`,
        to: [brand.email],
        subject: `🆕 Nuevo registro: ${data.nombre ?? "Sin nombre"}`,
        html: buildHtml(data),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
