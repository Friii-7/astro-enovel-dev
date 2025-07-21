# Enovel - Transformación Digital

Sitio web moderno para Enovel, especializado en transformación digital con Inteligencia Artificial, Microsoft 365, SharePoint y Acronis.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Componentes Modulares**: Arquitectura basada en componentes de Astro
- **Animaciones Suaves**: Contadores animados y efectos hover
- **Formulario de Contacto**: Funcional y listo para integrar
- **Navegación Intuitiva**: Menú hamburguesa para móviles
- **SEO Optimizado**: Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.astro    # Barra de navegación
│   ├── Hero.astro      # Sección principal
│   ├── Metrics.astro   # Estadísticas con contadores
│   ├── Productivity.astro # Sección de IA y ciberprotección
│   ├── Clients.astro   # Logos de clientes
│   ├── Contact.astro   # Formulario de contacto
│   └── Footer.astro    # Pie de página
├── layouts/
│   └── Layout.astro    # Layout principal con estilos globales
└── pages/
    └── index.astro     # Página principal
```

## 🛠️ Instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Agregar imágenes**:
   Coloca las siguientes imágenes en `public/images/`:
   - `02-logo-enovel-15.png` - Logo principal
   - `imageenovel1.png` - Imagen hero
   - `Group 1.png` - Imagen de productividad
   - `image_11.png` a `image_17.png` - Logos de clientes
   - `image18.png` - Logo adicional
   - `favicon-mineral.png` - Logo Mineral
   - `Dyna.png` - Logo Dyna
   - `sanVicente.png` - Logo San Vicente
   - `araujoIbarra.png` - Logo Araujo Ibarra

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 🎨 Personalización

### Colores
Los colores principales están definidos como variables CSS en `src/layouts/Layout.astro`:

```css
:root {
    --primary-color: #0078d4;    /* Azul Microsoft */
    --secondary-color: #106ebe;  /* Azul secundario */
    --accent-color: #00a1f1;     /* Azul acento */
    --text-primary: #323130;     /* Texto principal */
    --text-secondary: #605e5c;   /* Texto secundario */
}
```

### Tipografía
El proyecto usa la fuente Inter de Google Fonts, optimizada para legibilidad.

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Funcionalidades

### Navegación
- Menú hamburguesa para móviles
- Navegación suave entre secciones
- Cierre automático del menú al hacer scroll

### Contadores Animados
- Animación automática al hacer scroll
- Configurables en el componente Metrics

### Formulario de Contacto
- Validación HTML5
- Preparado para integración con backend
- Mensaje de confirmación

## 🚀 Despliegue

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `dist`

### Vercel
1. Conecta tu repositorio a Vercel
2. El framework se detectará automáticamente
3. Despliegue automático en cada push

## 📞 Contacto

Para soporte técnico o consultas sobre el proyecto:
- Email: info@enovel.com.co
- Teléfono: 300 392 7909

## 📄 Licencia

© 2025 Enovel - Todos los derechos reservados
