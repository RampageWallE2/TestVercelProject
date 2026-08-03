# Landing Angular — En construcción

## 1. Crear el proyecto base

```bash
ng new landing-en-construccion --style=scss --routing=false --skip-tests
```

Entra en el proyecto:

```bash
cd landing-en-construccion
```

## 2. Reemplazar los archivos

Copia la carpeta `src` de este paquete dentro del proyecto recién creado y acepta reemplazar los archivos existentes.

## 3. Ejecutar

```bash
ng serve -o
```

La aplicación se abrirá normalmente en:

```text
http://localhost:4200
```

## Personalización rápida

En `src/app/app.ts` cambia:

- `brandName`: nombre de tu empresa o proyecto.
- `messages`: mensajes dinámicos.
- `contactEmail`: correo de contacto.
- `estimatedLaunch`: texto de lanzamiento.

En `src/app/app.scss` puedes modificar las variables de color ubicadas al inicio del archivo.
