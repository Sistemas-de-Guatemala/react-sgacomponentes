import React from "react";
import './ABoton.css';
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
declare const ABoton: React.ForwardRefExoticComponent<ABotonProps & React.RefAttributes<ABotonRef>>;
export default ABoton;
