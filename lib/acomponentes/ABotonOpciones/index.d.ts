import React from "react";
import './ABotonOpciones.css';
export interface ABotonOpcionesProps {
    children: React.ReactNode;
    /** Si es falso el control de oculta */
    visible?: boolean;
    /** Estilos CSS */
    estilos?: React.CSSProperties;
    /** Clase CSS */
    className?: string;
    /** Indice del control */
    tabIndice?: number;
    /** Opciones que se mostrarán en el abotonopciones */
    opciones: Array<string | number | React.ReactNode>;
    /** Devuelve el indice del control que fue clickado */
    opcionSeleccionada: (indiceSeleccionado: number) => void;
}
export interface ABotonOpcionesRef {
    Refuuid: () => string;
    TipoAControl: () => string;
    focus: () => void;
    foco: () => void;
}
declare const ABotonOpciones: React.ForwardRefExoticComponent<ABotonOpcionesProps & React.RefAttributes<ABotonOpcionesRef>>;
export default ABotonOpciones;
