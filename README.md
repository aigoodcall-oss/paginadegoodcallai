# Good Call AI — Sitio Web

Sitio web oficial de Good Call AI. Automatización inteligente de WhatsApp.

## Estructura

```
goodcall-site/
├── index.html                  ← Página principal
├── css/
│   └── styles.css              ← Estilos (tema claro/oscuro)
├── js/
│   └── main.js                 ← JavaScript (animaciones, toggle, scroll)
├── pages/
│   ├── servicios.html          ← Servicios
│   ├── precios.html            ← Planes y precios
│   ├── nosotros.html           ← Sobre nosotros
│   ├── contacto.html           ← Formulario de contacto
│   ├── casos-exito.html        ← Portafolio / Casos de éxito
│   ├── blog.html               ← Blog / Recursos
│   └── faq.html                ← Preguntas frecuentes
├── legal/
│   ├── politica-privacidad.html
│   ├── terminos-condiciones.html
│   └── politica-cookies.html
├── .nojekyll
└── README.md
```

## Despliegue con Cloudflare Pages

1. Subir repo a GitHub
2. En Cloudflare Dashboard → Pages → Create a project
3. Conectar el repositorio de GitHub
4. Build settings: Framework = None, Build command = (vacío), Output directory = `/`
5. Deploy

## Precios

| Plan | Precio/mes | Ahorro |
|------|-----------|--------|
| Mensual | $179 | — |
| Semestral | $172 | $7/mes ($42 total) |
| Anual | $165 | $14/mes ($168 total) |
