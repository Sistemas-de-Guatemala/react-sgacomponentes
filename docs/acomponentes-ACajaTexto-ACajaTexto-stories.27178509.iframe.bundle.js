"use strict";(self.webpackChunkreact_sgacomponentes=self.webpackChunkreact_sgacomponentes||[]).push([[611],{"./src/acomponentes/ACajaTexto/ACajaTexto.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ACajaTextoVisualizacion:()=>ACajaTextoVisualizacion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/acomponentes/ACajaTexto/index.tsx"),react_icons_fi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"react-sgacomponentes/ACajaTexto",component:_index__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"]},ACajaTextoPlantilla=args=>{const[valorActual,fijarValorActual]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,valor:valorActual,cambioTexto:fijarValorActual})};ACajaTextoPlantilla.displayName="ACajaTextoPlantilla";const ACajaTextoVisualizacion=ACajaTextoPlantilla.bind({}),listado_opciones=Array();for(let i=0;i<101;i++)listado_opciones.push(`Opción ${i}`);ACajaTextoVisualizacion.args={titulo:"Titulo del ACajaTexto",placehodler:"Placeholder del ACajaTexto",iconoIzquierda:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.uOf,{size:20}),estilos:{width:"300px"},autoCompletado:listado_opciones},ACajaTextoVisualizacion.argTypes={cambioTexto:{action:"cambioTexto"},quitoFoco:{action:"quitoFoco"},quitoFocus:{action:"quitoFocus"}},ACajaTextoVisualizacion.parameters={...ACajaTextoVisualizacion.parameters,docs:{...ACajaTextoVisualizacion.parameters?.docs,source:{originalSource:'(args: any) => {\n  const [valorActual, fijarValorActual] = useState<string>("");\n  return <ACajaTexto {...args} valor={valorActual} cambioTexto={fijarValorActual} />;\n}',...ACajaTextoVisualizacion.parameters?.docs?.source}}};const __namedExportsOrder=["ACajaTextoVisualizacion"];try{ACajaTextoVisualizacion.displayName="ACajaTextoVisualizacion",ACajaTextoVisualizacion.__docgenInfo={description:"",displayName:"ACajaTextoVisualizacion",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/acomponentes/ACajaTexto/ACajaTexto.stories.tsx#ACajaTextoVisualizacion"]={docgenInfo:ACajaTextoVisualizacion.__docgenInfo,name:"ACajaTextoVisualizacion",path:"src/acomponentes/ACajaTexto/ACajaTexto.stories.tsx#ACajaTextoVisualizacion"})}catch(__react_docgen_typescript_loader_error){}},"./src/acomponentes/ACajaTexto/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>acomponentes_ACajaTexto});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=(__webpack_require__("./src/acomponentes/estilosgenerales.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ACajaTexto=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/acomponentes/ACajaTexto/ACajaTexto.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ACajaTexto.Z,options);ACajaTexto.Z&&ACajaTexto.Z.locals&&ACajaTexto.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TituloACajaTexto=props=>(0,jsx_runtime.jsx)("label",{className:`acajatexto-titulo ${props.className}`,style:props.estilos,htmlFor:props.para,children:props.children});TituloACajaTexto.displayName="TituloACajaTexto";const IconoACajaTextoIzquierda=props=>(0,jsx_runtime.jsx)("div",{className:`acajatexto-icono-izquierda ${props.className}`,style:props.estilos,children:props.children});IconoACajaTextoIzquierda.displayName="IconoACajaTextoIzquierda";const IconoACajaTextoDerecha=props=>(0,jsx_runtime.jsx)("div",{className:`acajatexto-icono-derecha ${props.className}`,style:props.estilos,children:props.children});IconoACajaTextoDerecha.displayName="IconoACajaTextoDerecha";const MaxCaracteresACajaTexto=props=>(0,jsx_runtime.jsxs)("div",{className:`acajatexto-max-caracteres ${props.className||""}`,style:props.estilos,children:["Carácteres ",props.caracteresActuales,"/",props.maxCaracteres]});MaxCaracteresACajaTexto.displayName="MaxCaracteresACajaTexto";const EtiquetaErrorACajaTexto=props=>(0,jsx_runtime.jsx)("div",{className:`acajatexto-error ${props.className||""}`,style:props.estilos,children:props.msjError});EtiquetaErrorACajaTexto.displayName="EtiquetaErrorACajaTexto";const acomponentes_ACajaTexto_ACajaTexto=react.forwardRef((function ACajaTextoInterno(props,ref){const uuid=(0,react.useId)(),txtRef=(0,react.useRef)(null),[lbdError,fijarLbdError]=(0,react.useState)("");(0,react.useImperativeHandle)(ref,(()=>({TipoAControl:()=>"ACajaTexto",Refuuid:()=>uuid,FijarMsjError:msj=>fijarLbdError(msj),focus:()=>{let habilitado=!0;void 0!==props.habilitado&&(habilitado=props.habilitado),habilitado&&(txtRef.current?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),txtRef.current?.focus())},foco:()=>{let habilitado=!0;void 0!==props.habilitado&&(habilitado=props.habilitado),habilitado&&(txtRef.current?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),txtRef.current?.focus())}})));return(0,jsx_runtime.jsxs)("div",{className:`acajatexto ${props.classNameContenedor||""} ${props.hasOwnProperty("visible")&&props.visible?"no-visible":""}`,style:props.estilosContenedor,children:[props.titulo&&(0,jsx_runtime.jsx)(TituloACajaTexto,{para:uuid,estilos:props.estilosTitulo,className:props.classNameTitulo,children:props.titulo}),(0,jsx_runtime.jsxs)("div",{style:{width:"100%",position:"relative",display:"flex",flexDirection:"column"},children:[props.iconoIzquierda&&(0,jsx_runtime.jsx)(IconoACajaTextoIzquierda,{estilos:props.estilosIconoIzquierda,className:props.classNameIconoIzquierda,children:props.iconoIzquierda}),(0,react.createElement)("input",{...props,key:uuid,ref:txtRef,id:uuid,name:uuid,value:props.valor,onChange:e=>{e.preventDefault(),props.cambioTexto(e.target.value)},style:props.estilosACajaTexto,onBlur:e=>{e.preventDefault(),props.quitoFoco&&props.quitoFoco(),props.quitoFocus&&props.quitoFocus()},className:`acajatexto-input ${props.classNameACajaTexto||""} ${props.hasOwnProperty("msjError")&&""!==props.msjError||""!==lbdError?"acajatexto-conerror":""} ${props.hasOwnProperty("iconoIzquierda")?"acajatexto-icono-izquierda-visible":""} ${props.hasOwnProperty("iconoDerecha")?"acajatexto-icono-derecha-visible":""}`,placeholder:props.placeholder,disabled:!(!props.hasOwnProperty("habilitado")||props.habilitado),tabIndex:props.tabIndice,required:props.requerido,maxLength:props.maxCarateres,list:null!=props.autoCompletado?`${uuid}-autocompletadoacajatexto`:void 0,type:props.tipoEntrada||"text",autoComplete:"off",autoFocus:props.autoFoco,onKeyDown:e=>(e=>{props.eventoTeclaPresionada&&props.eventoTeclaPresionada(e.key)})(e)}),props.iconoDerecha&&(0,jsx_runtime.jsx)(IconoACajaTextoDerecha,{estilos:props.estilosIconoDerecha,className:props.classNameIconoDerecha,children:props.iconoDerecha})]}),(props.hasOwnProperty("msjError")&&""!==props.msjError||""!==lbdError||props.maxCarateres&&(!props.hasOwnProperty("mostrarMaxCaracteres")||props.mostrarMaxCaracteres))&&(0,jsx_runtime.jsxs)("div",{className:"acajatexto-contenedor-pie",children:[(props.hasOwnProperty("msjError")&&""!==props.msjError||""!==lbdError)&&(0,jsx_runtime.jsx)(EtiquetaErrorACajaTexto,{className:props.classNameError,estilos:props.estilosError,msjError:props.msjError}),(0,jsx_runtime.jsx)("div",{}),props.maxCarateres&&(!props.hasOwnProperty("mostrarMaxCaracteres")||props.mostrarMaxCaracteres)&&(0,jsx_runtime.jsx)(MaxCaracteresACajaTexto,{caracteresActuales:props.valor.length,maxCaracteres:props.maxCarateres||0})]}),props.autoCompletado&&props.autoCompletado.length>0&&(0,jsx_runtime.jsx)("datalist",{id:`${uuid}-autocompletadoacajatexto`,children:props.autoCompletado.map(((item,indice)=>(0,jsx_runtime.jsx)("option",{value:item},`${uuid}-autocompletadoacajatexto-${indice}`)))})]})})),acomponentes_ACajaTexto=acomponentes_ACajaTexto_ACajaTexto;try{acomponentes_ACajaTexto_ACajaTexto.displayName="ACajaTexto",acomponentes_ACajaTexto_ACajaTexto.__docgenInfo={description:"Componente que representa una caja de texto con un titulo, iconos, validaciones y con diseño preestablecido para el proyecto",displayName:"ACajaTexto",props:{classNameContenedor:{defaultValue:null,description:"Clase CSS del contenedor del ACajaTexto",name:"classNameContenedor",required:!1,type:{name:"string"}},estilosContenedor:{defaultValue:null,description:"Estilos del contenedor del acajatexto",name:"estilosContenedor",required:!1,type:{name:"CSSProperties"}},titulo:{defaultValue:null,description:"Titulo del ACajaTexto, si existe se renderiza, si no solo muestra el input",name:"titulo",required:!1,type:{name:"string | Element"}},classNameTitulo:{defaultValue:null,description:"Clase CSS del titulo del ACajaTexto",name:"classNameTitulo",required:!1,type:{name:"string"}},estilosTitulo:{defaultValue:null,description:"Estilos del titulo del ACajaTexto",name:"estilosTitulo",required:!1,type:{name:"CSSProperties"}},valor:{defaultValue:null,description:"Valor del ACajaTexto",name:"valor",required:!0,type:{name:"string"}},cambioTexto:{defaultValue:null,description:"Funcion que se ejecuta cuando cambia el valor del ACajaTexto",name:"cambioTexto",required:!0,type:{name:"(valor: string) => void"}},classNameACajaTexto:{defaultValue:null,description:"Clase CSS del ACajaTexto",name:"classNameACajaTexto",required:!1,type:{name:"string"}},estilosACajaTexto:{defaultValue:null,description:"Clase CSS del ACajaTexto",name:"estilosACajaTexto",required:!1,type:{name:"CSSProperties"}},visible:{defaultValue:null,description:"Indica si el ACajaTexto es visible o no",name:"visible",required:!1,type:{name:"boolean"}},habilitado:{defaultValue:null,description:"Indica si el ACajaTexto está deshabilitado o no",name:"habilitado",required:!1,type:{name:"boolean"}},iconoIzquierda:{defaultValue:null,description:"Icono que se muestra a la izquierda del ACajaTexto",name:"iconoIzquierda",required:!1,type:{name:"Element"}},placeholder:{defaultValue:null,description:"Texto por defecto en el ACajaTexto cuando está vacío",name:"placeholder",required:!1,type:{name:"string"}},autoCompletado:{defaultValue:null,description:"Lista de opciones para el autoCompletado",name:"autoCompletado",required:!1,type:{name:"string[]"}},quitoFoco:{defaultValue:null,description:"Se ejecuta cuando el usuario quita el foco del campo",name:"quitoFoco",required:!1,type:{name:"(() => void)"}},quitoFocus:{defaultValue:null,description:"Se ejecuta cuando el usuario quita el focus del campo",name:"quitoFocus",required:!1,type:{name:"(() => void)"}},tabIndice:{defaultValue:null,description:"TabIndex del ACajaTexto",name:"tabIndice",required:!1,type:{name:"number"}},requerido:{defaultValue:null,description:"Indica si el ACajaTexto es requerido o no",name:"requerido",required:!1,type:{name:"boolean"}},estilosIconoIzquierda:{defaultValue:null,description:"Estilos del icono de la izquierda",name:"estilosIconoIzquierda",required:!1,type:{name:"CSSProperties"}},classNameIconoIzquierda:{defaultValue:null,description:"Clase CSS del icono de la izquierda",name:"classNameIconoIzquierda",required:!1,type:{name:"string"}},iconoDerecha:{defaultValue:null,description:"Icono de la Derecha",name:"iconoDerecha",required:!1,type:{name:"Element"}},estilosIconoDerecha:{defaultValue:null,description:"Estilos del icono de la derecha",name:"estilosIconoDerecha",required:!1,type:{name:"CSSProperties"}},classNameIconoDerecha:{defaultValue:null,description:"Clase CSS del icono de la derecha",name:"classNameIconoDerecha",required:!1,type:{name:"string"}},maxCarateres:{defaultValue:null,description:"Maximo de caracteres que se escribiran",name:"maxCarateres",required:!1,type:{name:"number"}},mostrarMaxCaracteres:{defaultValue:null,description:"Indica si se muestra el contador de caracteres",name:"mostrarMaxCaracteres",required:!1,type:{name:"boolean"}},classNameError:{defaultValue:null,description:"Clase CSS del mensaje de error",name:"classNameError",required:!1,type:{name:"string"}},estilosError:{defaultValue:null,description:"Estilos del mensaje de error",name:"estilosError",required:!1,type:{name:"CSSProperties"}},msjError:{defaultValue:null,description:"Mensaje de error",name:"msjError",required:!1,type:{name:"string"}},tipoEntrada:{defaultValue:null,description:"Tipo de entrada del ACajaTexto",name:"tipoEntrada",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'},{value:'"tel"'},{value:'"url"'},{value:'"search"'},{value:'"date"'},{value:'"time"'},{value:'"datetime-local"'},{value:'"month"'},{value:'"week"'},{value:'"color"'}]}},autoFoco:{defaultValue:null,description:"Indica si el ACajaTexto tiene el foco o no",name:"autoFoco",required:!1,type:{name:"boolean"}},eventoTeclaPresionada:{defaultValue:null,description:"Retorna el nombre de la tecla presionada",name:"eventoTeclaPresionada",required:!1,type:{name:"((e: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/acomponentes/ACajaTexto/index.tsx#ACajaTexto"]={docgenInfo:acomponentes_ACajaTexto_ACajaTexto.__docgenInfo,name:"ACajaTexto",path:"src/acomponentes/ACajaTexto/index.tsx#ACajaTexto"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/acomponentes/ACajaTexto/ACajaTexto.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".acajatexto{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.acajatexto-titulo{\r\n    position: relative;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.acajatexto-icono-izquierda{\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    padding: 4px;\r\n    position: absolute;\r\n    box-sizing:border-box;\r\n    top:50%;\r\n    left:4px;\r\n    transform: translateY(-60%);\r\n}\r\n\r\n.acajatexto-icono-derecha{\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    padding: 4px;\r\n    position: absolute;\r\n    box-sizing:border-box;\r\n    top:50%;\r\n    right:10px;\r\n    transform: translateY(-60%);\r\n}\r\n\r\n.acajatexto-input{\r\n    border: 1px solid #373737;\r\n    border-radius: 10px;\r\n    outline: none;\r\n\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n.acajatexto-icono-izquierda-visible{\r\n    padding-left: 2rem;\r\n}\r\n\r\n.acajatexto-icono-derecha-visible{\r\n    padding-right: 2rem;\r\n}\r\n\r\n.acajatexto-input:focus{\r\n    border: 1px solid #159fab;\r\n    outline: auto;\r\n    outline-color: #159fab;\r\n}\r\n\r\n.acajatexto-input:invalid{\r\n    border: 1px solid red;\r\n}\r\n\r\n.acajatexto-input:disabled{\r\n    background-color: #E6E6E6;\r\n    color: #979595;\r\n}\r\n\r\n.acajatexto-contenedor-pie{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.acajatexto-max-caracteres{\r\n    position: relative;\r\n    font-size: 0.8rem;\r\n    color: #3c3c3c;\r\n}\r\n\r\n.acajatexto-error{\r\n    position: relative;\r\n    font-size: 0.8rem;\r\n    color: red;\r\n}\r\n\r\n.acajatexto-conerror{\r\n    border: 1px solid red;\r\n}","",{version:3,sources:["webpack://./src/acomponentes/ACajaTexto/ACajaTexto.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,OAAO;IACP,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,OAAO;IACP,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;;IAEb,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;;IAElB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB",sourcesContent:[".acajatexto{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.acajatexto-titulo{\r\n    position: relative;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.acajatexto-icono-izquierda{\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    padding: 4px;\r\n    position: absolute;\r\n    box-sizing:border-box;\r\n    top:50%;\r\n    left:4px;\r\n    transform: translateY(-60%);\r\n}\r\n\r\n.acajatexto-icono-derecha{\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    padding: 4px;\r\n    position: absolute;\r\n    box-sizing:border-box;\r\n    top:50%;\r\n    right:10px;\r\n    transform: translateY(-60%);\r\n}\r\n\r\n.acajatexto-input{\r\n    border: 1px solid #373737;\r\n    border-radius: 10px;\r\n    outline: none;\r\n\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n.acajatexto-icono-izquierda-visible{\r\n    padding-left: 2rem;\r\n}\r\n\r\n.acajatexto-icono-derecha-visible{\r\n    padding-right: 2rem;\r\n}\r\n\r\n.acajatexto-input:focus{\r\n    border: 1px solid #159fab;\r\n    outline: auto;\r\n    outline-color: #159fab;\r\n}\r\n\r\n.acajatexto-input:invalid{\r\n    border: 1px solid red;\r\n}\r\n\r\n.acajatexto-input:disabled{\r\n    background-color: #E6E6E6;\r\n    color: #979595;\r\n}\r\n\r\n.acajatexto-contenedor-pie{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.acajatexto-max-caracteres{\r\n    position: relative;\r\n    font-size: 0.8rem;\r\n    color: #3c3c3c;\r\n}\r\n\r\n.acajatexto-error{\r\n    position: relative;\r\n    font-size: 0.8rem;\r\n    color: red;\r\n}\r\n\r\n.acajatexto-conerror{\r\n    border: 1px solid red;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/acomponentes/estilosgenerales.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".no-visible{\r\n    display: none !important;\r\n}\r\n\r\nhtml, body{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}","",{version:3,sources:["webpack://./src/acomponentes/estilosgenerales.css"],names:[],mappings:"AAAA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B",sourcesContent:[".no-visible{\r\n    display: none !important;\r\n}\r\n\r\nhtml, body{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/acomponentes/estilosgenerales.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_estilosgenerales_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/acomponentes/estilosgenerales.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_estilosgenerales_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_estilosgenerales_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_estilosgenerales_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_estilosgenerales_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);