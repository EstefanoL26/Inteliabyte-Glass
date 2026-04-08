# Inteliabyte — Sitio Corporativo Enterprise

Sitio web corporativo premium construido con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Framer Motion + Lucide React

## Secciones incluidas
1. Navbar glass sticky + responsive
2. Hero con canvas de partículas + dashboard animado
3. Propuesta de valor (8 cards glass)
4. Servicios (Infraestructura, Ciberseguridad, Soporte N1, Autoatención)
5. Productos (Taurus Next, Voice Bot IVR, Agente Negociador)
6. Demo interactivo con tabs por producto
7. Soluciones por industria
8. Métricas animadas con contadores
9. Por qué elegirnos + Testimonios + About
10. CTA Final + Formulario de contacto + FAQ + Footer
11. Chatbot flotante glass con respuestas IA

## Deploy en Vercel

```bash
npm install
vercel deploy
```

O desde vercel.com → Add New Project → sube esta carpeta → Deploy.

## Dev local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Personalización
- Colores: edita `--c-cyan` y `--c-violet` en `app/globals.css`
- Marca: busca `Inteliabyte` y reemplaza en todos los archivos
- Chatbot IA: edita `getResponse()` en `components/layout/Chatbot.tsx`
"# Inteliabyte-Glass" 
