import React, { useMemo, useImperativeHandle, useId } from 'react';
import './ALogoCarga.css';

export interface ALogoCargaProps {
    /** Si es falso, el logo carga se esconde */
    visible: boolean;
    /** Clase CSS del logo carga */
    className?: string;
    /** Estilos del Logo carga */
    estilos?: React.CSSProperties;
    /** Texto que se muestra debajo del logo girando */
    texto?: string;
    /** Imagen o gif que se mostrará en el logo de carga, está propiedad va a dar a una propiedad src de un img */
    imagen?: string;
    /** Texto alternativo de la imagen cuando está cargando */
    textoAlternativoImagen?: string;
};

export interface ALogoCargaRef {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID */
    Refuuid: () => string;
};

/**
 * Componente de logo de carga
 */
const ALogoCarga = React.forwardRef<ALogoCargaRef, ALogoCargaProps>(
    function ALogoCargaInterno(
        props,
        ref
    ) {

        const uuid = useId();

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
                                    props.imagen &&
                                    <div className='alogocarga-imagen'>
                                        <img src={props.imagen} alt={props.textoAlternativoImagen || "Logo de carga"} />
                                    </div>
                                }

                                {
                                    !props.imagen &&
                                    <div className={"alogocarga-lds-ellipsis"}><div></div><div></div><div></div><div></div></div>
                                }

                                <div className='alogocarga-texto'>
                                    {props.texto || "Cargando..."}
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
);

export default ALogoCarga;