import React, { useMemo, useState, useRef, useEffect, useImperativeHandle } from 'react';
import './ADesplegable.css';

// Componentes locales
import ACajaTexto from './../ACajaTexto';
import AEtiqueta from './../AEtiqueta';
import ABoton from './../ABoton';

// Utilidades
import AControl from '../AUtileriaComponentes/AControl';
import { IoIosArrowDown, IoIosArrowUp, IoMdSearch } from "react-icons/io";

export interface IADesplegableDatos {
    /** Identificador único de la lista */
    id: string | number;
    /** Valor que se muestra en pantalla */
    texto: string;
}

export interface IADesplegableProps {
    /** Valor seleccionado */
    valor: string | number;
    /** Evento que se ejecuta cuando se selecciona un valor */
    cambioSeleccion: (valor: string | number) => void;
    /**
     * Lista de datos del adesplegable
     * @example
     * <ADesplegable
     *    valor={estadoValor}
     *    datos={[
     *          { id: "1", texto: "Texto 1" },
     *          { id: "2", texto: "Texto 2" },
     *          { id: "3", texto: "Texto 3" },
     *    ]}
     *    cambioSeleccion={(valor) => {
     *         fijarEstadoValor(valor);
     *    }}
     * />
     */
    datos: Array<IADesplegableDatos>;
    /** Clase CSS */
    className?: string;
    /** Estilos CSS */
    estilos?: React.CSSProperties;
    /** Clase CSS del titulo */
    classNameTitulo?: string;
    /** Estilos CSS del titulo */
    estilosTitulo?: React.CSSProperties;
    /** Clase CSS del error */
    classNameError?: string;
    /** Estilos CSS del error */
    estilosError?: React.CSSProperties;
    /** Clase CSS del contenido */
    classNameContenido?: string;
    /** Estilos CSS del contenido */
    estilosContenido?: React.CSSProperties;
    /** Titulo del ADesplegable */
    titulo?: string;
    /** Placeholder del AControl */
    placeholder?: string;
    /** Si es false el AControl se esconde */
    visible?: boolean;
    /** Si es true el AControl se vuelve un componente obligatorio */
    requerido?: boolean;
    /** Si es falso el AControl se deshabilita */
    habilitado?: boolean;
    /** Si es falso el filtro del AControl se oculta */
    mostrarFiltro?: boolean;
    /** Tab Index del AControl */
    tabIndice?: number;
    /** Este icono se posiciona a la derecha del AControl */
    icono?: React.ReactNode;
    /** Placeholder del Filtro del AControl */
    placeholderFiltro?: string;
}

export interface IADesplegableRef {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
    /** Pone un mensaje de error debajo del desplegable */
    FijarMsjError: (error: string) => void;
    /** Pone el foco sobre el AControl */
    Focus: () => void;
    /** Pone el foco sobre el AControl */
    Foco: () => void;
};


const ADesplegable = React.forwardRef<IADesplegableRef, IADesplegableProps>(
    function ADesplegableInterno(
        props,
        ref
    ) {

        // Referencias
        const refDivPrincipal = React.createRef<HTMLDivElement>();
        const refDivDesplegable = React.createRef<HTMLDivElement>();

        // Estados de control
        const uuid = useMemo(() => AControl.GenerarUuidControl(), []);
        const [desplegableHabierto, fijarDesplegableHabierto] = useState(false);
        const [txt_filtroBusqueda, fijarTxt_filtroBusqueda] = useState('');
        const [lbd_error, fijarLbd_error] = useState('');
        // Estados de registros
        const [datos_desplegable, fijarDatos_desplegable] = useState<Array<IADesplegableDatos>>([]);


        // Controlar el estado del desplegable
        useEffect(() => {
            if (props.datos.length != datos_desplegable.length) {
                fijarDatos_desplegable(props.datos);
            }
        }, [
            props.datos
        ]);

        // Funciones de referencias
        useImperativeHandle(ref, () => ({
            Refuuid: () => { return uuid; },
            TipoAControl: () => { return 'ADesplegable'; },
            FijarMsjError: (error: string) => { fijarLbd_error(error); },
            Focus: () => {
                let habilitado = true;
                if (props.habilitado !== undefined) {
                    habilitado = props.habilitado;
                }

                if (habilitado) {
                    refDivDesplegable.current?.focus();
                }
            },
            Foco: () => {
                let habilitado = true;
                if (props.habilitado !== undefined) {
                    habilitado = props.habilitado;
                }

                if (habilitado) {
                    refDivDesplegable.current?.focus();
                }
            }
        }));


        let visible = true;

        if (props.visible !== undefined) {
            visible = props.visible;
        }

        /**
         * Titulo que se mostrara en el componente
         * @returns {React.Component}
         */
        const TituloADesplegable = () => {
            if (props.hasOwnProperty('titulo')) {
                return (
                    <AEtiqueta
                        para={uuid}
                        className={"adesplegable-titulo " + (props.hasOwnProperty('classNameTitulo') ? props.classNameTitulo : "")}
                        estilos={props.hasOwnProperty('estilosTitulo') ? props.estilosTitulo : {}}
                    >
                        {props.titulo}
                    </AEtiqueta>
                );
            }
            else {
                return (
                    <>
                    </>
                );
            }
        }



        const _clickDesplegable = () => {
            let estaHabilitado:boolean = true;
            if (props.habilitado !== undefined) {
                estaHabilitado = props.habilitado;
            }

            if (estaHabilitado) {
                fijarDesplegableHabierto(!desplegableHabierto);
                fijarTxt_filtroBusqueda("");
            }
        }

        const _clickCancelar = () => {
            fijarDesplegableHabierto(false);
            fijarTxt_filtroBusqueda("");
            fijarDatos_desplegable(props.datos);
        }

        /**
         * Evento que se ejecuta cuando presionan una tecla
         * // Evento que puede ser de utilidad en algún futuro React.KeyboardEvent<HTMLDivElement>
         * @param e Evento
         */
        const _TeclaPresionadaFocoADesplegable = (e: any) => {
            if (
                (e.key === "Enter") ||
                (e.key === " ")
            ) {
                _clickDesplegable();
            }
            if (e.shiftKey && (e.keyCode === 9)) {
                _clickCancelar();
                try {
                    e.target.previousSibling.focus();
                } catch (err) {

                }
            }
            else
                if (e.key === "Tab") {
                    _clickCancelar();
                    try {
                        e.target.nextSibling.focus();
                    } catch (err) {

                    }
                }
        };


        const _obtenerTextoSeleccionado = (id_valor_seleccionado: string | number): string => {
            let valorFinalCadena: string = "";
            let valorFinalNumero: number = -1;

            if (typeof props.valor === "string") {
                valorFinalCadena = props.valor;
            }

            if (typeof props.valor === "number") {
                valorFinalNumero = props.valor;
            }

            if ((valorFinalCadena !== "") || (valorFinalNumero !== -1)) {
                let texto_seleccionado = "";
                props.datos.forEach(element => {
                    if (element.id == id_valor_seleccionado) {
                        texto_seleccionado = element.texto.toString();
                    }
                });
                return ((texto_seleccionado === "") ? props.placeholder || "" : texto_seleccionado);
            }
            else {
                return props.placeholder || "";
            }
        }

        const ADesplegableRender = () => {
            return (
                <>
                    <div
                        className={"adesplegable-contenido " + (props.hasOwnProperty('classNameContenido') ? props.classNameContenido + " " : "")}
                        style={props.hasOwnProperty('estilosContenido') ? props.estilosContenido : {}}
                        onClick={(e) => { e.preventDefault(); _clickDesplegable(); }}
                        tabIndex={props.tabIndice || 0}
                        onKeyDown={_TeclaPresionadaFocoADesplegable}
                        ref={refDivDesplegable}
                    >
                        <div className={"adesplegable-texto " + (props.hasOwnProperty('habilitado') ? (!props.habilitado ? "adesplegable-contenido-deshabilitado " : " ") : " ")}>
                            <AEtiqueta className={"adesplegable-texto-seleccionado " + (props.hasOwnProperty('habilitado') ? (!props.habilitado ? "adesplegable-contenido-deshabilitado-texto " : " ") : " ")}>
                                {_obtenerTextoSeleccionado(props.valor)}
                            </AEtiqueta>
                            {(
                                props.hasOwnProperty('icono') &&
                                props.icono
                            )}
                            {(
                                !props.hasOwnProperty('icono') &&
                                    (desplegableHabierto) ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />
                            )}
                        </div>

                    </div>
                    {(
                        desplegableHabierto &&
                        <ADesplegableOpciones />
                    )}
                </>
            );
        }


        const _clickElementoSeleccionado = (id: string | number): void => {
            fijarDesplegableHabierto(false);
            fijarTxt_filtroBusqueda("");
            fijarDatos_desplegable(props.datos);
            props.cambioSeleccion(id);
        }

        const _filtrarBusqueda = (txt: string): void => {
            txt = txt.trimStart();
            fijarTxt_filtroBusqueda(txt);

            if (txt !== "") {
                let datos_filtrados = props.datos.filter(element => {
                    return (element.texto.toLowerCase().includes(txt.toLowerCase()));
                });
                fijarDatos_desplegable(datos_filtrados);
            }
            else {
                fijarDatos_desplegable(props.datos);
            }
        }


        const ADesplegableOpciones = () => {

            let elemento_seleccionado = useRef<HTMLDivElement>(null);
            let contenedor_elementos = useRef<HTMLDivElement>(null);
            let contenedorPrincipal = useRef<HTMLDivElement>(null);

            const [indiceSeleccionado, fijarIndiceSeleccionado] = useState(0);

            let muestraFiltro = true;
            if (props.hasOwnProperty('mostrarFiltro')) {
                muestraFiltro = props.mostrarFiltro || true;
            }

            let busquedaPorTecla = "";

            useEffect(() => {
                if (contenedor_elementos.current && elemento_seleccionado.current) {
                    contenedor_elementos.current.scrollTop = elemento_seleccionado.current.offsetTop - 100;
                }

                for (let i = 0; i < datos_desplegable.length; i++) {
                    if (datos_desplegable[i].id == props.valor) {
                        fijarIndiceSeleccionado(() => { return i; });
                    }
                }

                contenedorPrincipal.current?.focus();

            }, [muestraFiltro, elemento_seleccionado, contenedor_elementos]);

            const MoverScrollPosicionTeclas = () => {
                const elementos_encontrados = document.getElementById("adesplegable-opcion-elemento-" + uuid + "-" + indiceSeleccionado);
                if (elementos_encontrados) {
                    if (contenedor_elementos.current) {
                        contenedor_elementos.current.scrollTop = elementos_encontrados.offsetTop - 100;
                    }
                }
            }

            const MoverScrollPosicionFocus = () => {
                const elementos_encontrados = document.getElementsByClassName("adesplegable-opcion-elemento-" + uuid);
                if (elementos_encontrados) {
                    for (let i = 0; i < elementos_encontrados.length; i++) {
                        if (elementos_encontrados[i].textContent?.toLowerCase().includes(busquedaPorTecla.toLowerCase())) {

                            if (contenedor_elementos.current) {
                                contenedor_elementos.current.scrollTop = elementos_encontrados[i].scrollTop;
                            }

                            setTimeout(() => {
                                fijarIndiceSeleccionado(() => { return i; });
                            }, 100);

                            setTimeout(() => {
                                busquedaPorTecla = "";
                            }, 2000);
                            break;
                        }
                    }
                }
            }

            const _TeclaPresionada = (e: any) => {
                e.preventDefault();
                if (!muestraFiltro || muestraFiltro) {
                    if (e.shiftKey && (e.keyCode === 9)) {
                        try {
                            e.target.previousSibling.focus();
                        } catch (err) {

                        }
                    }
                    else
                        if (e.key === "Tab") {
                            try {
                                e.target.nextSibling.focus();
                            } catch (err) {

                            }
                        }
                        else
                            if (
                                (e.key === "Escape")
                            ) {
                                _clickCancelar();
                            }
                            else
                                if (e.key === "Enter") {
                                    _clickElementoSeleccionado(datos_desplegable[indiceSeleccionado].id);
                                }
                                else
                                    if (
                                        (e.key !== "ArrowUp") &&
                                        (e.key !== "ArrowDown") &&
                                        (e.key !== "ArrowLeft") &&
                                        (e.key !== "ArrowRight") &&
                                        (e.key !== "Tab") &&
                                        (e.key !== "Control")
                                    ) {
                                        busquedaPorTecla += e.key;
                                        MoverScrollPosicionFocus();
                                    }
                                    else {
                                        switch (e.key) {
                                            case "ArrowUp": {
                                                if (indiceSeleccionado > 0) {
                                                    fijarIndiceSeleccionado((indiceActual) => { return indiceActual - 1; });
                                                    MoverScrollPosicionTeclas();
                                                }
                                                break;
                                            }
                                            case "ArrowDown": {
                                                if (indiceSeleccionado < datos_desplegable.length - 1) {
                                                    fijarIndiceSeleccionado((indiceActual) => { return indiceActual + 1; });
                                                    MoverScrollPosicionTeclas();
                                                }
                                                break;
                                            }
                                            default: {
                                                break;
                                            }
                                        }
                                    }
                }
                else {
                    if (
                        (e.key === "Escape")
                    ) {
                        _clickCancelar();
                    }
                }
            };

            if (muestraFiltro) {
                return (
                    <div
                        ref={contenedorPrincipal}
                        className={"adesplegable-opciones "}
                    >
                        <div className={"adesplegable-opciones-contenedor"}>
                            {(
                                muestraFiltro &&
                                <div className={"adesplegable-opciones-filtro"}>
                                    <ACajaTexto
                                        placeholder={(props.hasOwnProperty('placeholderFiltro')) ? props.placeholderFiltro : "Buscar..."}
                                        estilos={{
                                            margin: "0"
                                        }}
                                        estilosACajaTexto={{
                                            border: "none",
                                            width: "100%"
                                        }}
                                        tabIndice={0}
                                        className={"adesplegable-acajatexto-filtro-busqueda"}
                                        autoFocus={true}
                                        valor={txt_filtroBusqueda}
                                        cambioTexto={(e) => { _filtrarBusqueda(e); }}
                                    />
                                    <IoMdSearch size={25} />
                                    <ABoton
                                        estilos={{
                                            textAlign: "center",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "20%"
                                        }}
                                        tipoBotonColor="link"
                                        tipoBoton="button"
                                        botonPresionado={() => { _clickCancelar(); }}
                                        className={"adesplegable-btn-cancelar"}
                                    >
                                        Cancelar
                                    </ABoton>
                                </div>
                            )}
                            <div
                                ref={contenedor_elementos}
                                className={"adesplegable-opciones-elementos adesplegable-opciones-elementos-" + uuid}
                                tabIndex={0}
                                onKeyDown={_TeclaPresionada}
                            >
                                {
                                    datos_desplegable.map((item, indice) => {
                                        if (typeof props.valor !== typeof item.id) {
                                            throw Error(`La propiedad valor es de tipo ${typeof props.valor} y el elemento ${item.id} es de tipo ${typeof item.id}`);
                                        }
                                        else {
                                            if (props.valor === item.id) {
                                                return (
                                                    <div
                                                        onClick={(e) => { e.preventDefault(); _clickElementoSeleccionado(item.id); }}
                                                        ref={elemento_seleccionado}
                                                        key={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        id={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        className={"adesplegable-opciones-elemento adesplegable-item-seleccionado adesplegable-opcion-elemento-" + uuid}
                                                    >
                                                        <AEtiqueta className={"adesplegable-opciones-elemento-texto adesplegable-item-seleccionado-texto"}>
                                                            {item.texto}
                                                        </AEtiqueta>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div
                                                        onClick={(e) => { e.preventDefault(); _clickElementoSeleccionado(item.id); }}
                                                        key={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        id={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        className={`adesplegable-opciones-elemento ${(indice === indiceSeleccionado) ? "adesplegable-item-seleccionado" : ""} adesplegable-opcion-elemento-` + uuid}
                                                    >
                                                        <AEtiqueta className={"adesplegable-opciones-elemento-texto"}>
                                                            {item.texto}
                                                        </AEtiqueta>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div
                        ref={contenedorPrincipal}
                        tabIndex={0}
                        onKeyDown={_TeclaPresionada}
                        className={"adesplegable-opciones "}
                    >
                        <div className={"adesplegable-opciones-contenedor"}>
                            <div
                                ref={contenedor_elementos}
                                className={"adesplegable-opciones-elementos adesplegable-opciones-elementos-" + uuid}
                            >
                                {
                                    datos_desplegable.map((item, indice) => {
                                        if (typeof props.valor !== typeof item.id) {
                                            throw Error(`La propiedad valor es de tipo ${typeof props.valor} y el elemento ${item.id} es de tipo ${typeof item.id}`);
                                        }
                                        else {
                                            if (props.valor === item.id) {
                                                return (
                                                    <div
                                                        onClick={(e) => { e.preventDefault(); _clickElementoSeleccionado(item.id); }}
                                                        ref={elemento_seleccionado}
                                                        key={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        id={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        className={"adesplegable-opciones-elemento adesplegable-item-seleccionado adesplegable-opcion-elemento-" + uuid}
                                                    >
                                                        <AEtiqueta className={"adesplegable-opciones-elemento-texto adesplegable-item-seleccionado-texto"}>
                                                            {item.texto}
                                                        </AEtiqueta>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div
                                                        onClick={(e) => { e.preventDefault(); _clickElementoSeleccionado(item.id); }}
                                                        key={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        id={"adesplegable-opcion-elemento-" + uuid + "-" + indice}
                                                        className={`adesplegable-opciones-elemento ${(indice === indiceSeleccionado) ? "adesplegable-item-seleccionado" : ""} adesplegable-opcion-elemento-` + uuid}
                                                    >
                                                        <AEtiqueta className={"adesplegable-opciones-elemento-texto"}>
                                                            {item.texto}
                                                        </AEtiqueta>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                );
            }
        }


        /**
         * Muestra un texto de error debajo del componente
         * @returns {React.Component}
         */
        const TextoError = () => {
            if (lbd_error === "") {
                return <></>;
            }
            else {
                return (
                    <AEtiqueta
                        className={"adesplegable-error " + (props.hasOwnProperty('classNameError') ? props.classNameError : "")}
                        estilos={(props.hasOwnProperty('estilosError') ? props.estilosError : {})}
                    >
                        {lbd_error}
                    </AEtiqueta>
                );
            }
        }


        if (!visible) {
            return <></>;
        }
        else {
            return (
                <div
                    ref={refDivPrincipal}
                    className={"adesplegable " + (props.hasOwnProperty('className') ? props.className : '')}
                    style={props.hasOwnProperty('estilos') ? props.estilos : {}}
                >
                    <TituloADesplegable />
                    <ADesplegableRender />
                    <TextoError />
                </div>
            );
        }
    }
);

export default ADesplegable;