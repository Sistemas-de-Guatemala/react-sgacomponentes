import React, { useId, useState, useImperativeHandle, useRef } from "react";
import './ACajaTexto.css';

import AEtiqueta from './../AEtiqueta';

export interface IPropsACajaTexto {
    /** Si es falso el ACajaTexto se oculta */
    visible?: boolean;
    /** Texto que se muestra en el ACajaTexto */
    valor?: string;
    /** Evento que se ejecuta cada vez que se teclea algo */
    cambioTexto?: (valor: string) => void;
    /** Titulo que se muestra arriba del ACajaTexto */
    titulo?: string;
    /** El icono se coloca a la derecha del ACajaTexto */
    icono?: React.ReactNode;
    /** Le asigna estilos directamente al contenedor del ACajaTexto */
    estilos?: React.CSSProperties;
    /**
     * Funciona comunmente como un input html
     * @example
     * <input type="date" />
     */
    tipo?: string;
    /** Si es true, mostrará un mensaje de alerta en la pantalla */
    requerido?: boolean;
    /** Recibe una expresión regular que se validará en el ACajaTexto indicando que no es válido */
    expRegular?: RegExp;
    /** Clase CSS del contenedor */
    className?: string;
    /** Clase CSS del Titulo */
    classNameTitulo?: string;
    /** Estilos del titulo */
    estilosTitulo?: React.CSSProperties;
    /** Clase CSS del label de Error */
    classNameError?: string;
    /** Estilos del label de Error */
    estilosError?: React.CSSProperties;
    /** Clase CSS del Icono */
    classNameIcono?: string;
    /** Estilos del icono */
    estilosIcono?: React.CSSProperties;
    /** Clase CSS del Input */
    classNameACajaTexto?: string;
    /** Estilos del input */
    estilosACajaTexto?: React.CSSProperties;
    /** Si es falso el input no dejará que se escriba sobre el */
    habilitado?: boolean;
    /** Si es true pone el foco sobre el ACajaTexto */
    autoFocus?: boolean;
    /** Si es true, pone el foco sobre el ACajaTexto */
    autoFoco?: boolean;
    /** Indice el AControl */
    tabIndice?: number;
    /** Evento que se ejecuta cuando el cursor se va del ACajaTexto */
    quitoFoco?: () => void;
    /** Evento que se ejecuta cuando el cursor se va del ACajaTexto */
    quitoFocus?: () => void;
    /** Texto que se muestra cuando no hay texto sobre el ACajaTexto */
    placeholder?: string;
    /** Listado de palabras que funcionaran como Autocompletado */
    autoCompletado: string[];
}

export interface IRefACajaTexto {
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

const ACajaTexto = React.forwardRef<IRefACajaTexto, IPropsACajaTexto>(
    function ACajaTextoInterno (
        props,
        ref
    ) {
        const [lbdError, fijarLbdError] = useState<string>("");
        const txtRef = useRef<HTMLInputElement>(null);
        const uuid: string = useId();

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
                    txtRef.current?.focus();
                }
            },
            foco: () => {
                let habilitado = true;

                if(props.habilitado !== undefined){
                    habilitado = props.habilitado;
                }

                if (habilitado) {
                    txtRef.current?.focus();
                }
            }
        }));

        let visible: boolean = true;

        if(props.visible !== undefined) {
            visible = props.visible;
        }

        const TituloCajaTexto = () => {
            if (props.titulo) {
                return (
                    <AEtiqueta
                        para={uuid}
                        estilos={props.estilosTitulo}
                        className={props.classNameTitulo}
                    >
                        {props.titulo}
                    </AEtiqueta>
                );
            }
            else {
                return null;
            }
        };

        const TextoError = () => {
            if (lbdError === "") {
                return null;
            }
            else {
                return (
                    <AEtiqueta
                        className={`acajatexto-error ${props.classNameError || ""}`}
                        estilos={props.estilosError}
                    >
                        {lbdError}
                    </AEtiqueta>
                )
            }
        }

        const cambioTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();

            if(props.cambioTexto) {
                props.cambioTexto(e.target.value);
            }

            if(props.expRegular) {
                if(props.expRegular.test(e.target.value)) {
                    fijarLbdError("");
                }
                else{
                    fijarLbdError("El texto tiene caracteres no válidos");
                }
            }
        }

        const QuitoFoco = (e: React.FocusEvent<HTMLInputElement, Element>) => {
            e.preventDefault();
            if (props.quitoFoco) {
                props.quitoFoco();
            }

            if (props.quitoFocus) {
                props.quitoFocus();
            }
        }

        const Icono = () => {
            if (props.icono) {
                return (
                    <div
                        className={`acajatexto-contenedor-icono ${props.classNameIcono || ""}`}
                        style={props.estilosIcono}
                    >
                        {props.icono}
                    </div>
                );
            }
            else {
                return null;
            }
        }

        const Autocompletado = () => {
            if(props.autoCompletado !== undefined){
                return(
                    <datalist id={`acajatexto-autocompletado-${uuid}`}>
                        {

                            props.autoCompletado.map((elemento, indice) => {
                                return(
                                    <option
                                        key={`acajatexto-autocompletado-opcion-${uuid}-${indice}`}
                                        value={elemento}
                                    ></option>
                                )
                            })

                        }
                    </datalist>
                );
            }
            else{
                return null;
            }
        };

        if (!visible) {
            return null;
        }
        else {
            return (
                <div
                    className={`acajatexto ${props.className || ""}`}
                    style={props.estilos}
                >
                    <TituloCajaTexto />
                    <div
                        className={"acajatexto-contenedor"}
                        style={{ width: "100%" }}
                    >
                        <input
                            {...props}
                            required={props.requerido}
                            value={props.valor}
                            type={props.tipo || "text"}
                            name={uuid}
                            id={uuid}
                            className={`acajatexto-txt ${props.classNameACajaTexto || ""} ${(props.habilitado || true) ? "" : "acajatexto-inhabilitado"}`}
                            style={props.estilosACajaTexto}
                            onChange={cambioTexto}
                            autoFocus={props.autoFocus || props.autoFoco}
                            tabIndex={props.tabIndice}
                            disabled={!(props.habilitado || true)}
                            onBlur={QuitoFoco}
                            pattern={props.expRegular?.toString()}
                            placeholder={props.placeholder}
                            list={(props.autoCompletado !== undefined) ? `acajatexto-autocompletado-${uuid}` : undefined}
                        />
                        <Icono />
                    </div>
                    <Autocompletado />
                    <TextoError />
                </div>
            );
        }
    }
)

export default ACajaTexto;
