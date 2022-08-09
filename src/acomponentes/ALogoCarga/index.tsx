import React, { useMemo, useImperativeHandle } from 'react';
import './ALogoCarga.css';
import AControl from './../AUtileriaComponentes/AControl';

export interface ALogoCargaProps {
    /** Si es falso, el logo carga se esconde */
    visible: boolean;
    /** Clase CSS del logo carga */
    className?: string;
    /** Estilos del Logo carga */
    estilos?: React.CSSProperties;
    /** Texto que se muestra debajo del logo girando */
    texto?: string;
};

export interface ALogoCargaRef {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID */
    Refuuid: () => string;
};

const ALogoCarga = React.forwardRef<ALogoCargaRef, ALogoCargaProps>(
    function ALogoCargaInterno(
        props,
        ref
    ) {

        const uuid = useMemo(() => AControl.GenerarUuidControl(), []);

        useImperativeHandle(ref, () => ({
            TipoAControl: () => 'ALogoCarga',
            Refuuid: () => uuid
        }));

        return (
            <>
                {
                    props.visible &&
                    <div
                        className={"alogocarga " + (props.className || "")}
                        style={props.estilos}
                        id={uuid}
                    >
                        <div className='alogocarga-contenedor'>
                            <div>
                                {
                                    /*<div className='alogocarga-imagen'>
                                        <img src={SiscoopLogo} alt='Logo de carga' />
                                    </div>*/
                                }
                                <div className={"alogocarga-lds-ellipsis"}><div></div><div></div><div></div><div></div></div>
                                {
                                    props.texto &&
                                    <div className='alogocarga-texto'>
                                        {props.texto}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
);

export default ALogoCarga;