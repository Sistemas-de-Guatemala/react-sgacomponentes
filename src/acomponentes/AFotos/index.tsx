import React, { useState, useId, useEffect, useImperativeHandle, useRef } from 'react';
import './AFotos.css';
import {
    ImgDefecto
} from './AFotosRecursos';
import APanel from './../APanel';
import ABoton from './../ABoton';

import { IoCamera } from "react-icons/io5";

export interface IAFotosProps {
    /** Valor del componente en base64 para poder mostrar una imagen en el canvas */
    valor: string;
    /** Evento que se ejecuta cuando se toma la foto */
    fotoTomada: (valor: string) => void;
    /** Ancho de la imagen a capturar */
    ancho?: number;
    /** Alto de la imagen a capturar */
    alto?: number;
    /** Si es falso el AControl se oculta */
    visible?: boolean;
    /** Clase CSS */
    className?: string;
    /** Estilos del AControl */
    estilos?: React.CSSProperties;
    /** Si es falso, no permite tomar fotos */
    habilitado?: boolean;
}

export interface IAFotosRef {
    /** Devuelve el tipo de AControl */
    TipoAControl: () => string;
    /** UUID */
    Refuuid: () => string;
    /** Devuelve el valor del componente en base64 */
    Valor: () => string;
}

const AFotos = React.forwardRef<IAFotosRef, IAFotosProps>(
    function AFotosInterno(
        props,
        ref
    ) {
        const uuid = useId();
        const [ panelFotoVisible, fijarPanelFotoVisible ] = useState(false);
        const [ valorImg, fijarValorImg ] = useState(ImgDefecto);
        const videoFoto = useRef<HTMLVideoElement>(null);
        const canvasFoto = useRef<HTMLCanvasElement>(null);
        const imgFoto = useRef<HTMLImageElement>(null);

        let visible: boolean = props.visible === undefined ? true : props.visible;


        const ActivarCamara = async () => {
            fijarPanelFotoVisible(true);

            try{
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: props.ancho || 720,
                        height: props.alto || 480
                    },
                    audio: false
                });

                if (videoFoto.current) {
                    videoFoto.current.srcObject = stream;
                    videoFoto.current.play();
                }
            }
            catch(e: any){
                console.log(e);
            }
        };

        const CerrarCamara = () => {
            if (videoFoto.current) {
                // @ts-ignore
                videoFoto.current.srcObject?.getTracks().forEach(track => track.stop());
            }

            fijarPanelFotoVisible(false);
        };

        const TomarFoto = () => {
            if (videoFoto.current && canvasFoto.current && imgFoto.current) {
                const context = canvasFoto.current.getContext('2d');
                if (context) {
                    context.drawImage(videoFoto.current, 0, 0, imgFoto.current.width, imgFoto.current.height);
                    const valor = canvasFoto.current.toDataURL('image/png').split(',')[1];
                    fijarValorImg(valor);
                    fijarPanelFotoVisible(false);
                    props.fotoTomada(valor);
                    CerrarCamara();
                }
            }
        };

        if(!visible) {
            return null;
        }
        else{
            return(
                <>
                    <div
                        className={`afotos ${props.className || ""}`}
                        style={props.estilos}
                    >
                        <img
                            ref={imgFoto}
                            className={`afotos-img`}
                            src={`data:image/png;base64,${valorImg}`}
                            alt={"Imagen de la cámara"}
                        />

                        <ABoton
                            botonPresionado={ActivarCamara}
                            className={"afotos-btn-tomar-foto"}
                        >
                            <IoCamera size={25} />
                        </ABoton>
                    </div>
                    <APanel
                        visible={panelFotoVisible}
                        titulo={"Tomar foto"}
                        eventoCerrar={CerrarCamara}
                        classNameContenido={`afotos-panel-contenido`}
                    > 
                        <video
                            ref={videoFoto}
                            className={"afotos-video"}
                            controls={false}
                        >
                        </video>

                        <canvas
                            ref={canvasFoto}
                            className={"afotos-canvas"}
                        ></canvas>

                        <div
                            className={"afotos-panel-controles"}
                        >
                            <ABoton
                                botonPresionado={TomarFoto}
                            >
                                Tomar foto
                            </ABoton>
                            <ABoton
                                tipoBotonColor='peligro'
                                botonPresionado={CerrarCamara}
                            >
                                Cancelar
                            </ABoton>
                        </div>
                    </APanel>
                </>
            );
        }
    }
)

export default AFotos;
