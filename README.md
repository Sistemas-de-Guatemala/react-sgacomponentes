# react-sgacomponentes
Está librería es un proyecto que tiene como objetivo crear una librería de componentes para el proyecto de sdg.

## Instalación
  ### npm
  ```bash
  npm install react-sgacomponentes
  ```
  ### yarn
  ```bash
  yarn add react-sgacomponentes
  ```
  ### yarn global
  ```bash
  yarn global add react-sgacomponentes
  ```
  ### npm-global
  ```bash
  npm install -g react-sgacomponentes
  ```
## Uso
  ### Importar
  ```js
  import { ABoton } from 'react-sgacomponentes';
  ```
  ### Usar
  ```js
  <ABoton>Hola</ABoton>
  ```

## Dependencias Desarrollo

| Dependencia                                                                               | Motivo                                                                                |
| -- | -- |
| [uuid](https://www.npmjs.com/package/uuid)                                                | Se usa para controlar los ids de los componentes                                      |
| [@types/uuid](https://www.npmjs.com/package/@types/uuid)                                  | Se usa para que uuid reconozca sus tipos en typescript                                |
| [postcss](https://www.npmjs.com/package/postcss)                                          | Se usa para que postcss reconozca css en typescript                                   |