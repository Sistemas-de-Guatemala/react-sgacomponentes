import React, { useImperativeHandle } from "react";
import './AEtiqueta.css';

export interface IPropsAEtiqueta{
    /** Texto a mostrar en pantalla */
    children: React.ReactNode;
    /** Si es falso el AEtiqueta se oculta */
    visible?: boolean;
    /**
     * UUID del control con el que se enlazará
     * @example
     * <AEtiqueta para={"320353dg4v-345fnbb-35se4t45-45363"}>Hola Mundo</AEtiqueta>
     */
    para?: string;
    /** Clase CSS */
    className?: string;
    /** Estilos */
    estilos?: React.CSSProperties;
};

export interface IRefAEtiqueta{
    TipoAControl: () => string;
};

const AEtiqueta = React.forwardRef<IRefAEtiqueta, IPropsAEtiqueta>(
    function(
        props,
        ref
    ){

        const visible = props.visible || true;

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "AEtiqueta"
        }));

        return(
            <label
                {...props}
                style={props.estilos}
                className={`aetiqueta ${props.className || ""}`}
                htmlFor={props.para}
            >
                {props.children}
            </label>
        );
    }
);

export default AEtiqueta;