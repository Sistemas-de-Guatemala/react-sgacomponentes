import React, { useImperativeHandle, useId } from "react";
import './APanel.css';

export interface IPropsAPanel {
    /** Muestra u oculta el APanel */
    visible: boolean;
    /** Estilos del fondo */
    estilosFondo?: React.CSSProperties;
    /** Clase CSS del fondo */
    classNameFondo?: string;
    /** Si es true entonces la transparencia del APanel será del 100% */
    transparente?: boolean;
    /** Estilos del APanel */
    estilos?: React.CSSProperties;
    /** Clase CSS */
    className?: string;
    /** Estilos del titulo */
    estilosTitulo?: React.CSSProperties;
    /** Clase CSS del Titulo */
    classNameTitulo?: string;
    /** Titulo del APanel */
    titulo?: string;
    /** Estilos contenido */
    estilosContenido?: React.CSSProperties;
    /** Clase CSS contenido */
    classNameContenido?: string;
    /** Elementos dentro del APanel */
    children?: React.ReactNode;
}

export interface IRefAPanel {
    TipoAControl: () => string;
    Refuuid: () => string;
}

const APanel = React.forwardRef<IRefAPanel, IPropsAPanel>(
    function APanelInterno(
        props,
        ref
    ) {

        const uuid = useId();

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "APanel",
            Refuuid: () => uuid
        }));

        return (
            <>
                {
                    props.visible &&
                    <div
                        id={uuid}
                        className={"apanel-fondo " + (props.classNameFondo || "")}
                        style={{
                            ...(props.estilosFondo !== undefined ? props.estilosFondo : {}),
                            background: (props.transparente || false) ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'
                        }}
                    >
                        <div
                            className={"apanel " + (props.className || "")}
                            style={props.estilos}
                        >
                            <div
                                className={"apanel-titulo " + (props.classNameTitulo || "")}
                                style={props.estilosTitulo}
                            >
                                <p>{props.titulo}</p>
                            </div>
                            <div
                                className={"apanel-contenido " + (props.classNameContenido || "")}
                                style={props.estilosContenido}
                            >
                                {props.children}
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
);

export default APanel;