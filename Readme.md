# react-sdgacomponentes
Librería de componentes basados en react para proyecto de SDG

## Documentación
[Documentación de react-sdgacomponentes (Click aquí)](https://allam05.github.io/react-sgacomponentes/)

## Invitame a un café
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?hosted_button_id=XPUUVFH8E2BE4)

## Motivación
Este tipo de componentes se inicia con la idea de crear una librería 100% en español, con la finalidad de que cualquier persona "latinoamericana" pueda utilizarlos sin tener que leer la documentación en inglés y tratar de entender que hacer con los componentes mientras escriben código, al mismo tiempo trabajar con componentes que no necesitan mucha configuración y menos código a la hora de implementar funciones complejas como por ejemplo filtrar, ordenar, generar hojas de cálculo, etc.

> :warning: **Atención**: La versión actual necesita afinarse más, ya que no soy un expeto en frontend, pero agradecería cualquier sugerencia para hacer de este proyecto una librería potente para latinoamerica.

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

## Lista de componentes actualmente
| Componente                                                  | Descripción                                                             |
| -- | -- |
| ABoton                                                      | Componente de botón                                                     |
| ABotonOpciones                                              | Componente de botón con opciones                                        |
| AEtiqueta                                                   | Componente de etiqueta                                                  |
| ACajaTexto                                                  | Componente de caja de texto                                             |
| ACheckBox                                                   | Componente de checkbox                                                  |
| ADesplegable                                                | Componente de desplegable con buscador                                  |
| APaginador                                                  | Componente de paginador                                                 |
| APanel                                                      | Componente que levanta un modal                                         |
| APanelPestanas                                              | Componente contenedor de pestañas                                       |
| APanelPestana                                               | Componente de pestaña (Va dentro del contenedor de pestañas)            |
| ARadioBotones                                               | Componente de radio botones                                             |
| ASeccion                                                    | Componente que agrupa campos dibujando un borde y un titulo             |
| ATitulosPantallas                                           | Componente de titulos de pantallas                                      |
| ATablaDinamica                                              | Componente de tabla dinamica                                            |

## Lista de utilidades actualmente

 - GenerarExcelJSON: Genera un archivo excel con una estructura JSON
 - ArrayExcelAArrayObjetos: Convierte un array de excel a un array de objetos
 - TransformarATablaDinamicaAExcel : Convierte una tabla dinamica a una tabla excel
 - ImprimirObjetoHTML: Imprime un objeto en formato HTML

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
| [react-paginator](https://www.npmjs.com/package/react-paginator)                                      | React-paginator -> Paginador                                                              |
| [react-icons](https://www.npmjs.com/package/react-icons)                                              | Iconos                                                                                    |
| [xlsx](https://www.npmjs.com/package/xlsx)                                                            | Librería para la lectura de archivos excel                                                |
| [file-saver](https://www.npmjs.com/package/file-saver)                                                | Librería para la exportación de archivos                                                  |
| [@types/file-saver](https://www.npmjs.com/package/@types/file-saver)                                  | @types/file-saver -> Tipos de file-saver                                                  |
| [react-children-utilities](https://www.npmjs.com/package/react-children-utilities)                    | React-children-utilities -> Utilidades para los hijos de react                            |
| [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)                            | Sirve para hacer un minificado del código (ver archivo rollup.config.js)                  |
