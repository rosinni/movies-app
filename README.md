# RN Starter - Plantilla React Native Profesional

Plantilla base profesional para proyectos React Native con Expo + TypeScript. Diseñada para ser **neutral** y **reutilizable**, sin lógica de negocio incluida.

## 🎯 Objetivo

Proporcionar una arquitectura limpia y moderna lista para cualquier proyecto de bootcamp o producción. Los estudiantes pueden agregar features específicas en `src/features/` sin preocuparse por la configuración inicial.

## 🛠️ Stack Tecnológico

- **Expo SDK** (última versión)
- **TypeScript** (strict mode)
- **Expo Router** (navegación basada en archivos)
- **Zustand** (state management global)
- **AsyncStorage** (persistencia local)
- **ESLint + Prettier** (linting y formateo)

## 📦 Instalación

```bash
npm install
```

## 🚀 Cómo iniciar

```bash
# Iniciar el servidor de desarrollo
npm run start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en Web
npm run web
```

Abre la app en **Expo Go** o usa un emulador/simulador.

## 📂 Estructura del Proyecto

```
rn-starter/
├── src/
│   ├── app/                 # Rutas de la app (expo-router)
│   │   ├── _layout.tsx      # Layout principal
│   │   └── index.tsx        # Pantalla Home
│   ├── components/
│   │   └── ui/              # Componentes UI reutilizables
│   │       ├── Button.tsx
│   │       ├── Text.tsx
│   │       ├── Screen.tsx
│   │       └── Input.tsx
│   ├── hooks/               # Custom hooks
│   │   └── useColorScheme.ts
│   ├── lib/                 # Utilidades y configuración
│   │   ├── theme.ts         # Tokens de diseño (light/dark)
│   │   ├── storage.ts       # Helpers de AsyncStorage
│   │   └── logger.ts        # Logger para desarrollo
│   ├── services/            # Servicios externos (API, etc.)
│   │   └── api.client.placeholder.ts
│   ├── store/               # Estado global (Zustand)
│   │   └── app.store.ts     # Store de ejemplo
│   ├── styles/              # Estilos globales
│   │   └── globals.ts       # Spacing, typography, radius
│   └── features/            # 🎯 AGREGA TUS FEATURES AQUÍ
└── assets/                  # Imágenes, fuentes, etc.
```

## 🧩 Cómo agregar una nueva pantalla

Con **expo-router**, simplemente crea un archivo en `src/app/`:

```tsx
// src/app/profile.tsx
import React from 'react';
import Screen from '@/components/ui/Screen';
import Text from '@/components/ui/Text';

export default function Profile() {
  return (
    <Screen>
      <Text>Mi Perfil</Text>
    </Screen>
  );
}
```

La ruta será automáticamente `/profile`.

## 📐 Absolute Imports

Usa `@/*` para importar desde `src/`:

```tsx
import Button from '@/components/ui/Button';
import { storage } from '@/lib/storage';
import { useAppStore } from '@/store/app.store';
```

## 🎨 Theming

El sistema de temas está en `src/lib/theme.ts`:

```ts
theme.light; // { bg, text, muted, primary, border }
theme.dark; // { bg, text, muted, primary, border }
```

Usa `useColorScheme()` para detectar el modo del sistema.

## 💾 Persistencia Local

Helpers listos en `src/lib/storage.ts`:

```ts
await storage.set('key', value);
const value = await storage.get<Type>('key');
await storage.remove('key');
```

## 🗂️ Estado Global (Zustand)

Store de ejemplo en `src/store/app.store.ts`:

```ts
const ready = useAppStore((state) => state.ready);
const setReady = useAppStore((state) => state.setReady);
```

Crea tus propios stores para features específicas.

## ✅ Buenas Prácticas

1. **Estado global**: Crea stores específicos en `src/store/`
2. **Utilidades**: Agrega helpers en `src/lib/`
3. **Componentes UI**: Mantén componentes genéricos en `src/components/ui/`
4. **Features**: Organiza lógica de negocio en `src/features/[nombre-feature]/`
5. **Servicios**: Configuración de API en `src/services/`

## 🧹 Scripts Disponibles

```bash
npm run start     # Iniciar desarrollo
npm run lint      # Ejecutar ESLint
npm run format    # Formatear código con Prettier
```

## 📝 Notas

- Esta plantilla es **neutral** y no contiene lógica de negocio.
- No incluye React Query, Redux, ni kits de UI para mantenerla simple.
- Los estudiantes deben agregar sus features en `src/features/`.

---

**¡Listo para comenzar tu proyecto!** 🚀
