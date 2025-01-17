##Configuracion de CSS

<p>CSS va ser el leguaje de estilado que utilice en mi proyectos y por ello usar una confugracion documentare en este MD</p>

- Exteciones de VS para CSS
- CSS Peek [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

- [Intellisense CSS](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
### **Para CSS**
| Extensión                | Descripción                                                                                   | Enlace de Instalación                                                                 |
|--------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **CSS Peek**             | Navega entre tus archivos CSS y las clases/ID en HTML o JS.                                   | [Instalar](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) |
| **PostCSS Language Support** | Añade soporte avanzado para PostCSS.                                                       | [Instalar](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)         |
| **IntelliSense for CSS Class Names in HTML** | Autocompleta clases CSS en tu HTML.                                                | [Instalar](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) |
| **Color Highlight**      | Resalta colores directamente en el editor.                                                   | [Instalar](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) |
| **Live Sass Compiler**   | Compila automáticamente archivos SCSS/SASS en tiempo real.                                   | [Instalar](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)     |
---

## **Configuraciones del Editor**

### **Configuración para CSS**
Agrega las siguientes configuraciones al archivo `settings.json` de VS Code:

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue": "html",
    "html": "html",
    "css": "css"
  },
  "editor.formatOnSave": true,
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },