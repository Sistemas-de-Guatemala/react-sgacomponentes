import React, { useId } from "react"
import './../estilosgenerales.css'
import './ABoton.css'

export interface ABotonProps {
    /** Renderiza objetos dentro del aboton */
    children: React.ReactNode;
    /** Evento click del aboton */
    botonPresionado: (evento: React.MouseEvent | undefined) => void;
    /** Si es false el aboton se oculta */
    visible?: boolean;
    /** Estilos del aboton */
    estilos?: React.CSSProperties;
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
    /** UUID del ACompontente */
    Refuuid: () => string;
    /** Tipo de AComponente */
    TipoAControl: () => string;
    /** Pone el foco en el aboton */
    focus: () => void;
    /** Pone el foco en el aboton */
    foco: () => void;
}

/**
 * Componente de Boton con diferentes colores y personalizable
 */
const ABoton = React.forwardRef<ABotonRef, ABotonProps>(
    function ABotonInterno(
        props,
        ref
    ) {
        const refABoton = React.useRef<HTMLButtonElement>(null);
        const uuid = useId();

        let visible = true;

        if (props.visible !== undefined) {
            visible = props.visible;
        }

        React.useImperativeHandle(ref, () => ({
            Refuuid: () => uuid,
            TipoAControl: (): string => "ABoton",
            focus: (): void => {
                refABoton.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                refABoton.current?.focus()
            },
            foco: (): void => {
                refABoton.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                refABoton.current?.focus()
            }
        }));


        let tipoBotonColor = props.tipoBotonColor || "primario";

        return (
            <button
                id={uuid}
                ref={refABoton}
                className={`aboton aboton-${tipoBotonColor} ${props.className || ""} ${visible ? "" : "no-visible"} ` + (props.hasOwnProperty('habilitado') ? props.habilitado ? "" : "aboton-inhabilitado" : "")}
                type={props.tipoBoton || "button"}
                style={props.estilos}
                onClick={props.botonPresionado}
                tabIndex={props.tabIndice}
                disabled={(props.hasOwnProperty("habilitado") ? !props.habilitado : false)}
                autoFocus={props.autoFocus || props.autoFoco}
            >
                {props.children}
            </button>
        );
    }
);

export default ABoton;