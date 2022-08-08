import React, { useMemo, useImperativeHandle } from "react";
import './ATitulosPantallas.css';
import AControl from './../AUtileriaComponentes/AControl';

export interface ITitulosPantallasProps {
    /** Titulo */
    titulo: string;
    /** Estilos del contenedor del titulo */
    estilos?: React.CSSProperties;
    /** Clase CSS del contenedor del titulo */
    className?: string;
    /** Estilos del titulo */
    estilosTitulo?: React.CSSProperties;
    /** Clase CSS del titulo */
    classNameTitulo?: string;
};

export interface ITitulosPantallasRef{
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
}

/**
 * Este componente es una etiqueta que muestra un titulo en pantalla
 */
const ATitulosPantallas = React.forwardRef<ITitulosPantallasRef, ITitulosPantallasProps>(
    function ATitulosPantallasInternon(
        props,
        ref
    ){
        const uuid = useMemo(() => AControl.GenerarUuidControl(), []);

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "ATitulosPantallas",
            Refuuid: () => uuid
        }));

        return(
            <div
                className={`atitulospantallas ${props.className || ""}`}
                style={props.estilos}
            >
                <h2
                    className={props.classNameTitulo || ""}
                    style={props.estilosTitulo}
                >
                    {props.titulo}
                </h2>
            </div>
        );
    }
);

export default ATitulosPantallas;