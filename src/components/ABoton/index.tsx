import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import './ABoton.css';

import AControl from './../AUtileriaComponentes/AControl';

export interface ABotonProps {
    /** Renderiza objetos dentro del aboton */
    children: React.ReactNode;
    /** Evento click del aboton */
    botonPresionado: (evento: React.MouseEvent | undefined) => void;
    /** Si es false el aboton se oculta */
    visible?: boolean;
    /** Estilos del aboton */
    estilos: React.CSSProperties;
    /** clase CSS o SCSS del aboton */
    className?: string;
    /** si es submit hará postback */
    tipoBoton?: "button" | "submit" | "reset";
    /** Color del aboton */
    tipoBotonColor?: "primario" | "secundario" | "ok" | "peligro" | "link";
    /** Indice del html en el aboton */
    tabIndice?: number;
    /** Si es falso el aboton se deshabilita */
    habilitado?: boolean;
    /** Pone el foco en el aboton */
    autoFocus?: boolean;
    /** Pone el foco en el aboton */
    autoFoco?: boolean;
}

export interface ABotonRef {
    Refuuid: () => string;
    TipoAControl: () => string;
    focus: () => void;
    foco: () => void;
}

const ABoton = React.forwardRef<ABotonRef, ABotonProps>(
    function ABotonInterno(
        props,
        ref
    ) {
        const [ visible, fijarVisible ] = useState(true);
        const refABoton = useRef<HTMLButtonElement>(null);
        const [ uuid, _ ] = useState<string>(AControl.GenerarUuidControl());

        useEffect(() => {
            if(props.hasOwnProperty('visible')) {
                fijarVisible(props.visible || true);
            }
        }, []);

        useEffect(() => {
            if(props.hasOwnProperty('visible')) {
                fijarVisible(props.visible || true);
            }
        }, [props.visible]);

        useImperativeHandle(ref, () => ({
            Refuuid: () => uuid,
            TipoAControl: ():string => "ABoton",
            focus: ():void => refABoton.current?.focus(),
            foco: ():void => refABoton.current?.focus()
        }));


        let tipoBotonColor = props.tipoBotonColor || "primario";

        return (
            <>
                {
                    visible &&
                    <button
                        id={uuid}
                        ref={refABoton}
                        className={`aboton ${tipoBotonColor} ${props.className || ""} ` + (props.hasOwnProperty('habilitado') ? props.habilitado ? "" : "aboton-inhabilitado" : "")}
                        type={props.tipoBoton || "button"}
                        style={props.estilos}
                        onClick={props.botonPresionado}
                        tabIndex={props.tabIndice}
                        disabled={(props.hasOwnProperty("habilitado") ? !props.habilitado : false)}
                        autoFocus={props.autoFocus || props.autoFoco}
                    >
                        {props.children}
                    </button>
                }
            </>
        );
    }
);

export default ABoton;