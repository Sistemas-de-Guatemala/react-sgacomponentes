import React, { useId, useImperativeHandle } from 'react';
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
};

export interface ASeccionRef{
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
};

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

        return(
            <fieldset
                id={uuid}
                className={`aseccion ${props.className || ""}`}
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