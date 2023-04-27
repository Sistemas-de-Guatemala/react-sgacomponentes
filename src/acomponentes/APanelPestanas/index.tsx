import React, { useState, useId, useImperativeHandle, useEffect } from 'react';
import './APanelPestanas.css';

export interface IAPanelPestanaProps {
    /** Elementos del panel */
    children: React.ReactNode;
    /** Clase CSS del panel */
    className?: string;
    /** Estilos del panel */
    estilos?: React.CSSProperties;
};

export interface IAPanelPestanaRef {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
}

/**
 * Pestaña del APanelPestanas
 */
const APanelPestana = React.forwardRef<IAPanelPestanaRef, IAPanelPestanaProps>(
    function APanelPestanaInterno(
        props,
        ref
    ) {

        const uuid_pestana = useId();

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "APanelPestana",
            Refuuid: () => uuid_pestana
        }));

        return (
            <div
                key={uuid_pestana}
                id={`apanelpestana-${uuid_pestana}`}
                className={`apanelpestana-contenedor`}
            >
                <div
                    className={`apanelpestana-contenido ${props.className ? props.className : ""}`}
                    style={props.estilos}
                >
                    {props.children}
                </div>
            </div>
        );
    }
);

export interface IAPanelPestanasProps {
    /** Paneles */
    children: React.ReactElement<typeof APanelPestana>[];
    /** Clase del panel */
    className?: string;
    /** Estilos del Panel */
    estilos?: React.CSSProperties;
    /** Lista de pestañas */
    pestanas: Array<string | React.ReactNode>;
    /** Pestaña actual */
    pestanaActual: number;
    /** Evento que se ejecuta cuando hacen click sobre una pestaña */
    cambioPestana: (indicePestana: number) => void;
    /** Clase CSS de las pestañas */
    classNamePestana?: string;
    /** Estilos de las pestañas */
    estilosPestana?: React.CSSProperties;
    /** Clase CSS del contenedor de Paneles */
    classNamePestanasContenedor?: string;
    /** Estilos del contenedor de Paneles */
    estilosPestanasContenedor?: React.CSSProperties;
    /** Posiciona las pestañas en diferentes lugares, por defecto es izquierda */
    posPestanas?: "izquierda" | "derecha" | "centro";
}

export interface IAPanelPestanasRef {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
}

/**
 * Contenedor de APestañas
 */
const APanelPestanas = React.forwardRef<IAPanelPestanasRef, IAPanelPestanasProps>(
    function APanelPestanasInterior(
        props,
        ref
    ) {

        const uuid = useId();

        const CargaInicialPestanas = () => {
            const elementos = document.querySelectorAll(`[id='apanelpestanas-contenedor-${uuid}']>[class='apanelpestana-contenedor']`);
            if (elementos !== null) {
                for (let i = 0; i < elementos.length; i++) {
                    if (i === props.pestanaActual) {
                        //@ts-ignore
                        elementos[i].style.display = "block";
                    }
                    else {
                        //@ts-ignore
                        elementos[i].style.display = "none";
                    }
                }
            }
        };

        /**
         * Este useEffect carga la pestaña inicial
         */
        useEffect(() => {
            CargaInicialPestanas();
        }, []);

        useEffect(() => {
            CargaInicialPestanas();
        }, [props.pestanaActual]);

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "APanelPestanas",
            Refuuid: () => uuid
        }));

        const btnClickPestana = (indice: number): void => {
            if (props.cambioPestana !== undefined) {
                props.cambioPestana(indice);
            }
        };

        return (
            <div
                id={uuid}
                className={`apanelpestanas ${props.className || ""}`}
                style={props.estilos}
            >
                <ul
                    className={`apanelpestanas-navpestanas`}
                    style={{
                        justifyContent: (
                            props.posPestanas === undefined ? "flex-start" :
                                props.posPestanas === "izquierda" ? "flex-start" :
                                    props.posPestanas === "derecha" ? "flex-end" :
                                        props.posPestanas === "centro" ? "center" : "flex-start"
                        )
                    }}
                >
                    {
                        props.pestanas.map((elemento, indice) => {
                            return (
                                <li
                                    onClick={(e) => { e.preventDefault(); btnClickPestana(indice) }}
                                    key={uuid + "-" + indice}
                                    style={props.estilosPestana}
                                    className={`apanelpestanas-pestana apanelpestanas-no${uuid}-pestana ${(props.pestanaActual === indice) ? "apanelpestanas-pestana-seleccionada" : ""} ${props.classNamePestana || ""}`}
                                >
                                    {elemento}
                                </li>
                            )
                        })
                    }
                </ul>
                <div
                    id={`apanelpestanas-contenedor-${uuid}`}
                    className={`apanelpestanas-contenedor ${props.classNamePestanasContenedor || ""}`}
                    style={props.estilosPestanasContenedor}
                >
                    {props.children}
                </div>
            </div>
        );
    }
);

export {
    APanelPestanas,
    APanelPestana
};
