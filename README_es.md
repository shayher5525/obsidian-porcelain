# Porcelain

[English](README.md) · [中文](README_zh.md) · **Español** · [日本語](README_ja.md) · [한국어](README_ko.md) · [Français](README_fr.md) · [Italiano](README_it.md)

Un tema de Obsidian de porcelana blanca — superficies translúcidas, acentos azules, controles planos y separadores que se desvanecen en ambos extremos.

Escrito desde cero sobre las variables CSS propias de Obsidian. No es un fork y no contiene código de temas de terceros.

## Reglas de diseño

El tema sigue cinco reglas, y cada declaración en `theme.css` deriva de una de ellas:

1. **Las superficies son translúcidas y comparten un mismo tinte.** Los paneles no son tarjetas opacas. El cristal es una capa única, fija y vacía — poner `backdrop-filter` en un contenedor que aloja la interfaz hace que cada redibujo de un hijo invalide toda la capa filtrada, así que pasar el cursor por una lista de archivos cuesta un recálculo completo del desenfoque de la ventana.
2. **Nada está en relieve.** La profundidad viene de un solo contorno de 1 px. Sin resaltados interiores apilados, bordes interiores oscuros ni sombras proyectadas.
3. **Los separadores se desvanecen en ambos extremos.** Un borde abarca exactamente su elemento, por lo que los contenedores hermanos con distinto padding producen líneas que empiezan y terminan en desplazamientos distintos. Un degradado con extremos transparentes no tiene ningún punto final que desalinear.
4. **Los bloques de color llevan un resplandor fuera de eje.** Tres degradados radiales con distintos focos, tamaños y caídas — ninguna dirección lineal se percibe.
5. **Los cambios de estado alteran solo el color.** Nunca el padding, el grosor del borde o la posición, así que nada se desplaza bajo el cursor.

## Instalación

1. Descarga `manifest.json` y `theme.css`.
2. Pon ambos en `<vault>/.obsidian/themes/Porcelain/`.
3. *Ajustes → Apariencia → Temas* → **Porcelain**.

### Recomendado

- *Apariencia → Ventana translúcida*: **activado**. Las superficies son translúcidas por diseño; desactivado, se renderizan como color plano.

## Personalización

Los tokens se declaran al principio de `theme.css`, bajo `.theme-light` / `.theme-dark` y `body`. Los que vale la pena conocer:

| Variable | Controla |
| --- | --- |
| `--pc-tint` / `--pc-veil` | Color base de la superficie (triplete RGB) y cobertura |
| `--pc-sidebar-tint` / `--pc-sidebar-veil` | Cuánto se separan las barras laterales del plano del contenido |
| `--pc-line` | Color de separadores y contornos |
| `--pc-blue` / `--pc-orange` | Rellenos de selección y hover |
| `--pc-bloom-light` / `--pc-bloom-dark` | Intensidad del degradado de resplandor en bloques de color |
| `--pc-fade-in` / `--pc-fade-out` | Dónde empiezan y dejan de desvanecerse los separadores |
| `--pc-popup-bg` / `--pc-popup-blur` | Cristal de menús, modales y ajustes |

Reemplázalos en un fragmento CSS en lugar de editar `theme.css`, para que las actualizaciones no sobrescriban tus cambios.

## Compatibilidad con plugins

- **Notebook Navigator** — los estados de selección y hover, los botones de acción rápida y el diseño del encabezado están alineados con el tema.

## Licencia

GPL-3.0. Ver [LICENSE](LICENSE).

Puedes usarlo, modificarlo y redistribuirlo, incluso con fines comerciales. Si distribuyes una versión modificada, debe permanecer bajo GPL-3.0, incluir su código fuente y declarar que fue modificada.
