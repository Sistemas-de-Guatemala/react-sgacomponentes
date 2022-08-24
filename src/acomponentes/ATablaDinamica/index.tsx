import React, { useState, useEffect, useImperativeHandle, useId } from 'react';
import './ATablaDinamica.css';

import {
    GenerarExcelJSON,
    TransformarATablaDinamicaAExcel
} from './../AUtileriaComponentes/ASTD';
import { ImprimirTablaDinamica } from './UtilidadesTablaDinamica';
import Children from 'react-children-utilities';

// Componentes
import ACajaTexto from './../ACajaTexto';
import ABotonOpciones from './../ABotonOpciones';
import ABoton from './../ABoton';
import APaginador from './../APaginador';

// Iconos
import { FiDownload } from "react-icons/fi";
import {
    FaRegFileExcel,
    FaPrint
} from "react-icons/fa";
import {
    IoChevronUpOutline,
    IoChevronDownSharp
} from "react-icons/io5";

export interface IEncabezadosDeOperacionesTabla{
    /** Texto que se muestra en el placeholder del ACajaTexto */
    placeholderFiltro: string;
    /** Evento que se ejecuta cuando se aplica el filtro de búsqueda */
    filtrarBusqueda: (valor: string) => void;
    /** Evento que se ejecuta cuando el botón de opciones es presionado */
    btnOpciones: (indice: number) => void;
}

 const EncabezadosDeOperacionesTabla = (props: IEncabezadosDeOperacionesTabla) => {

    const [txt_filtroBusqueda, fijarTxt_filtroBusqueda] = useState("");

    return (
        <div className={"atabladinamica-operaciones"}>
            <ACajaTexto
                className={'atabladinamica-txtfiltro'}
                classNameACajaTexto={"atabladinamica-txtfiltro"}
                placeholder={props.placeholderFiltro}
                valor={txt_filtroBusqueda}
                cambioTexto={(valor: string): void => { fijarTxt_filtroBusqueda(valor); props.filtrarBusqueda(valor); }}
            />
            <div className={"atabladinamica-operaciones-botones"}>
                <ABotonOpciones
                    opciones={[
                        <div style={{ width: "100%" }}><FaPrint size={15} /> Imprimir</div>,
                        <div style={{ width: "100%" }}><FaRegFileExcel size={15} /> Descargar Excel</div>
                    ]}
                    opcionSeleccionada={(indice: number): void => { props.btnOpciones(indice); }}
                >
                    Descargar <FiDownload size={20} />
                </ABotonOpciones>
            </div>
        </div>
    );
}

export interface IATablaDinamicaProps{
    /** Titulo de la tabla dinamica, este titulo también saldrá en la impresión */
    titulo?: string;
    /** Encabezados de la tabla dinamica */
    encabezados: Array<string|number|React.ReactNode>
    /** Datos de la tabla dinamica */
    datos: Array<Array<string|number|React.ReactNode>>
    /** Si es falso la tabla dinamica se oculta */
    visible?: boolean;
    /** Clase CSS del contenedor de la tabla */
    className?: string;
    /** Estilos del contenedor de la tabla */
    estilos?: React.CSSProperties;
    /** Placeholder del filtro */
    placeholderFiltro?: string;
    /** Lista del número máximo de filas visibles en la tabla dinamica */
    numFilasMostrar?: Array<number>;
    /** Definición del titulo que se mostrará en las impresiones */
    tituloImpresiones?: string;
    /** Clase CSS de las filas */
    classNameFila?: string;
    /** Estilos de las filas */
    estilosFila?: React.CSSProperties;
    /** Clase CSS de las celdas */
    classNameCelda?: string;
    /** Estilos de las celdas */
    estilosCelda?: React.CSSProperties;
    /** Este mensaje se muestra cuando no hay datos en la tabla dinamica o datos.length = 0 */
    mensajeVacio?: string;
};

export interface IATablaDinamicaRef{
    /** Devuelve que tipo de AControl es */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
};

export interface IRenderizarBotonesOrdenamientoProps{
    /** Elemento a renderizar */
    elemento: string|number|React.ReactNode;
    /** Indice del elemento */
    indiceOrdenado: number;
}

const ATablaDinamica = React.forwardRef<IATablaDinamicaRef, IATablaDinamicaProps>(
    function (
        props,
        ref
    ) {
        const uuid = useId();

        let filasAMostrarTemp = 15;

        if (props.hasOwnProperty('numFilasMostrar')) {
            const numFilasMostrar = props.numFilasMostrar || [];

            if (numFilasMostrar.length > 0) {
                filasAMostrarTemp = numFilasMostrar[0];
            }
        }

        const [numFilasMostrar, fijarNumFilasMostrar] = useState(filasAMostrarTemp);

        // States de encabezados
        //const [encabezados, fijarEncabezados] = useState([]);
        const [txtFiltro, fijarTxtFiltro] = useState('');
        // States de datos
        const [datos, fijarDatos] = useState(props.datos.filter((_, indice) => indice < filasAMostrarTemp) || []);
        const [indiceOrdenamiento, fijarIndiceOrdenamiento] = useState(-1);
        const [tipoOrdenamiento, fijarTipoOrdenamiento] = useState('asc');
        // States de pie de tabla
        const [indicePaginacion, fijarIndicePaginacion] = useState(1);
        const [maxPaginas, fijarMaxPaginas] = useState(Math.ceil(datos.length / numFilasMostrar));

        useEffect(() => {
            fijarDatos(props.datos.slice(0, numFilasMostrar));
            fijarMaxPaginas(Math.ceil(props.datos.length / numFilasMostrar));
            fijarIndicePaginacion(1);
        }, []);

        useImperativeHandle(ref, () => ({
            TipoAControl: () => { return 'ATablaDinamica'; },
            Refuuid: () => { return uuid; }
        }));



        useEffect(() => {
            fijarDatos(props.datos.slice(0, numFilasMostrar));
            fijarMaxPaginas(Math.ceil(props.datos.length / numFilasMostrar));
            fijarIndicePaginacion(1);
        }, [props.datos]);


        let visible = true;

        if (props.visible !== undefined) {
            visible = props.visible;
        }

        const RenderizarTitulo = () => {
            if (props.hasOwnProperty('titulo')) {
                return (
                    <p className={"atabladinamica-titulo"}>
                        {props.titulo}
                    </p>
                );
            }
            else {
                return null;
            }
        }

        /**
         * Está función genera la paginación de la tabla dinamica
         * @param {number} numFilas 
         * @param {number} indicePaginacion 
         */
        const filtrarDatosFilasXPagina = (numFilas: number, indicePaginacion: number) => {

            let datosFiltrados: any = props.datos;

            if (txtFiltro !== "") {
                datosFiltrados = datosFiltrados.filter((item: any) => {

                    for (let i = 0; i < item.length; i++) {
                        if ((typeof item[i] === "string") || (typeof item[i] === "number")) {
                            if (item[i].toString().toLowerCase().includes(txtFiltro.toLowerCase())) {
                                return item;
                            }
                        }
                    }

                    return undefined;
                });
            }

            const inicioDatos = ((Math.ceil(indicePaginacion) - 1) * numFilas) % datosFiltrados.length;
            const finalDatos = Math.ceil(inicioDatos) + Math.ceil(numFilas);
            const datosActuales = datosFiltrados.slice(Math.ceil(inicioDatos), Math.ceil(finalDatos));

            fijarNumFilasMostrar(numFilas);
            fijarDatos(datosActuales);
            fijarMaxPaginas(Math.ceil(datosFiltrados.length / numFilas));
            fijarIndicePaginacion((numFilasMostrar !== numFilas) ? 1 : indicePaginacion);
        }

        /**
         * Está función filtra los datos de la tabla dinamica
         * mientras escriban en el filtro de buscar al mismo tiempo
         * que se va paginando
         * @param {number} numFilas 
         * @param {number} indicePaginacion 
         * @param {Array<Array<string|number|React.ReactNode>>} datosFiltro 
         */
        const filtrarDatosFilasXPaginaFiltroConsulta = (numFilas: number, indicePaginacion: number, datosFiltro: Array<Array<string|number|React.ReactNode>>) => {
            const inicioDatos = ((Math.ceil(indicePaginacion) - 1) * numFilas) % datosFiltro.length;
            const finalDatos = Math.ceil(inicioDatos) + Math.ceil(numFilas);
            const datosActuales = datosFiltro.slice(Math.ceil(inicioDatos), Math.ceil(finalDatos));

            fijarNumFilasMostrar(numFilas);
            fijarDatos(datosActuales);
            fijarMaxPaginas(Math.ceil(datosFiltro.length / numFilas));
            fijarIndicePaginacion((numFilasMostrar !== numFilas) ? 1 : indicePaginacion);
        }

        /**
         * Esta función ordena los datos de la tabla asc o desc
         */
        const ordernarDatosIndiceSeleccionado = () => {
            let datosTabla = datos;
            let entroOrdenar = false;
            if (tipoOrdenamiento === "asc") {
                entroOrdenar = true;
                datosTabla = datosTabla.sort((a: any, b: any) => {
                    const base = new Intl.Collator(undefined, {
                        numeric: true,
                        sensitivity: "base"
                    });

                    return base.compare(b[indiceOrdenamiento], a[indiceOrdenamiento]);
                });
            }
            else {
                entroOrdenar = true;
                datosTabla = datosTabla.sort((a: any, b: any) => {
                    const base = new Intl.Collator(undefined, {
                        numeric: true,
                        sensitivity: "base"
                    });

                    return base.compare(a[indiceOrdenamiento], b[indiceOrdenamiento]);
                });
            }

            if (entroOrdenar) {
                fijarDatos(datosTabla);
            }
        }

        /**
         * Filtra la busqueda en la tabla dinamica
         * @param {string} valor 
         */
        const filtrarBusqueda = (valor: string) => {
            if (valor !== "") {
                const datosActuales = props.datos;

                const datosFiltrados = datosActuales.filter((item: any) => {

                    for (let i = 0; i < item.length; i++) {
                        if ((typeof item[i] === "string") || (typeof item[i] === "number")) {
                            if (item[i].toString().toLowerCase().includes(valor.toLowerCase())) {
                                return item;
                            }
                        }
                    }

                    return undefined;
                });

                filtrarDatosFilasXPaginaFiltroConsulta(numFilasMostrar, 1, datosFiltrados);
            }
            else {
                filtrarDatosFilasXPaginaFiltroConsulta(numFilasMostrar, 1, props.datos);
            }

            fijarTxtFiltro(valor);
        }

        /**
         * Genera un excel en base a los datos en la tabla
         */
        const GenerarExcel = () => {
            // Transformar columnas a texto o a numero
            const columnas = props.encabezados.map((encabezado) => {
                if ((typeof encabezado === "string") || (typeof encabezado === "number")) {
                    return encabezado;
                }
                else {
                    return Children.onlyText(encabezado);
                }
            });

            // Transformar datos a texto o a numero y es un componente
            // Unicamente mostrará un mensaje
            const filas = props.datos.map((fila) => {
                return fila.map((columna) => {
                    if ((typeof columna === "string") || (typeof columna === "number")) {
                        return columna;
                    }
                    else {
                        return Children.onlyText(columna);
                    }
                });
            });

            const datosExcel = TransformarATablaDinamicaAExcel(columnas, filas);
            GenerarExcelJSON((props.titulo || "Datos tabla") + "_" + new Date().toISOString(), props.titulo || "Datos", datosExcel);
        }

        /**
         * Genera una impresión de los datos en la tabla
         */
        const GenerarImpresion = () => {
            const encabezados = props.encabezados.map((encabezado) => {
                if ((typeof encabezado === "string") || (typeof encabezado === "number")) {
                    return encabezado;
                }
                else {
                    return Children.onlyText(encabezado);
                }
            });

            const datos = props.datos.map((fila) => {
                return fila.map((columna) => {
                    if ((typeof columna === "string") || (typeof columna === "number")) {
                        return columna;
                    }
                    else {
                        return Children.onlyText(columna);
                    }
                });
            });

            ImprimirTablaDinamica(props.tituloImpresiones || props.titulo || "GENERACIÓN AUTOMÁTICA", encabezados, datos);
        }

        /**
         * Esta funcion filtra la opción clickeada en el botón de ABotonOpciones
         * de la tabla dinamica
         * @param {number} indice - Indice de la opción clickeada
         */
        const btnOpciones_Click = (indice: number) => {
            if (indice === 0) {
                GenerarImpresion();
            }
            else
                if (indice === 1) {
                    GenerarExcel();
                }
        }

        const RenderizarBotonesOrdenamiento = ({ elemento, indiceOrdenado }: IRenderizarBotonesOrdenamientoProps) => {

            const CambiarIndiceSeleccionado = () => {
                fijarIndiceOrdenamiento(indiceOrdenado);

                let tOrdenamiento = tipoOrdenamiento;
                if ((tOrdenamiento === "asc") && (indiceOrdenamiento === indiceOrdenado)) {
                    tOrdenamiento = "desc";
                }
                else
                    if ((tOrdenamiento === "desc") && (indiceOrdenamiento === indiceOrdenado)) {
                        tOrdenamiento = "asc";
                    }

                fijarTipoOrdenamiento(tOrdenamiento);

                ordernarDatosIndiceSeleccionado();
            }

            if (indiceOrdenado === indiceOrdenamiento) {
                if (tipoOrdenamiento === "asc") {
                    return (
                        <ABoton
                            className={"atabladinamica-btn-ordenamiento"}
                            botonPresionado={() => CambiarIndiceSeleccionado()}
                        >
                            {elemento} <IoChevronUpOutline size={15} />
                        </ABoton>
                    );
                }
                else {
                    return (
                        <ABoton
                            className={"atabladinamica-btn-ordenamiento"}
                            botonPresionado={() => CambiarIndiceSeleccionado()}
                        >
                            {elemento} <IoChevronDownSharp size={15} />
                        </ABoton>
                    );
                }
            }
            else {
                return (
                    <ABoton
                        className={"atabladinamica-btn-ordenamiento"}
                        botonPresionado={() => CambiarIndiceSeleccionado()}
                    >
                        {elemento} <IoChevronUpOutline size={15} />
                    </ABoton>
                );
            }
        }

        /**
         * Encabezados de la tabla dinamica
         * @returns {React.Component}
         */
        const RenderizarEncabezadosTabla = () => {
            return (
                <thead className={"atabladinamica-encabezados"}>
                    <tr>
                        {
                            props.encabezados.map((encabezado, indice) => {
                                if (typeof encabezado == "string") {
                                    return (
                                        <th key={`atabladinamica-encabezados-${uuid}-${indice}`}>
                                            <RenderizarBotonesOrdenamiento indiceOrdenado={indice} elemento={encabezado} />
                                        </th>
                                    );
                                }
                                else
                                    if (typeof encabezado == "number") {
                                        return (
                                            <th key={`atabladinamica-encabezados-${uuid}-${indice}`}>
                                                <RenderizarBotonesOrdenamiento indiceOrdenado={indice} elemento={encabezado} />
                                            </th>
                                        );
                                    }
                                    else {
                                        return (
                                            <th key={`atabladinamica-encabezados-${uuid}-${indice}`}>
                                                {encabezado}
                                            </th>
                                        );
                                    }
                            })
                        }
                    </tr>
                </thead>
            );
        }

        /**
         * Este componente muestra los datos de la tabla
         * @returns {React.Component}
         */
        const RenderizarDatosTabla = () => {
            return (
                <tbody className={"atabladinamica-datos"}>
                    {
                        datos.map((fila, indiceFila) => {
                            return (
                                <tr
                                    key={`atabladinamica-datos-fila-${uuid}-${indiceFila}`}
                                    className={"atabladinamica-datos-filas " + (props.hasOwnProperty('classNameFila') ? props.classNameFila : "")}
                                    style={(props.hasOwnProperty('estilosFila') ? props.estilosFila : {})}
                                >
                                    {
                                        fila.map((celda, indiceCelda) => {
                                            return (
                                                <th
                                                    key={`atabladinamica-datos-celda-${uuid}-${indiceCelda}`}
                                                    className={"atabladinamica-datos-celdas " + (props.hasOwnProperty('classNameCelda') ? props.classNameCelda : "")}
                                                    style={(props.hasOwnProperty('estilosCelda') ? props.estilosCelda : {})}
                                                >
                                                    {celda}
                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    {(
                        datos.length === 0 &&
                        <tr>
                            <th align='center' colSpan={props.encabezados.length}>
                                <div className={"atabladinamica-datos-celdas"}>
                                    <div className={"atabladinamica-datos-celdas-texto"}>
                                        {props.mensajeVacio || "No hay datos para mostrar"}
                                    </div>
                                </div>
                            </th>

                        </tr>
                    )}
                </tbody>
            );
        }

        /**
         * Pie de la tabla
         * @returns {React.Component}
         */
        const RenderizarPieTabla = () => {

            let numFilasMostrarLista = [
                15,
                25,
                30,
                50
            ];

            if (props.hasOwnProperty('numFilasMostrar')) {
                numFilasMostrarLista = props.numFilasMostrar || numFilasMostrarLista;
            }

            /**
             * Esta funcion captura el evento de click del usuario
             * para moverse dentro de la paginación
             * @param {number} paginaSeleccionada 
             */
            const clickPagina = (paginaSeleccionada: number) => {
                filtrarDatosFilasXPagina(numFilasMostrar, paginaSeleccionada);
            }

            return (
                <div className={"atabladinamica-pie"}>
                    <div
                        className={"atabladinamica-filas-contador-contenedor"}
                    >
                        <p>Filas por página: </p>
                        <select
                            onChange={(e) => {
                                e.preventDefault();
                                filtrarDatosFilasXPagina(parseInt(e.target.value), indicePaginacion);
                            }}
                            value={numFilasMostrar}
                        >
                            {
                                numFilasMostrarLista.map((item, indice) => {
                                    return (
                                        <option
                                            key={`atabladinamica-filas-contador-contenedor-${uuid}-${indice}`}
                                            value={item}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div
                        className={"atabladinamica-paginador-contenedor"}
                    >
                        <APaginador
                            maxPaginas={maxPaginas}
                            paginaActual={indicePaginacion}
                            cambioPagina={(paginaSeleccionada: number) => {
                                clickPagina(paginaSeleccionada);
                            }}
                        />
                    </div>
                    <div
                        className={"atabladinamica-total-filas-contenedor"}
                    >
                        <p>Total de Filas: {props.datos.length}</p>
                    </div>
                </div>
            );
        }

        if (visible) {
            return (
                <div className={'atabladinamica ' + (props.hasOwnProperty('className') ? props.className : "")}>
                    <RenderizarTitulo />
                    <EncabezadosDeOperacionesTabla
                        placeholderFiltro={props.placeholderFiltro || "Filtrar..."}
                        filtrarBusqueda={filtrarBusqueda}
                        btnOpciones={btnOpciones_Click}
                    />
                    <div className={"atabladinamica-contenedor-tabla"}>
                        <table
                            className={"atabladinamica-tabla"}
                            id={uuid}
                        >
                            <RenderizarEncabezadosTabla />
                            <RenderizarDatosTabla />
                        </table>
                    </div>
                    <RenderizarPieTabla />
                </div>
            );
        }
        else {
            return <></>;
        }
    }
);

export default ATablaDinamica;