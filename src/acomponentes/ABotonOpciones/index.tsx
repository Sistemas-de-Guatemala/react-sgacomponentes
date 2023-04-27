import React, { useId } from "react";
import './../estilosgenerales.css'
import './ABotonOpciones.css';

export interface ABotonOpcionesProps {
    children: React.ReactNode;
    /** Si es falso el control de oculta */
    visible?: boolean;
    /** Estilos CSS */
    estilos?: React.CSSProperties;
    /** Clase CSS */
    className?: string;
    /** Indice del control */
    tabIndice?: number;
    /** Opciones que se mostrarán en el abotonopciones */
    opciones: Array<string | number | React.ReactNode>;
    /** Devuelve el indice del control que fue clickado */
    opcionSeleccionada: (indiceSeleccionado: number) => void;
    /** Clase CSS de las opciones */
    classNameOpciones?: string;
    /** Estilos CSS de las opciones */
    estilosOpciones?: React.CSSProperties;
}

export interface ABotonOpcionesRef {
    /** UUID del AControl */
    Refuuid: () => string;
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** Pone el foco sobre el AControl */
    focus: () => void;
    /** Pone el foco sobre el AControl */
    foco: () => void;
};

/**
 * Componente de boton que se despliega hacia abajo con opciones
 */
const ABotonOpciones = React.forwardRef<ABotonOpcionesRef, ABotonOpcionesProps>(
    function (
        props,
        ref
    ) {
        let visible = true;

        if (props.visible !== undefined) {
            visible = props.visible;
        }

        const [opcionesVisibles, fijarOpcionesVisibles] = React.useState<boolean>(false);
        const uuid = useId();
        const refABotonOpciones = React.useRef<HTMLButtonElement>(null);

        React.useImperativeHandle(ref, () => ({
            Refuuid: () => uuid,
            TipoAControl: () => 'ABotonOpciones',
            focus: () => {
                refABotonOpciones.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                refABotonOpciones.current?.focus()
            },
            foco: () => {
                refABotonOpciones.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                refABotonOpciones.current?.focus()
            }
        }));

        const RenderizarOpciones = () => {
            return (

                <ul
                    className={"abotonopciones-opciones"}
                    onMouseLeave={() => fijarOpcionesVisibles(false)}
                >
                    {
                        props.opciones.map((elemento, indice) => {
                            return (
                                <li
                                    key={"abotonopciones-opciones-" + uuid + "-" + indice}
                                    tabIndex={props.tabIndice || 0}
                                    className={props.classNameOpciones}
                                    style={props.estilosOpciones}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        fijarOpcionesVisibles(false);
                                        props.opcionSeleccionada(indice);
                                    }}
                                >
                                    {elemento}
                                </li>
                            )
                        })
                    }
                </ul>
            );
        };

        return (
            <div className={`abotonopciones-contenedor ${!visible ? "no-visible" : ""}`} key={uuid}>
                <button
                    ref={refABotonOpciones}
                    id={uuid}
                    type={"button"}
                    style={props.estilos}
                    className={"abotonopciones " + (props.className || "")}
                    tabIndex={props.tabIndice}
                    onClick={(e) => {
                        e.preventDefault();
                        fijarOpcionesVisibles(!opcionesVisibles);
                    }}
                >
                    {props.children}
                </button>
                {
                    opcionesVisibles &&
                    <RenderizarOpciones />
                }
            </div>
        );
    }
);

export default ABotonOpciones;
