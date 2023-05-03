/*! For license information please see acomponentes-APaginador-APaginador-stories.c67bd6d3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_sgacomponentes=self.webpackChunkreact_sgacomponentes||[]).push([[949],{"./src/acomponentes/APaginador/APaginador.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{APaginadorVisualizacion:()=>APaginadorVisualizacion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/acomponentes/APaginador/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"react-sgacomponentes/APaginador",component:_index__WEBPACK_IMPORTED_MODULE_1__.Z},APaginadorPlantilla=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});APaginadorPlantilla.displayName="APaginadorPlantilla";const APaginadorVisualizacion=APaginadorPlantilla.bind({});APaginadorVisualizacion.args={paginaActual:1,maxPaginas:10},APaginadorVisualizacion.argTypes={cambioPagina:{action:"cambioPagina"}},APaginadorVisualizacion.parameters={...APaginadorVisualizacion.parameters,docs:{...APaginadorVisualizacion.parameters?.docs,source:{originalSource:"(args: any) => <APaginador {...args} />",...APaginadorVisualizacion.parameters?.docs?.source}}};const __namedExportsOrder=["APaginadorVisualizacion"];try{APaginadorVisualizacion.displayName="APaginadorVisualizacion",APaginadorVisualizacion.__docgenInfo={description:"",displayName:"APaginadorVisualizacion",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/acomponentes/APaginador/APaginador.stories.tsx#APaginadorVisualizacion"]={docgenInfo:APaginadorVisualizacion.__docgenInfo,name:"APaginadorVisualizacion",path:"src/acomponentes/APaginador/APaginador.stories.tsx#APaginadorVisualizacion"})}catch(__react_docgen_typescript_loader_error){}},"./src/acomponentes/APaginador/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>acomponentes_APaginador});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),APaginador=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/acomponentes/APaginador/APaginador.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(APaginador.Z,options);APaginador.Z&&APaginador.Z.locals&&APaginador.Z.locals;var react_paginate=__webpack_require__("./node_modules/react-paginate/dist/react-paginate.js"),react_paginate_default=__webpack_require__.n(react_paginate),index_esm=__webpack_require__("./node_modules/react-icons/io5/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const acomponentes_APaginador_APaginador=react.forwardRef((function APaginadorInterno(props,ref){let visible=!0;void 0!==props.visible&&(visible=props.visible);const[currentItems,setCurrentItems]=(0,react.useState)([]),[pageCount,setPageCount]=(0,react.useState)(0),[itemOffset,setItemOffset]=(0,react.useState)(0),[itemsPerPage,setItemsPerPage]=(0,react.useState)(7),[items,setItems]=(0,react.useState)([]),uuid=(0,react.useId)();(0,react.useImperativeHandle)(ref,(()=>({TipoAControl:()=>"APaginador",Refuuid:()=>uuid}))),(0,react.useEffect)((()=>{const endOffset=itemOffset+itemsPerPage;setCurrentItems(items.slice(itemOffset,endOffset)),setPageCount(Math.ceil(items.length/itemsPerPage))}),[itemOffset,itemsPerPage]),(0,react.useEffect)((()=>{setItems([...Array(props.maxPaginas).keys()]),setItemsPerPage(props.maxPaginas)}),[props.maxPaginas]);const handlePageClick=event=>{const newOffset=event.selected*itemsPerPage%items.length;setItemOffset(newOffset),props.cambioPagina(event.selected+1)};return visible?(0,jsx_runtime.jsx)("div",{className:"apaginador "+(props.hasOwnProperty("className")?props.className:""),id:uuid,children:(0,jsx_runtime.jsx)(react_paginate_default(),{nextLabel:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[props.hasOwnProperty("etiquetaSiguiente")?props.etiquetaSiguiente:"Siguiente"," ",(0,jsx_runtime.jsx)(index_esm.onJ,{size:20})]}),onPageChange:handlePageClick,pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:props.maxPaginas,previousLabel:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_esm.nOT,{size:20})," ",props.hasOwnProperty("etiquetaAnterior")?props.etiquetaAnterior:"Anterior"," "]}),pageClassName:"apaginador-pagina",pageLinkClassName:"apaginador-pagina-link",previousClassName:"apaginador-pagina",previousLinkClassName:"apaginador-pagina-link",nextClassName:"apaginador-pagina",nextLinkClassName:"apaginador-pagina-link",breakLabel:"...",breakClassName:"apaginador-pagina",breakLinkClassName:"apaginador-pagina-link",containerClassName:"apaginador-contenedor",activeClassName:"apaginador-paginas-seleccionada",renderOnZeroPageCount:null,forcePage:props.paginaActual-1})}):null})),acomponentes_APaginador=acomponentes_APaginador_APaginador;try{acomponentes_APaginador_APaginador.displayName="APaginador",acomponentes_APaginador_APaginador.__docgenInfo={description:"",displayName:"APaginador",props:{className:{defaultValue:null,description:"Clase CSS",name:"className",required:!1,type:{name:"string"}},etiquetaAnterior:{defaultValue:null,description:"Etiqueta de anterior",name:"etiquetaAnterior",required:!1,type:{name:"string"}},etiquetaSiguiente:{defaultValue:null,description:"Etiqueta de Siguiente",name:"etiquetaSiguiente",required:!1,type:{name:"string"}},visible:{defaultValue:null,description:"Si es false, no se muestra el APaginador",name:"visible",required:!1,type:{name:"boolean"}},maxPaginas:{defaultValue:null,description:"Numero máximo de páginas",name:"maxPaginas",required:!0,type:{name:"number"}},paginaActual:{defaultValue:null,description:"Numero de página actual",name:"paginaActual",required:!0,type:{name:"number"}},cambioPagina:{defaultValue:null,description:"Función que se ejecuta al cambiar de página",name:"cambioPagina",required:!0,type:{name:"(pagina: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/acomponentes/APaginador/index.tsx#APaginador"]={docgenInfo:acomponentes_APaginador_APaginador.__docgenInfo,name:"APaginador",path:"src/acomponentes/APaginador/index.tsx#APaginador"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/acomponentes/APaginador/APaginador.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".apaginador{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    width: fit-content;\r\n}\r\n\r\n.apaginador-contenedor{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-self: center;\r\n    justify-content: space-between;\r\n    width: 780px;\r\n    align-items: center;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    color: #05a8df;\r\n}\r\n\r\n.apaginador-paginas-seleccionada{\r\n    background-color: #05a8df;\r\n    color: white;\r\n}\r\n\r\n.apaginador-pagina{\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n}\r\n\r\n.apaginador-pagina-link{\r\n    display: block;\r\n    text-decoration: none;\r\n    padding: 5px;\r\n}\r\n\r\n.apaginador-pagina:hover,\r\n.apaginador-pagina:focus,\r\n.apaginador-pagina:active{\r\n    background-color: #05a8df;\r\n    color: white;\r\n    transition: all 0.2s ease-in-out;\r\n}","",{version:3,sources:["webpack://./src/acomponentes/APaginador/APaginador.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,YAAY;AAChB;;AAEA;;;IAGI,yBAAyB;IACzB,YAAY;IACZ,gCAAgC;AACpC",sourcesContent:[".apaginador{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    width: fit-content;\r\n}\r\n\r\n.apaginador-contenedor{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-self: center;\r\n    justify-content: space-between;\r\n    width: 780px;\r\n    align-items: center;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    color: #05a8df;\r\n}\r\n\r\n.apaginador-paginas-seleccionada{\r\n    background-color: #05a8df;\r\n    color: white;\r\n}\r\n\r\n.apaginador-pagina{\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n}\r\n\r\n.apaginador-pagina-link{\r\n    display: block;\r\n    text-decoration: none;\r\n    padding: 5px;\r\n}\r\n\r\n.apaginador-pagina:hover,\r\n.apaginador-pagina:focus,\r\n.apaginador-pagina:active{\r\n    background-color: #05a8df;\r\n    color: white;\r\n    transition: all 0.2s ease-in-out;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);