# GlassPro Frontend

Frontend corporativo de GlassPro, construido como una aplicacion React con renderizado del lado del servidor. El sitio presenta la marca, comunica sus servicios de vidrio y cristal templado, capta prospectos mediante un formulario de contacto y publica contenido editorial desde Sanity.

## 1. Objetivo del sitio

Este frontend cumple cuatro funciones principales:

1. Presentacion comercial de GlassPro.
2. Explicacion de servicios y capacidades tecnicas.
3. Generacion de leads por medio de cotizaciones y contacto.
4. Publicacion de articulos del blog administrados desde un CMS.

En terminos de negocio, el sitio esta orientado a convertir visitas en solicitudes comerciales, reforzar confianza de marca y posicionar organicamente la empresa en buscadores para consultas relacionadas con cristal templado, maquila de vidrio, herrajes y soluciones arquitectonicas en vidrio.

## 2. Que hace el sitio hoy

Actualmente el frontend expone estas secciones publicas:

| Ruta | Proposito | Fuente de contenido |
| --- | --- | --- |
| `/` | Landing principal con propuesta de valor, servicios destacados, testimonios, FAQ y CTA de contacto. | Componentes estaticos en React |
| `/quienes-somos` | Presentacion de la empresa, historia, principios, capacidades y CTA. | Componentes estaticos en React |
| `/servicios` | Desglose de servicios, proceso, calidad, industrias atendidas, FAQ y CTA. | Componentes estaticos en React |
| `/blog` | Listado de articulos del blog. | Sanity CMS |
| `/blog/:slug` | Vista detalle de un articulo. | Sanity CMS + Portable Text |
| `/contacto` | Captacion de leads y solicitud de cotizacion. | UI React + accion server-side |
| `/aviso-de-privacidad` | Pagina legal. | Placeholder actual |
| `/terminos-y-condiciones` | Pagina legal. | Placeholder actual |
| `*` | Pagina 404. | Placeholder actual |

## 3. Stack tecnico

La aplicacion esta construida con las siguientes piezas:

- `React 19`
- `React Router 7` con modo framework
- `SSR` activado desde `react-router.config.ts`
- `Vite 7` como bundler y entorno de desarrollo
- `TypeScript`
- `Tailwind CSS v4`
- `Framer Motion` para animaciones y entradas visuales
- `Lenis` para smooth scrolling global
- `Sanity` como CMS para el blog
- `Resend` para envio de formularios de contacto
- `Docker` para empaquetado y despliegue containerizado

## 4. Arquitectura general

### 4.1 Renderizado y shell global

La aplicacion usa SSR por defecto. El archivo `app/root.tsx` define el cascaron global del sitio:

- registra meta global minima;
- monta `Navbar` y `Footer` de forma persistente;
- inyecta `Meta`, `Links`, `Scripts` y `ScrollRestoration` de React Router;
- inicializa `Lenis` en cliente para el scroll suave;
- inserta JSON-LD global para `LocalBusiness` y `WebSite`.

Esto significa que cada pagina renderiza dentro de una estructura compartida, con navegacion consistente, pie de pagina comun y capacidades SEO base centralizadas.

### 4.2 Enrutamiento

Las rutas estan declaradas manualmente en `app/routes.ts`. No hay generacion automatica ni filesystem routing implícito fuera de la configuracion de React Router.

Mapa real:

```ts
/
/quienes-somos
/servicios
/blog
/blog/:slug
/contacto
/aviso-de-privacidad
/terminos-y-condiciones
/*
```

### 4.3 Organizacion del codigo

La estructura principal del frontend sigue esta separacion:

```text
frontend/
  app/
    components/   Componentes por seccion o dominio
    hooks/        Hooks reutilizables
    layout/       Navbar y footer
    lib/          SEO, Sanity, utilidades y Lenis
    routes/       Paginas y acciones/loader asociados
    ui/           Componentes UI base
    app.css       Tema global y utilidades Tailwind
    root.tsx      Shell global SSR
    routes.ts     Registro de rutas
  public/         Assets estaticos, OG images, robots y sitemap
  Dockerfile
  package.json
```

## 5. Desglose funcional por pagina

### 5.1 Home

La ruta `/` funciona como landing comercial principal.

Bloques renderizados:

- `Hero`
- `Intro`
- `TrustBar`
- `ServicesPreview`
- `ValueProps`
- `Testimonials`
- `FAQ`
- `ContactCTA`

Su objetivo es condensar la propuesta de valor y llevar al usuario hacia exploracion de servicios o contacto.

### 5.2 Quienes somos

La ruta `/quienes-somos` profundiza en la narrativa de marca.

Bloques:

- `AboutHero`
- `Story`
- `Principles`
- `Capabilities`
- `FAQ`
- `AboutCTA`

La pagina mezcla branding, confianza y contexto operativo.

### 5.3 Servicios

La ruta `/servicios` describe la oferta comercial.

Bloques:

- `ServicesHero`
- `ServicesGrid`
- `Process`
- `QualityAndSafety`
- `Industries`
- `Testimonials`
- `FAQ`
- `ServicesCta`

La idea es mover al usuario desde descubrimiento hacia una cotizacion, reforzando calidad, proceso y aplicabilidad industrial/comercial.

### 5.4 Blog

La ruta `/blog` consume publicaciones desde Sanity mediante un `loader`.

Comportamiento:

- consulta posts con `getPosts()`;
- ordena por fecha de publicacion descendente desde Sanity;
- muestra una grilla con articulo destacado;
- usa imagen principal si existe;
- renderiza estado vacio cuando no hay articulos.

### 5.5 Detalle de articulo

La ruta `/blog/:slug`:

- obtiene un articulo individual con `getPost(slug)`;
- responde 404 si el slug no existe;
- genera metadatos tipo `article`;
- genera JSON-LD `BlogPosting`;
- renderiza el cuerpo con `@portabletext/react`;
- soporta imagenes embebidas, encabezados, listas, citas y links externos.

### 5.6 Contacto

La ruta `/contacto` es una pagina transaccional. Su importancia tecnica es mayor porque combina UI, validacion y backend.

Bloques:

- `ContactHero`
- `ContactInfo`
- `ContactForm`

Flujo:

1. El usuario llena el formulario.
2. El cliente valida formato basico antes de enviar.
3. `fetcher.Form` hace POST a la misma ruta.
4. La `action` server-side vuelve a validar.
5. Se aplica honeypot y rate limit.
6. Se envia un correo via API de Resend.
7. La UI muestra estado de exito o error.

### 5.7 Paginas legales y 404

Las rutas `/aviso-de-privacidad`, `/terminos-y-condiciones` y la captura `*` existen, pero hoy muestran componentes placeholder.

Esto es importante para documentacion y mantenimiento:

- la navegacion y el footer ya apuntan a estas paginas;
- el SEO ya esta configurado para ellas;
- el contenido legal definitivo aun no esta implementado;
- la vista 404 aun no esta refinada.

## 6. SEO y discoverability

El proyecto dedica una parte clara de su arquitectura a SEO.

### 6.1 Metadatos

`app/lib/seo.ts` centraliza la construccion de metadata:

- `title`
- `description`
- `keywords`
- `canonical`
- `robots`
- Open Graph
- Twitter Cards
- metadatos de `article` cuando aplica

Cada ruta importante llama `buildSeoMeta(...)` con su propio contexto.

### 6.2 Datos estructurados

Se generan tres tipos de schema:

- `LocalBusiness` para GlassPro
- `WebSite` para el sitio
- `BlogPosting` para entradas individuales del blog

El schema de negocio incluye:

- nombre comercial;
- URL base;
- logo;
- email;
- telefono;
- direccion en Leon, Guanajuato;
- horario;
- cobertura en Mexico.

### 6.3 Assets SEO

En `public/` existen:

- `robots.txt`
- `sitemap.xml`
- imagenes OG por seccion
- favicon
- logo SVG

La URL publica del sitio se controla con `VITE_SITE_URL`, usada para construir canonicals y URLs absolutas.

## 7. Integracion con Sanity

El blog depende de Sanity como fuente de contenido.

### 7.1 Implementacion actual

El archivo `app/lib/sanity.ts`:

- crea el cliente;
- define el tipo `Post`;
- expone `getPosts()` para listados;
- expone `getPost(slug)` para detalle;
- expone `urlFor(...)` para construir URLs de imagen.

### 7.2 Campos consumidos

El frontend espera este modelo editorial:

- `_id`
- `title`
- `slug.current`
- `excerpt`
- `mainImage`
- `author`
- `publishedAt`
- `category`
- `body`
- `tags`

### 7.3 Observacion importante

Aunque existe `.env.example` con `SANITY_PROJECT_ID` y `SANITY_DATASET`, la implementacion actual no lee esas variables: `projectId` y `dataset` estan hardcodeados en `app/lib/sanity.ts`.

Eso implica:

- el frontend ya esta acoplado al proyecto Sanity `0bnpr7m2`;
- el dataset actual es `production`;
- mover a otro proyecto/dataset requiere editar codigo, no solo variables de entorno.

## 8. Formulario de contacto y backend

El formulario de contacto esta resuelto dentro del propio frontend SSR, sin backend separado.

### 8.1 Campos reales del formulario

- `name`
- `email`
- `phone`
- `company`
- `service`
- `message`
- `website` como honeypot anti-spam

### 8.2 Validacion

Se valida tanto en cliente como en servidor:

- nombre obligatorio;
- email obligatorio con regex;
- telefono opcional pero con formato restringido;
- longitudes maximas por campo;
- mensaje obligatorio.

### 8.3 Medidas anti abuso

La `action` de `contacto.tsx` implementa:

- honeypot;
- rate limiting en memoria;
- sanitizacion de texto;
- escape HTML en el correo renderizado.

El rate limit actual es:

- ventana de 60 segundos;
- maximo de 5 solicitudes por IP.

### 8.4 Envio de correo

El envio se hace con un `fetch` directo a `https://api.resend.com/emails`.

Puntos clave:

- la API key nunca se expone al navegador;
- el correo sale desde el servidor;
- se envian versiones `text` y `html`;
- `reply_to` usa el email del prospecto;
- el asunto se personaliza con el servicio seleccionado.

### 8.5 Limitacion actual del rate limit

El rate limit usa un `Map` en memoria del proceso Node. Eso significa:

- funciona en una sola instancia del servidor;
- no persiste entre reinicios;
- no se comparte entre replicas horizontales;
- en entornos serverless su efectividad puede variar.

Es suficiente como defensa basica, pero no equivale a un rate limiter distribuido.

## 9. Sistema visual y UX

### 9.1 Styling

El proyecto usa Tailwind CSS v4 y define tokens en `app/app.css`:

- `--color-brand-primary`
- `--color-brand-secondary`
- `--color-brand-deep`
- `--color-brand-text`

Tambien define utilidades como:

- `bg-brand-radial`
- `bg-brand-radial-bottom`
- `card-glass`
- `text-brand-gradient`

### 9.2 Navegacion

La `Navbar` incluye:

- header fijo;
- version desktop con efecto glass;
- menu mobile fullscreen;
- bloqueo de scroll cuando el menu esta abierto;
- cierre con `Escape`.

### 9.3 Animaciones

Las animaciones principales se resuelven con `framer-motion`:

- entradas por fade/slide;
- stagger entre tarjetas;
- transiciones de estados del formulario;
- composicion visual del blog y secciones hero.

### 9.4 Smooth scroll

`Lenis` se inicializa globalmente desde `root.tsx` para suavizar el desplazamiento vertical.

## 10. Build, desarrollo y despliegue

## 10.1 Scripts disponibles

Desde `package.json`:

```bash
npm install
npm run dev
npm run build
npm run start
npm run typecheck
```

Descripcion:

- `dev`: levanta el servidor de desarrollo con React Router + Vite.
- `build`: genera build cliente/servidor.
- `start`: sirve la build SSR compilada.
- `typecheck`: genera tipos de rutas y corre TypeScript.

### 10.2 Scripts declarados pero no presentes

En `package.json` tambien existen:

- `npm run images:avif`
- `npm run images:og`

Sin embargo, en el estado actual del repositorio no existe la carpeta `scripts/` referenciada por esos comandos. Si se intentan ejecutar tal como estan, fallaran hasta que esos scripts sean agregados al proyecto.

### 10.3 Desarrollo local

```bash
cd frontend
npm install
npm run dev
```

Por defecto, el entorno de desarrollo de Vite/React Router se sirve en `http://localhost:5173`.

### 10.4 Produccion

```bash
cd frontend
npm run build
npm run start
```

La build resultante usa el servidor de React Router:

```bash
react-router-serve ./build/server/index.js
```

### 10.5 Docker

El `Dockerfile` usa multi-stage build:

1. instala dependencias de desarrollo;
2. instala dependencias de produccion;
3. compila la app;
4. copia solo lo necesario a la imagen final.

Esto reduce peso final y mantiene la imagen enfocada al runtime.

## 11. Variables de entorno

El archivo `.env.example` documenta estas variables:

```env
SANITY_PROJECT_ID=0bnpr7m2
SANITY_DATASET=production
VITE_SITE_URL=https://www.glass-pro.mx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FORM_TO_EMAIL=contacto@glass-pro.mx
CONTACT_FORM_FROM_EMAIL=GlassPro Contacto <noreply@glass-pro.mx>
```

### 11.1 Variables efectivamente usadas en runtime

Hoy el codigo usa de forma efectiva:

- `VITE_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_FORM_TO_EMAIL`
- `CONTACT_FORM_FROM_EMAIL`

### 11.2 Variables documentadas pero no conectadas

Hoy no se consumen desde `process.env` o `import.meta.env`:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`

Estan documentadas, pero la integracion actual de Sanity sigue fija en codigo.

## 12. Estado actual y observaciones tecnicas

Este README no solo describe la intencion del proyecto; tambien registra su estado real actual.

### 12.1 Implementado y operativo

- landing principal;
- pagina de empresa;
- pagina de servicios;
- blog con Sanity;
- detalle de articulos con Portable Text;
- formulario de contacto con envio server-side;
- metadatos SEO y datos estructurados;
- assets publicos de indexacion.

### 12.2 Implementado pero aun incompleto

- aviso de privacidad: placeholder;
- terminos y condiciones: placeholder;
- 404: placeholder.

### 12.3 Codigo preparado para expansion

Existe un conjunto de componentes en `app/components/portfolio/`, pero en este estado del proyecto no hay ninguna ruta publica que los monte. Eso sugiere una seccion futura de portafolio/proyectos aun no conectada al router.

## 13. Riesgos y puntos de mantenimiento

Los principales puntos a vigilar son:

- contenido legal aun no definitivo;
- 404 sin version final;
- configuracion de Sanity acoplada en codigo;
- rate limiting en memoria no distribuido;
- scripts de imagen declarados pero faltantes;
- ausencia de una bateria visible de pruebas automatizadas en este frontend.

## 14. Resumen ejecutivo

GlassPro Frontend es un sitio corporativo SSR enfocado en captacion comercial y posicionamiento organico. Tecnologicamente combina React Router, Vite, Tailwind, Framer Motion, Sanity y Resend. Su arquitectura esta bien orientada a marketing, SEO y contenido, con una base suficientemente solida para operar en produccion y crecer hacia nuevas secciones como portafolio, siempre que se completen los placeholders legales, se desacople la configuracion de Sanity y se fortalezcan los mecanismos operativos alrededor del formulario.
