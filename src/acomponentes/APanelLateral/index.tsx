import React, { useId, useImperativeHandle } from 'react';
import './APanelLateral.css';

export interface IAPanelLateralProps {
    children: React.ReactNode;
    /** Si es falso el panel se oculta */
    visible: boolean;
    /**
     * Evento que se ejecuta cuando dan click en la X o se ejecuta algún otro evento para cerrar el apanel lateral
     * @param {boolean} visible Si es false el panel se oculta
     */
    cambioVisible?: (visible: boolean) => void;
    /** Si es transparente no mostrará un fondo */
    transparente?: boolean;
    /** Titulo que se mostrará en el panel lateral */
    titulo: string;
    /** Estilos del fondo */
    estilosFondo?: React.CSSProperties;
    /** Clase CSS del fondo */
    classNameFondo?: string;
    /** Estilos del panel lateral */
    estilos?: React.CSSProperties;
    /** Clase CSS del panel lateral */
    className?: string;
    /** Estilos del titulo */
    estilosTitulo?: React.CSSProperties;
    /** Clase CSS del titulo */
    classNameTitulo?: string;
    /** Estilos del contenedor de datos */
    estilosContenedor?: React.CSSProperties;
    /** Clase CSS del contenedor de datos */
    classNameContenedor?: string;
};

export interface IPanelLateralRef {
    /** Tipo de AControl */
    TipoAControl: () => string;
    /** UUID del AControl */
    Refuuid: () => string;
    /** Función que oculta el apanellateral */
    ocultar: () => void;
};

/**
 * Este muestra un panel que sale de la derecha para mostrar información
 */
const APanelLateral = React.forwardRef<IPanelLateralRef, IAPanelLateralProps>(
    function APanelLateralInterno(
        props,
        ref
    ) {
        const uuid = useId();

        const btnCerrarClick = () => {
            if (props.cambioVisible !== undefined) {
                props.cambioVisible(false);
            }
        }

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "APanelLateral",
            Refuuid: () => uuid,
            ocultar: () => {
                if (props.cambioVisible !== undefined) {
                    props.cambioVisible(false);
                }
            }
        }));

        return (
            <div
                id={uuid}
                className={`apanellateral-fondo ${props.classNameFondo || ""} ${props.visible ? "apanellateral-visible" : "apanellateral-oculto"}`}
                style={{
                    ...props.estilosFondo,
                    background: (props.transparente || false) ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'
                }}
            >
                <div
                    className={`apanellateral ${props.className || ""}`}
                    style={props.estilos}
                >
                    <div
                        className={`apanellateral-encabezado`}
                    >
                        <div
                            className={`apanellateral-x`}
                            onClick={btnCerrarClick}
                        >
                            X
                        </div>
                        <p
                            className={`apanellateral-titulo ${props.classNameTitulo || ""}`}
                            style={props.estilosTitulo}
                        >
                            {props.titulo}
                        </p>
                    </div>
                    <div
                        className={`apanellateral-contenedor ${props.classNameContenedor || ""}`}
                        style={props.estilosContenedor}
                    >
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
);

export default APanelLateral;