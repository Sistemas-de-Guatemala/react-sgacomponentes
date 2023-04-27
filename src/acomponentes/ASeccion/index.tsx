import React, { useId, useImperativeHandle } from 'react';
import './../estilosgenerales.css'
import './ASeccion.css';

export interface ASeccionProps {
    /** Objetos dentro del aseccion */
    children: React.ReactNode;
    /** Titulo del ASeccion */
    titulo: string;
    /** Clase CSS */
    className?: string;
    /** Estilos CSS */
    estilos?: React.CSSProperties;
    /** Clase CSS del titulo */
    classNameTitulo?: string;
    /** Estilos del titulo */
    estilosTitulo?: React.CSSProperties;
    /** Si es falso el control de oculta */
    visible?: boolean;
};

export interface ASeccionRef{
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
};

/**
 * Componente que dibuja una seccion con un titulo
 */
const ASeccion = React.forwardRef<ASeccionRef, ASeccionProps>(
    function ASeccionInterno(
        props,
        ref
    ){
        const uuid = useId();

        useImperativeHandle(ref, () => ({
            TipoAControl: () => 'ASeccion',
            Refuuid: () => uuid
        }));

        let visible = true;

        if (props.visible !== undefined) {
            visible = props.visible;
        }

        return(
            <fieldset
                id={uuid}
                className={`aseccion ${props.className || ""} ${!visible ? "no-visible" : ""}`}
                style={props.estilos}
            >
                <legend
                    className={`aseccion-titulo ${props.classNameTitulo || ""}`}
                    style={props.estilosTitulo}
                >
                    {props.titulo}
                </legend>
                {props.children}
            </fieldset>
        );
    }
);

export default ASeccion;