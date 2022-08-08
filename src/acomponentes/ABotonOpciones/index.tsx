import React from "react";
import './ABotonOpciones.css';
import AControl from './../AUtileriaComponentes/AControl';

export interface ABotonOpcionesProps{
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
    opciones: Array<string|number|React.ReactNode>;
    /** Devuelve el indice del control que fue clickado */
    opcionSeleccionada: (indiceSeleccionado: number) => void;
}

export interface ABotonOpcionesRef{
    Refuuid: () => string;
    TipoAControl: () => string;
    focus: () => void;
    foco: () => void;
};

const ABotonOpciones = React.forwardRef<ABotonOpcionesRef, ABotonOpcionesProps>(
    function(
        props,
        ref
    ){
        let visible = true;

        if(props.visible !== undefined) {
            visible = props.visible;
        }

        const [ opcionesVisibles, fijarOpcionesVisibles ] = React.useState<boolean>(false);
        const [ uuid, _ ] = React.useState<string>(AControl.GenerarUuidControl());
        const refABotonOpciones = React.useRef<HTMLButtonElement>(null);

        React.useImperativeHandle(ref, () => ({
            Refuuid: () => uuid,
            TipoAControl: () => 'ABotonOpciones',
            focus: () => refABotonOpciones.current?.focus(),
            foco: () => refABotonOpciones.current?.focus()
        }));

        const RenderizarOpciones = () => {
            return(
                <ul
                    className={"abotonopciones-opciones"}
                    onMouseLeave={() => fijarOpcionesVisibles(false)}
                >
                    {
                        props.opciones.map((elemento, indice) => {
                            return(
                                <li
                                    key={"abotonopciones-opciones-" + uuid + "-" + indice}
                                    tabIndex={props.tabIndice || 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        fijarOpcionesVisibles(false);
                                        props.opcionSeleccionada(indice);
                                    }}
                                >
                                    {elemento}
                                </li>
                            )
                        })
                    }
                </ul>
            );
        };

        if(visible){
            return (
                <>
                    <button
                        ref={refABotonOpciones}
                        id={uuid}
                        type={"button"}
                        style={props.estilos}
                        className={"abotonopciones " + (props.className || "")}
                        tabIndex={props.tabIndice}
                        onClick={(e) => {
                            e.preventDefault();
                            fijarOpcionesVisibles(!opcionesVisibles);
                        }}
                    >
                        {props.children}
                    </button>
                    {
                        opcionesVisibles &&
                        <RenderizarOpciones />
                    }
                </>
            );
        }
        else{
            return null;
        }
    }
);

export default ABotonOpciones;