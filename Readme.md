# react-sdgacomponentes
Librería de componentes basados en react para proyecto de SDG

> :warning: **Este proyecto está en desarrollo por lo tanto no debe ser usado para algún proyecto**

## Comandos de uso
  Este comando empaqueta el proyecto
  ```bash
  yarn compilar-prod
  ```
  Este comando abre la documentación para una previsualización
  ```bash
  yarn storybook
  ```
  Este comando empaqueta la documentación para subir a un sitio
  ```bash
  yarn build-storybook
  ```

## Instalación
### npm
```bash
npm install react-sdgacomponentes
```

### yarn
```bash
yarn add react-sdgacomponentes
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

## Paquetes para desarrollo de la librería

| Paquete                                                                                               | Descripción                                                                               |
| -- | -- |
| [react](https://es.reactjs.org)                                                                       | React                                                                                     |
| [react-dom](https://es.reactjs.org/docs/dom-elements.html)                                            | React DOM                                                                                 |
| [typescript](https://www.typescriptlang.org/)                                                         | TypeScript                                                                                |
| [storybook](https://storybook.js.org/)                                                                | Storybook -> Documenta los componentes visualmente                                        |
| [rollup](https://rollupjs.org/)                                                                       | Rollup -> Compila los componentes                                                         |
| [rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)                  | Rollup-plugin-typescript2 -> Compila los componentes con TypeScript                       |
| [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)                      | @rollup/plugin-commonjs -> Compila los componentes con CommonJS                           |
| [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)              | @rollup/plugin-node-resolve -> Resuelve los imports de los componentes con NodeJS         |
| [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external)    | Rollup-plugin-peer-deps-external -> Resuelve los imports de los componentes con NodeJS    |
| [rollup-plugin-postcss](https://www.npmjs.com/package/rollup-plugin-postcss)                          | Rollup-plugin-postcss -> Compila los componentes con PostCSS                              |
| [postcss](https://www.npmjs.com/package/postcss)                                                      | PostCSS                                                                                   |
| [uuid](https://www.npmjs.com/package/uuid)                                                            | Crea un hash para los acomponentes                                                        |
| [@types/uuid](https://www.npmjs.com/package/@types/uuid)                                              | @types/uuid -> Tipos de uuid                                                              |