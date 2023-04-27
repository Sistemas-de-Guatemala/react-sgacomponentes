import React, { useId, useImperativeHandle } from 'react';
import './ATabla.css';

export interface IATablaProps {
    /** Visibilidad del componente */
    visible?: boolean;
    /** Clase CSS */
    className?: string;
    /** Estilo CSS */
    estilos?: React.CSSProperties;
    /** Encabezados de la tabla */
    encabezados?: Array<string | number | React.ReactNode>;
    /** Estilos de los encabezados */
    estilosEncabezados?: React.CSSProperties;
    /** Clase CSS Encabezados */
    classNameEncabezados?: string;
    /** Datos de la tabla */
    datos: Array<Array<string | number | React.ReactNode>>;
    /** Estilos fila datos */
    estilosFilaDatos?: React.CSSProperties;
    /** Clase CSS fila datos */
    classNameFilaDatos?: string;
    /** Estilos Celda Datos */
    estilosCeldaDatos?: React.CSSProperties;
    /** Clase CSS Celda Datos */
    classNameCeldaDatos?: string;
};

export interface IATablaRef {
    /** Devuelve el tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
};

/**
 * Componente de tabla con un diseño preestablecido
 */
const ATabla = React.forwardRef<IATablaRef, IATablaProps>(
    function ATablaInterno(
        props,
        ref
    ) {

        const uuid = useId();

        useImperativeHandle(ref, () => ({
            TipoAControl: () => 'ATabla',
            Refuuid: () => uuid
        }));

        return (
            <table
                key={uuid}
                id={uuid}
                className={`atabla ${props.className || ""} ${(props.visible !== undefined) ? (props.visible ? "" : "atabla-oculto") : ""}`}
                style={props.estilos}
            >
                {
                    (props.encabezados === undefined) ? null :
                        <thead>
                            <tr>
                                {
                                    props.encabezados.map((elemento, indice) => {
                                        return (
                                            <td
                                                key={`atabla-encabezado-${uuid}-${indice}`}
                                                className={`atabla-encabezado ${props.classNameEncabezados || ""}`}
                                                style={props.estilosEncabezados}
                                            >
                                                {elemento}
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                }
                <tbody>
                    {
                        props.datos.map((fila, indiceFila) => {
                            return (
                                <tr
                                    key={`atabla-fila-${uuid}-${indiceFila}`}
                                    className={`atabla-fila ${props.classNameFilaDatos || ""}`}
                                >
                                    {
                                        fila.map((celda, indiceCelda) => {
                                            return (
                                                <td
                                                    key={`atabla-celda-${uuid}-${indiceCelda}-${indiceCelda}`}
                                                    className={`atabla-celda ${props.classNameCeldaDatos || ""}`}
                                                    style={props.estilosCeldaDatos}
                                                >
                                                    {celda}
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
);

export default ATabla;