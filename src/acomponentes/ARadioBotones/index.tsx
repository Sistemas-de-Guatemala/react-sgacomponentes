import React, { useMemo, useImperativeHandle } from 'react';
import './ARadioBotones.css';

import AControl from './../AUtileriaComponentes/AControl';

export interface IARadioOpciones {
    /** Texto que se mostrará a la par del ARadioBoton */
    texto: string;
    /** Valor del ARadioBoton */
    valor: string | number;
}

export interface IARadioBotonesProps {
    /** Si es falso, se esconde el ARadioBoton */
    visible?: boolean;
    /** Clase CSS */
    className?: string;
    /** Titulo que se mostrará encima del contenedor de los radiobutton */
    titulo?: string;
    /** Dirección en que se mostraran los ARadioButtons */
    direccion?: 'horizontal' | 'vertical';
    /** Items que se mostrarán en el contenedor del ARadioBoton */
    opciones: IARadioOpciones[];
    /**
     * Valor actual del ARadioBoton
     * @example
     * <ARadioBotones
     *  titulo={"Titulo del radio botón"}
     *  opciones={[
     *      { texto: "Opcion 1", valor: "1" },
     *      { texto: "Opcion 2", valor: "2" },
     *      { texto: "Opcion 3", valor: "3" },
     *  ]}
     *  valor={estadoValor}
     *  cambioSeleccion={(valor) => { fijarEstadoValor(valor); }}
     * />
     */
    valor?: string | number;
    /** Evento que se ejecuta cuando dan click en un ARadioBoton */
    cambioSeleccion: (valor: string | number) => void;
};

export interface IRefARadioBotones {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID */
    Refuuid: () => string;
}

const ARadioBotones = React.forwardRef<IRefARadioBotones, IARadioBotonesProps>(
    function ARadioBotonesInterno(
        props,
        ref
    ) {
        const uuid = useMemo(() => AControl.GenerarUuidControl(), []);

        useImperativeHandle(ref, () => ({
            TipoAControl: () => 'ARadioBotones',
            Refuuid: () => uuid
        }));

        let visible = true;

        if (props.visible !== undefined) {
            visible = props.visible;
        }

        return (
            <>{
                visible &&
                <fieldset
                    className={"aradiobotones " + (props.className || '')}
                >
                    <legend>{props.titulo}</legend>
                    <div
                        className={"aradiobotones-radios"}
                        style={{
                            display: 'flex',
                            flexDirection: (props.hasOwnProperty('direccion') ? (props.direccion === "horizontal" ? "row" : "column") : "row")
                        }}
                    >
                        {
                            props.opciones.map((opcion, indice) => {
                                return (
                                    <label key={uuid + "-aradioboton-lbd-" + indice}>
                                        <input
                                            type="radio"
                                            name={uuid + "-aradioboton-" + indice}
                                            value={opcion.valor}
                                            checked={opcion.valor === props.valor}
                                            onChange={() => { props.cambioSeleccion(opcion.valor); }}
                                        />
                                        {opcion.texto}
                                    </label>
                                );
                            })
                        }
                    </div>
                </fieldset>
            }
            </>
        )
    }
);

export default ARadioBotones;