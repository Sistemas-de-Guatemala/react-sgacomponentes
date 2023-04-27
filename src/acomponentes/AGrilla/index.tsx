import React, { useId } from 'react'
import './../estilosgenerales.css'
import './AGrilla.css'

export interface IAColProps{
    /** Hijos del ACol */
    children: React.ReactNode
    /** Tamaño de la columna en extra pequeñas */
    xs?: number
    /** Tamaño de la columna en pantallas pequeñas */
    sm?: number
    /** Tamaño de la columna en pantallas medianas */
    md?: number
    /** Tamaño de la columna en pantallas grandes */
    xl?: number
    /** Clase CSS del ACol */
    className?: string
    /** Estilos del ACol */
    estilos?: React.CSSProperties
    /** Indica si el componente es visible o no */
    visible?: boolean
}

/**
 * Componente de columna para la grilla
 */
const ACol = (props: IAColProps) => {

    const uuid = useId()

    return (
        <div key={uuid} style={props.estilos} className={`acol ${props.hasOwnProperty('visible') ? !props.visible ? "no-visible" : "" : ""} ${props.className ? props.className : ""} ${props.xs ? `col-xs-${props.xs}` : ""} ${props.sm ? `col-sm-${props.sm}` : ""} ${props.md ? `col-md-${props.md}` : ""} ${props.xl ? `col-xl-${props.xl}` : ""}`}>
            {props.children}
        </div>
    );
}

export interface IAFilaProps{
    /** Hijos del AFila */
    children: React.ReactNode
    /** Clase CSS del AFila */
    className?: string
    /** Estilos del AFila */
    estilos?: React.CSSProperties
    /** Indica si el componente es visible o no */
    visible?: boolean
}

/** Componente de fila para la grilla */
const AFila = (props: IAFilaProps) => {

    const uuid = useId()

    return (
        <div key={uuid} className={`afila ${props.hasOwnProperty('visible') ? !props.visible ? "no-visible" : "" : ""} ${props.className ? props.className : ""}`} style={props.estilos}>
            {props.children}
        </div>
    );
}

export {
    AFila,
    ACol
}