# 📧 Configuración del Formulario de Contacto (Resend + Vercel)

Sigue estos pasos para activar el envío de correos electrónicos en producción. El formulario ya está construido con las mejores prácticas de seguridad (sanitización, honeypot, rate limiting).

## 1. Instalar Dependencia
Ejecuta el siguiente comando en la carpeta `frontend`:

```bash
npm install resend
```

## 2. Configuración en Resend
1. Crea una cuenta en [Resend.com](https://resend.com).
2. Ve a **API Keys** y crea una nueva llave (llámala "GlassPro Production").
3. **Importante:** Para enviar correos desde tu propio dominio (ej. `noreply@glasspro.mx`), ve a **Domains** y sigue los pasos para verificar tu dominio mediante registros DNS (DKIM/SPF).

## 3. Variables de Entorno en Vercel
Para que el servidor pueda enviar correos sin exponer llaves en el navegador, debes configurar estas variables:

1. Ve a tu proyecto en el **Vercel Dashboard**.
2. Entra a **Settings** -> **Environment Variables**.
3. Agrega las siguientes tres variables:

| Variable | Valor de ejemplo | Descripción |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_123456789...` | Tu API Key de Resend |
| `CONTACT_EMAIL` | `tu-correo@glasspro.mx` | El correo que recibirá los mensajes |
| `RESEND_FROM_DOMAIN` | `noreply@glasspro.mx` | El remitente verificado en Resend |

*Nota: Para desarrollo local, puedes crear un archivo `.env` en la raíz de `frontend` con estos mismos valores.*

## 4. Activar el Código
Abre el archivo `app/routes/contacto.tsx` y busca el bloque marcado como `RESEND INTEGRATION`. 

1. Descomenta el import al inicio del archivo (si decidiste moverlo arriba) o dentro de la función `action`.
2. Descomenta todo el bloque de lógica de Resend (líneas ~150 a ~200).
3. Asegúrate de que las variables coincidan con las que pusiste en Vercel.

## 5. Desplegar
Una vez realizados los cambios y configuradas las variables en Vercel:

```bash
git add .
git commit -m "feat: activate resend email integration"
git push
```

Vercel detectará el cambio y aplicará las variables de entorno automáticamente.

---

### 🛡️ Notas de Seguridad Implementadas
*   **Honeypot:** Detecta bots automáticamente sin molestar al usuario.
*   **Rate Limiting:** Evita ataques de spam limitando a 5 envíos por minuto por IP.
*   **Sanitización:** Todo input se limpia en el servidor antes de procesarse.
*   **Zero Client Exposure:** Tu API Key nunca viaja al navegador; el envío ocurre 100% en el servidor de Vercel.
