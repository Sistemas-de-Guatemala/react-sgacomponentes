# react-sdgacomponentes
Librería de componentes basados en react para proyecto de SDG

## Documentación
[Documentación de react-sdgacomponentes (Click aquí)](https://allam05.github.io/react-sgacomponentes/)

## Invitame a un café
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?hosted_button_id=XPUUVFH8E2BE4)

## Motivación
Este tipo de componentes se inicia con la idea de crear una librería 100% en español, con la finalidad de que cualquier persona "latinoamericana" pueda utilizarlos sin tener que leer la documentación en inglés y tratar de entender que hacer con los componentes mientras escriben código, al mismo tiempo trabajar con componentes que no necesitan mucha configuración y menos código a la hora de implementar funciones complejas como por ejemplo filtrar, ordenar, generar hojas de cálculo, etc.

> :warning: **Atención**: La versión actual necesita afinarse más, ya que no soy un expeto en frontend, pero agradecería cualquier sugerencia para hacer de este proyecto una librería potente para latinoamerica.

## Instalación
### npm
```bash
npm install react-sdgacomponentes
```

### yarn
```bash
yarn add react-sdgacomponentes
```

## Comandos de uso
  Este comando empaqueta el proyecto
  ```bash
  yarn compilar
  ```
  Este comando abre la documentación para una previsualización
  ```bash
  yarn des
  ```
  Este comando empaqueta la documentación para subir a un sitio
  ```bash
  yarn doc
  ```

## Uso
### Componentes
```jsx
import { ABoton } from 'react-sdgacomponentes';

const App = () => (
  <ABoton>
    Hola mundo
  </ABoton>
);
```

## Dependencias del proyecto

| Dependencia                                                 | Link Documentación                                                                  | Propósito                                                                                               | Tipo dependencia          |
|:----|:----|:----|:----|
| react                                                       | https://es.reactjs.org/docs/getting-started.html                                    | Biblioteca de componentes para construir interfaces                                                     | Dependencia compartida    |
| react-dom                                                   | https://es.reactjs.org/docs/react-dom.html                                          | Renderiza componentes React en un navegador                                                             | Dependencia compartida    |
| prop-types                                                  | https://www.npmjs.com/package/prop-types                                            | Validación de props para componentes React                                                              | Producción                |
| typescript                                                  | https://www.typescriptlang.org/docs/                                                | Lenguaje de programación tipado                                                                         | Desarrollo                |
| @babel/core                                                 | https://babeljs.io/docs/en/babel-core                                               | Transpilador de código JavaScript                                                                       | Desarrollo                |
| @babel/preset-env                                           | https://babeljs.io/docs/en/babel-preset-env                                         | Configuración de Babel para la última versión de JS                                                     | Desarrollo                |
| @babel/preset-react                                         | https://babeljs.io/docs/en/babel-preset-react                                       | Configuración de Babel para React                                                                       | Desarrollo                |
| @babel/preset-typescript                                    | https://babeljs.io/docs/en/babel-preset-typescript                                  | Configuración de Babel para TypeScript                                                                  | Desarrollo                |
| rollup                                                      | https://rollupjs.org/guide/en/                                                      | Empaquetador de módulos JavaScript                                                                      | Desarrollo                |
| @rollup/plugin-commonjs                                     | https://github.com/rollup/plugins/tree/master/packages/commonjs                     | Convertidor de módulos CommonJS a ES6                                                                   | Desarrollo                |
| @rollup/plugin-node-resolve                                 | https://github.com/rollup/plugins/tree/master/packages/node-resolve                 | Resuelve módulos npm en Rollup                                                                          | Desarrollo                |
| @rollup/plugin-typescript                                   | https://github.com/rollup/plugins/tree/master/packages/typescript                   | Compila TypeScript con Rollup                                                                           | Desarrollo                |
| @storybook/addon-essentials                                 | https://storybook.js.org/docs/react/essentials/introduction                         | Addon para Storybook que incluye varios addons esenciales                                               | Desarrollo                |
| @storybook/addon-interactions                               | https://storybook.js.org/docs/react/essentials/actions                              | Addon para Storybook que permite crear interacciones con componentes                                    | Desarrollo                |
| @storybook/addon-links                                      | https://storybook.js.org/docs/react/essentials/navigation                           | Addon para Storybook que permite crear links entre componentes                                          | Desarrollo                |
| @storybook/blocks                                           | https://storybook.js.org/docs/react/api/blocks                                      | Componentes predefinidos para Storybook                                                                 | Desarrollo                |
| @storybook/react                                            | https://storybook.js.org/docs/react/get-started/introduction                        | Herramienta de desarrollo para componentes React                                                        | Desarrollo                |
| @storybook/react-webpack5                                   | https://storybook.js.org/docs/react/configure/webpack5                              | Configuración para usar Webpack 5 con Storybook                                                         | Desarrollo                |
| @storybook/testing-library                                  | https://www.npmjs.com/package/@storybook/testing-library                            | Utilidades de testing para componentes Storybook                                                        | Desarrollo                |
| @types/react                                                | https://www.npmjs.com/package/@types/react                                          | Tipos de TypeScript para React                                                                          | Desarrollo                |
