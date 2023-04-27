import React, { useId, useImperativeHandle, useState, useRef } from 'react'
import './../estilosgenerales.css'
import './ACajaTexto.css'

interface ITituloACajaTextoProps {
    /** Clase CSS del titulo del ACajaTexto */
    className?: string
    /** Estilos del titulo del ACajaTexto */
    estilos?: React.CSSProperties
    /** Atributo for del titulo del ACajaTexto */
    para?: string
    /** Contenido del titulo del TituloACajaTexto */
    children: React.ReactNode
}

const TituloACajaTexto = (
    props: ITituloACajaTextoProps
): JSX.Element => {

    return(
        <label
            className={`acajatexto-titulo ${props.className}`}
            style={props.estilos}
            htmlFor={props.para}
        >{props.children}</label>
    );
};

interface IIconoACajaTextoIzquierdaProps {
    /** Clase CSS del icono */
    className?: string
    /** Estilos del icono */
    estilos?: React.CSSProperties
    /** Contenido del icono */
    children?: React.ReactNode
}

const IconoACajaTextoIzquierda = (props: IIconoACajaTextoIzquierdaProps) => {
    return(
        <div className={`acajatexto-icono-izquierda ${props.className}`} style={props.estilos}>{props.children}</div>
    )
}

interface IIconoACajaTextoDerechaProps {
    /** Clase CSS del icono */
    className?: string
    /** Estilos del icono */
    estilos?: React.CSSProperties
    /** Contenido del icono */
    children?: React.ReactNode
}

const IconoACajaTextoDerecha = (props: IIconoACajaTextoDerechaProps) => {
    return(
        <div className={`acajatexto-icono-derecha ${props.className}`} style={props.estilos}>{props.children}</div>
    )
}

interface IMaxCaracteresACajaTextoProps {
    /** Clase CSS del max caracteres */
    className?: string
    /** Estilos del max caracteres */
    estilos?: React.CSSProperties
    /** Maximo de caracteres a mostrar */
    maxCaracteres: number
    /** Caracteres actuales */
    caracteresActuales: number
}

const MaxCaracteresACajaTexto = (props: IMaxCaracteresACajaTextoProps) => {
    return(
        <div className={`acajatexto-max-caracteres ${props.className || ""}`} style={props.estilos}>Carácteres {props.caracteresActuales}/{props.maxCaracteres}</div>
    )
}

interface IEtiquetaErrorACajaTexto{
    /** Clase CSS de la etiqueta de error */
    className?: string
    /** Estilos de la etiqueta de error */
    estilos?: React.CSSProperties
    /** Mensaje de error */
    msjError?: string
}


const EtiquetaErrorACajaTexto = (props: IEtiquetaErrorACajaTexto) => {
    return(
        <div className={`acajatexto-error ${props.className || ""}`} style={props.estilos}>{props.msjError}</div>
    )
}

export interface IACajaTextoProps {
    /** Clase CSS del contenedor del ACajaTexto */
    classNameContenedor?: string
    /** Estilos del contenedor del acajatexto */
    estilosContenedor?: React.CSSProperties
    /** Titulo del ACajaTexto, si existe se renderiza, si no solo muestra el input */
    titulo?: string | JSX.Element
    /** Clase CSS del titulo del ACajaTexto */
    classNameTitulo?: string
    /** Estilos del titulo del ACajaTexto */
    estilosTitulo?: React.CSSProperties
    /** Valor del ACajaTexto */
    valor: string
    /** Funcion que se ejecuta cuando cambia el valor del ACajaTexto */
    cambioTexto: (valor: string) => void
    /** Clase CSS del ACajaTexto */
    classNameACajaTexto?: string
    /** Clase CSS del ACajaTexto */
    estilosACajaTexto?: React.CSSProperties
    /** Indica si el ACajaTexto es visible o no */
    visible?: boolean
    /** Indica si el ACajaTexto está deshabilitado o no */
    habilitado?: boolean
    /** Icono que se muestra a la izquierda del ACajaTexto */
    iconoIzquierda?: JSX.Element
    /** Texto por defecto en el ACajaTexto cuando está vacío */
    placeholder?: string
    /** Lista de opciones para el autoCompletado */
    autoCompletado?: string[]
    /** Se ejecuta cuando el usuario quita el foco del campo */
    quitoFoco?: () => void
    /** Se ejecuta cuando el usuario quita el focus del campo */
    quitoFocus?: () => void
    /** TabIndex del ACajaTexto */
    tabIndice?: number
    /** Indica si el ACajaTexto es requerido o no */
    requerido?: boolean
    /** Estilos del icono de la izquierda */
    estilosIconoIzquierda?: React.CSSProperties
    /** Clase CSS del icono de la izquierda */
    classNameIconoIzquierda?: string
    /** Icono de la Derecha */
    iconoDerecha?: JSX.Element
    /** Estilos del icono de la derecha */
    estilosIconoDerecha?: React.CSSProperties
    /** Clase CSS del icono de la derecha */
    classNameIconoDerecha?: string
    /** Maximo de caracteres que se escribiran */
    maxCarateres?: number
    /** Indica si se muestra el contador de caracteres */
    mostrarMaxCaracteres?: boolean
    /** Clase CSS del mensaje de error */
    classNameError?: string
    /** Estilos del mensaje de error */
    estilosError?: React.CSSProperties
    /** Mensaje de error */
    msjError?: string
    /** Tipo de entrada del ACajaTexto */
    tipoEntrada?: "text" | "password" | "number" | "email" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color"
    /** Indica si el ACajaTexto tiene el foco o no */
    autoFoco?: boolean
    /** Retorna el nombre de la tecla presionada */
    eventoTeclaPresionada?: (e: string) => void
}

export interface IACajaTextoRef{
    /** Retorna que tipo de AControl es */
    TipoAControl: () => string;
    /** Devuelve el ID del ACajaTexto */
    Refuuid: () => string;
    /** Pone un texto de error debajo del ACajaTexto */
    FijarMsjError: (msj: string) => void;
    /** Pone el foco sobre el ACajaTexto */
    focus: () => void;
    /** Pone el foco sobre el ACajaTexto */
    foco: () => void;
}

/**
 * Componente que representa una caja de texto con un titulo, iconos, validaciones y con diseño preestablecido para el proyecto
 */
const ACajaTexto = React.forwardRef<IACajaTextoRef, IACajaTextoProps>(
    function ACajaTextoInterno(
        props,
        ref
    ){
        const uuid = useId()
        const txtRef = useRef<HTMLInputElement>(null);
        const [ lbdError, fijarLbdError ] = useState<string>("")

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "ACajaTexto",
            Refuuid: () => uuid,
            FijarMsjError: (msj: string) => fijarLbdError(msj),
            focus: () => {
                let habilitado = true;

                if(props.habilitado !== undefined){
                    habilitado = props.habilitado;
                }

                if (habilitado) {
                    txtRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                    txtRef.current?.focus();
                }
            },
            foco: () => {
                let habilitado = true;

                if(props.habilitado !== undefined){
                    habilitado = props.habilitado;
                }

                if (habilitado) {
                    txtRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                    txtRef.current?.focus();
                }
            }
        }));

        const QuitoFoco = (e: React.FocusEvent<HTMLInputElement, Element>) => {
            e.preventDefault();
            if (props.quitoFoco) {
                props.quitoFoco();
            }

            if (props.quitoFocus) {
                props.quitoFocus();
            }
        }

        const cambioTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            props.cambioTexto(e.target.value)
        }

        const TeclaPresionada = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if(props.eventoTeclaPresionada){
                props.eventoTeclaPresionada(e.key)
            }
        }

        return (
            <div
                className={`acajatexto ${props.classNameContenedor || ""} ${props.hasOwnProperty('visible') ? props.visible ? "no-visible" : "" : ""}`}
                style={props.estilosContenedor}
            >
                {/** Titulo del ACajaTexto */}
                {
                    props.titulo && <TituloACajaTexto para={uuid} estilos={props.estilosTitulo} className={props.classNameTitulo}>{props.titulo}</TituloACajaTexto>
                }
                <div style={{ width: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
                    {/** Icono de la izquierda */}
                    { props.iconoIzquierda && <IconoACajaTextoIzquierda estilos={props.estilosIconoIzquierda} className={props.classNameIconoIzquierda}>{props.iconoIzquierda}</IconoACajaTextoIzquierda> }
                    {/** Input */}
                    <input
                        {...props}
                        key={uuid}
                        ref={txtRef}
                        id={uuid}
                        name={uuid}
                        value={props.valor}
                        onChange={cambioTexto}
                        style={props.estilosACajaTexto}
                        onBlur={QuitoFoco}
                        className={`acajatexto-input ${props.classNameACajaTexto || ""} ${ ((props.hasOwnProperty('msjError') && props.msjError !== "") || (lbdError !== "")) ? "acajatexto-conerror" : ""} ${props.hasOwnProperty('iconoIzquierda') ? "acajatexto-icono-izquierda-visible" : ""} ${props.hasOwnProperty('iconoDerecha') ? "acajatexto-icono-derecha-visible" : ""}`}
                        placeholder={props.placeholder}
                        disabled={!(props.hasOwnProperty('habilitado') ? props.habilitado : true)}
                        tabIndex={props.tabIndice}
                        required={props.requerido}
                        maxLength={props.maxCarateres}
                        list={(props.autoCompletado != undefined) ? `${uuid}-autocompletadoacajatexto` : undefined}
                        type={props.tipoEntrada || "text"}
                        autoComplete='off'
                        autoFocus={props.autoFoco}
                        onKeyDown={(e) => TeclaPresionada(e)}
                    />
                    {/** Icono de la derecha */}
                    {props.iconoDerecha && <IconoACajaTextoDerecha estilos={props.estilosIconoDerecha} className={props.classNameIconoDerecha}>{props.iconoDerecha}</IconoACajaTextoDerecha>}
                </div>
                {/** Contenedor del pie del acajatexto */}
                {
                    ((props.hasOwnProperty('msjError') && props.msjError !== "") || (lbdError !== "") || (props.maxCarateres && (props.hasOwnProperty('mostrarMaxCaracteres') ? props.mostrarMaxCaracteres : true))) &&
                    <div className={"acajatexto-contenedor-pie"}>
                        {/** Mensaje de error */}
                        { ((props.hasOwnProperty('msjError') && props.msjError !== "") || (lbdError !== "")) && <EtiquetaErrorACajaTexto className={props.classNameError} estilos={props.estilosError} msjError={props.msjError} />}
                        {/** Separador de cajitas de texto */}
                        <div></div>
                        {/** Max Caracteres */}
                        {props.maxCarateres && (props.hasOwnProperty('mostrarMaxCaracteres') ? props.mostrarMaxCaracteres : true) && <MaxCaracteresACajaTexto caracteresActuales={props.valor.length} maxCaracteres={props.maxCarateres || 0} />}
                    </div>
                }
                {/** Autocompletado lista */}
                {
                    (props.autoCompletado && props.autoCompletado.length > 0) &&
                    <datalist id={`${uuid}-autocompletadoacajatexto`}>
                        {
                            props.autoCompletado.map((item, indice) => {
                                return(
                                    <option key={`${uuid}-autocompletadoacajatexto-${indice}`} value={item} />
                                )
                            })
                        }
                    </datalist>
                }
            </div>
        )
    }
)

export default ACajaTexto