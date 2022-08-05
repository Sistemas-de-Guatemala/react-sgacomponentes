import React, { useImperativeHandle } from "react";
import './APanel.css';

export interface IPropsAPanel {
    /** Muestra u oculta el APanel */
    visible: boolean;
    /** Clase CSS del fondo */
    classNameFondo?: string;
    /** Si es true entonces la transparencia del APanel será del 100% */
    transparente?: boolean;
    /** Clase CSS */
    className?: string;
    /** Clase CSS del Titulo */
    classNameTitulo?: string;
    /** Titulo del APanel */
    titulo?: string;
    /** Elementos dentro del APanel */
    children?: React.ReactNode;
}

export interface IRefAPanel {
    TipoAControl: () => string;
}

const APanel = React.forwardRef<IRefAPanel, IPropsAPanel>(
    function APanelInterno(
        props,
        ref
    ) {

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "APanel"
        }));

        return (
            <>
                {
                    props.visible &&
                    <div
                        className={"apanel-fondo " + (props.classNameFondo || "")}
                        style={{
                            background: (props.transparente || false) ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
                        }}
                    >
                        <div
                            className={"apanel " + props.className}
                        >
                            <div
                                className={"apanel-titulo " + props.classNameTitulo}
                            >
                                <p>{props.titulo}</p>
                            </div>
                            <div
                                className={"apanel-contenido " + props.className}
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