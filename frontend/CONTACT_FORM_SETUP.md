# Configuracion del Formulario de Contacto (Resend + Vercel)

Este proyecto usa el mismo flujo documentado en `RESEND_INTEGRATION_GUIDE.md`.

## Como funciona

- El envio ocurre solo en servidor dentro de `app/routes/contacto.tsx`.
- No se usa el SDK oficial de Resend.
- Se hace un `fetch` directo a `https://api.resend.com/emails`.
- La API key nunca se expone al navegador.

## Configuracion en Resend

1. Crea una cuenta en Resend.
2. Genera una API key privada.
3. Verifica el dominio desde el que vas a enviar correos, por ejemplo `glasspro.mx`.

## Variables de entorno

Configura estas variables en Vercel o en tu archivo `.env` local dentro de `frontend`:

| Variable | Valor de ejemplo | Descripcion |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_123456789...` | API key privada de Resend |
| `CONTACT_FORM_TO_EMAIL` | `tu-correo@glasspro.mx` | Correo interno que recibe los leads |
| `CONTACT_FORM_FROM_EMAIL` | `GlassPro Contacto <noreply@glass-pro.mx>` | Remitente visible del correo |

Si `CONTACT_FORM_FROM_EMAIL` no existe, el codigo usa este fallback:

```text
GlassPro Contacto <noreply@glasspro.mx>
```

## Implementacion activa

La ruta `app/routes/contacto.tsx` ya:

- valida campos en backend,
- aplica honeypot y rate limiting,
- envia `from`, `to`, `reply_to`, `subject`, `text` y `html` a Resend,
- usa el correo del usuario en `reply_to`,
- y escapa el contenido del usuario antes de interpolarlo en HTML.

## Campos del formulario

La UI actual envia estos campos reales de GlassPro:

- `name`
- `email`
- `phone`
- `company`
- `service`
- `message`
- `website` como honeypot anti-spam

## Despliegue

Una vez configuradas las variables de entorno:

```bash
git add .
git commit -m "feat: activate contact resend integration"
git push
```

## Seguridad

- Honeypot para bots simples.
- Rate limiting de 5 envios por minuto por IP.
- Sanitizacion y validacion server-side.
- API key privada y envio 100% del lado servidor.
