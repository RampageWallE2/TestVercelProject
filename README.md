# Portafolio Angular multipágina

Portafolio profesional con las rutas:

- `/` — Inicio
- `/perfil` — Carrera y estudios
- `/tecnologias` — Tecnologías con iconos
- `/proyectos` — Proyectos actuales y futuros
- `/contacto` — Datos de contacto

## Crear el proyecto base

```bash
ng new portafolio-piero --style=scss --routing --skip-tests
cd portafolio-piero
```

Copia las carpetas `src` y `public` de este paquete dentro del proyecto y acepta reemplazar los archivos.

Después ejecuta:

```bash
npm start
```

Para comprobar la compilación de producción:

```bash
npm run build
```

## Personalizar todos tus datos

Edita únicamente:

```text
src/app/core/data/portfolio.data.ts
```

Ahí puedes modificar:

- Nombre y presentación.
- Correo, teléfono, GitHub y LinkedIn.
- Carrera y estudios.
- Tecnologías.
- Proyectos actuales y futuros.
- Estado de cada proyecto.

Los enlaces de correo, teléfono y redes sociales son ejemplos porque esos datos no fueron proporcionados.

El archivo `vercel.json` incluye una regla de reescritura para conservar las rutas de Angular al recargar páginas como `/perfil` o `/proyectos`.

## Iconos

Los iconos se cargan como SVG desde el CDN público de Devicon. No es necesario instalar librerías adicionales.

## Despliegue en Vercel

Configuración normal:

```text
Build Command: npm run build
Output Directory: dist/portafolio-piero/browser
```

Vercel suele detectar Angular automáticamente. Si el nombre del proyecto cambia, revisa la carpeta generada dentro de `dist`.
