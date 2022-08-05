import React, { useRef, useMemo, useImperativeHandle } from "react";
import './ACheckBox.css';
import AControl from './../AUtileriaComponentes/AControl';

export interface IPropsACheckBox {
    /** Indica si el componente está visible o no */
    visible?: boolean;
    /** Clase CSS */
    className?: string;
    /** Estilos de ACheckBox */
    estilos?: React.CSSProperties;
    /** Texto que se posiciona a la par del ACheckBox */
    texto?: string;
    /** Valor del ACheckBox */
    valor?: boolean;
    /** Tab Indice del AControl */
    tabIndice?: number;
    /** Evento que se ejecuta cuando dan click en el ACheckBox */
    cambioCheck?: (valor: boolean) => void;
    /** Si es falso el ACheckBox no hará nada */
    habilitado?: boolean;
    /** Evento que se ejecuta cuando el cursor se va del ACheckBox */
    quitoFoco?: (evento: React.FocusEvent<HTMLInputElement, Element>) => void;
    /** Evento que se ejecuta cuando el cursor se va del ACheckBox */
    quitoFocus?: (evento: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export interface IRefACheckBox {
    /** Obtiene el tipo ATipoControl */
    TipoAControl: () => string;
    /** Obtiene el uuid del AControl */
    Refuuid: () => string;
    /** Establece el foco en el AControl */
    focus: () => void;
    /** Establece el foco en el AControl */
    foco: () => void;
}

const ACheckBox = React.forwardRef<IRefACheckBox, IPropsACheckBox>(
    function (
        props,
        ref
    ) {
        const visible: boolean = props.visible || true;
        const uuid = useMemo(() => AControl.GenerarUuidControl(), []);
        const refACheckBox = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "ACheckBox",
            Refuuid: () => uuid,
            focus: () => {
                let habilitado = props.habilitado || true;
                if (habilitado) {
                    refACheckBox.current?.focus();
                }
            },
            foco: () => {
                let habilitado = props.habilitado || true;
                if (habilitado) {
                    refACheckBox.current?.focus();
                }
            }
        }));

        const checkBoxCambia = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();

            let habilitado = props.habilitado || true;

            if (props.cambioCheck) {
                if(habilitado){
                    props.cambioCheck(e.target.checked);
                }
            }
        };

        const QuitoFoco = (e: React.FocusEvent<HTMLInputElement, Element>) => {
            e.preventDefault();
            if (props.quitoFoco) {
                props.quitoFoco(e);
            }

            if (props.quitoFocus) {
                props.quitoFocus(e);
            }
        }

        if (!visible) {
            return null;
        }
        else {
            return (
                <label
                    className={'acheckbox ' + (props.className || '') + " " + (props.hasOwnProperty('habilitado') && !props.habilitado ? 'acheckbox-inhabilitado' : '')}
                    htmlFor={uuid}
                    style={props.estilos}
                >
                    {props.texto}
                    <input
                        ref={refACheckBox}
                        type="checkbox"
                        name={uuid}
                        id={uuid}
                        checked={props.valor}
                        onChange={(e) => checkBoxCambia(e)}
                        tabIndex={props.tabIndice}
                        onBlur={QuitoFoco}
                    />
                    <span className='checkmark'></span>
                </label>
            );
        }
    }
);

export default ACheckBox;