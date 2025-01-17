### **Para JavaScript**
| Extensión                | Descripción                                                                                   | Enlace de Instalación                                                                |
|--------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| **ESLint**               | Detecta y corrige errores en el código según las reglas configuradas.                        | [Instalar](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |
| **Prettier - Code Formatter** | Formatea automáticamente tu código para mantener consistencia.                            | [Instalar](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |
| **Path IntelliSense**    | Autocompleta rutas de archivos y módulos en tu proyecto.                                     | [Instalar](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) |
| **JavaScript (ES6) Code Snippets** | Proporciona atajos para escribir rápidamente código moderno de JavaScript.            | [Instalar](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) |
| **Quokka.js**            | Evalúa tu código JavaScript en tiempo real directamente en el editor.                        | [Instalar](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) |

---

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.suggest.autoImports": true,
  "javascript.updateImportsOnFileMove.enabled": "always"
}

```
---
# Confi ESLint
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```
