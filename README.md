# 🎮 Juego 2048 Web App

Una implementación moderna del clásico juego 2048 construida con React, TypeScript y Tailwind CSS. Incluye animaciones fluidas, gestos táctiles y puntuaciones persistentes.

## 🚀 [Jugar en Vivo](https://MarcoS9309.github.io/2048-game-web-app/)

## ✨ Características

- 🎯 **Juego 2048 completo** con cuadrícula 4x4
- 📱 **Diseño móvil-primero** con soporte para gestos táctiles
- ⌨️ **Controles de teclado** (teclas de flecha)
- 🏆 **Puntuación máxima persistente**
- 🎨 **Interfaz moderna** con animaciones fluidas
- 🔄 **Gestión de estados del juego** (condiciones de victoria/derrota)
- 📐 **Diseño responsivo** para todas las pantallas
- 🎭 **Temas hermosos** con esquema de color terracota

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Estilos**: Tailwind CSS v4
- **Herramienta de Build**: Vite
- **Componentes UI**: Primitivos de Radix UI
- **Iconos**: Lucide React
- **Notificaciones**: Sonner toast
- **Despliegue**: GitHub Pages

## 🎮 Cómo Jugar

1. Usa las **teclas de flecha** (escritorio) o **gestos de deslizar** (móvil) para mover las fichas
2. Cuando dos fichas con el mismo número se tocan, se **combinan en una**
3. **Objetivo**: Crear una ficha con el número 2048
4. **Condición de victoria**: Alcanzar 2048 (¡pero puedes continuar jugando!)
5. **Condición de derrota**: No hay más movimientos disponibles

## 🏃‍♂️ Desarrollo Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Configuración
```bash
# Clonar el repositorio
git clone https://github.com/MarcoS9309/2048-game-web-app.git
cd 2048-game-web-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:5173
```

### Scripts Disponibles
```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa del build de producción
npm run lint     # Ejecutar ESLint
npm run deploy   # Desplegar a GitHub Pages
```

## 🚀 Despliegue

La aplicación se despliega automáticamente a GitHub Pages. Para desplegar tu propia versión:

1. Haz fork de este repositorio
2. Habilita GitHub Pages en la configuración del repositorio
3. Ejecuta `npm run deploy`

## 📱 Soporte Móvil

- **Gestos táctiles**: Deslizar arriba, abajo, izquierda, derecha
- **Diseño responsivo**: Optimizado para pantallas móviles
- **Amigable al tacto**: Objetivos táctiles grandes y animaciones fluidas

## 🎨 Características de Diseño

- **Esquema de colores personalizado**: Tonos cálidos de terracota
- **Animaciones fluidas**: Transiciones CSS para movimientos de fichas
- **Tipografía limpia**: Familia de fuentes Inter
- **Accesible**: Etiquetas ARIA y navegación por teclado
- **Variables de tema**: Personalización fácil con propiedades CSS personalizadas

## 🔧 Lógica del Juego

El motor del juego (`src/lib/game2048.ts`) maneja:
- Gestión del estado de la cuadrícula
- Lógica de movimiento y combinación de fichas
- Cálculo de puntuación
- Detección de condiciones de victoria/derrota
- Generación aleatoria de fichas

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── GameGrid.tsx        # Cuadrícula principal del juego
│   ├── GameHeader.tsx      # Pantalla de puntuación y controles
│   ├── GameTile.tsx        # Componente de ficha individual
│   ├── GameOverlay.tsx     # Superposiciones de victoria/derrota
│   ├── GameInstructions.tsx # Cómo jugar
│   └── ui/                 # Componentes UI reutilizables
├── hooks/
│   ├── useLocalStorage.ts  # Gestión de almacenamiento local
│   ├── useTouchGestures.ts # Manejo de gestos táctiles
│   └── use-mobile.ts       # Detección de móvil
├── lib/
│   ├── game2048.ts         # Lógica central del juego
│   └── utils.ts            # Funciones de utilidad
└── styles/
    ├── theme.css           # Propiedades CSS personalizadas
    └── index.css           # Estilos globales
```

## 🤝 Contribuyendo

1. Haz fork del repositorio
2. Crea una rama de característica (`git checkout -b feature/caracteristica-increible`)
3. Confirma tus cambios (`git commit -m 'Agregar característica increíble'`)
4. Empuja a la rama (`git push origin feature/caracteristica-increible`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Reconocimientos

- Juego 2048 original por [Gabriele Cirulli](https://github.com/gabrielecirulli/2048)
- Componentes UI impulsados por [Radix UI](https://www.radix-ui.com/)
- Estilos con [Tailwind CSS](https://tailwindcss.com/)
- **Construido con asistencia de IA** - Creado usando plantilla GitHub Spark mostrando el poder de IA + creatividad + innovación en el desarrollo web moderno

---

**¡Disfruta jugando 2048! 🎮**
