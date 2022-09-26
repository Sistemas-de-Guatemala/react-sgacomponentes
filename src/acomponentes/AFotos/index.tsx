import React, { useState, useId, useEffect, useImperativeHandle, useRef } from 'react';
import './AFotos.css';
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
        const [medidasFoto, _] = useState({ ancho: props.ancho || 165, alto: props.alto || 240 });
        const [canvasVisible, fijarCanvasVisible] = useState(false);
        const [fotoTomada, fijarFotoTomada] = useState(false);

        const videoFoto = useRef<HTMLVideoElement>(null);
        const canvasFoto = useRef<HTMLCanvasElement>(null);

        let visible = true;
        let habilitado = true;
        if (props.visible !== undefined) {
            visible = props.visible;
        }

        if (props.habilitado !== undefined) {
            habilitado = props.habilitado;
        }

        useImperativeHandle(ref, () => ({
            TipoAControl: () => "AFotos",
            Refuuid: () => uuid,
            Valor: () => props.valor
        }));

        useEffect(() => {
            if(props.valor !== ""){
                fijarCanvasVisible(false);
                fijarFotoTomada(true);
    
                setTimeout(() => {
    
                    let imagenFoto = new Image(medidasFoto.ancho, medidasFoto.alto);
                    imagenFoto.onload = () => {
                        if(canvasFoto.current != null){
                            //@ts-ignore
                            canvasFoto.current.getContext("2d").drawImage(imagenFoto, 0, 0, medidasFoto.ancho * 2, medidasFoto.alto * 2);
                        }
                    };

                    imagenFoto.src = "data:image/png;base64," + props.valor;

                }, 10);
            }
        }, [props.valor]);

        const ActivarCanvas = async () => {
            fijarCanvasVisible(true);
            fijarFotoTomada(false);
    
            try {
                let stream = await navigator.mediaDevices.getUserMedia({
                    
                    video: {
                        width: medidasFoto.ancho * 2,
                        height: medidasFoto.alto * 2
                    },

                    audio: false
                });
    
    
                if(videoFoto.current !== null) {
                    videoFoto.current.srcObject = stream;
                }
            }
            catch (err) {
                console.log(err);
            }
        }

        const enviarFoto = (foto: string): void => {
            if(habilitado){
                props.fotoTomada(foto);
            }
        }

        const TomarFoto = () => {
            let video_actual = videoFoto;

    
            // setTimeout(() => {

                if(canvasFoto.current && video_actual.current) {
                    //@ts-ignore
                    canvasFoto.current.getContext('2d').drawImage(video_actual.current, 0, 0, medidasFoto.ancho * 2, medidasFoto.alto * 2);
                    const foto:string = canvasFoto.current.toDataURL('image/jpeg', 1.0).split(',')[1];
                    enviarFoto(foto);
                }

                if(video_actual.current){
                    //@ts-ignore
                    video_actual.current.srcObject.getTracks().forEach((track) => {
                        track.stop();
                    });
                }

            fijarFotoTomada(true);
            fijarCanvasVisible(false);
            // }, 100);
        }

        if (visible) {
            return (
                <div
                    className={`afotos ${props.className || ""}`}
                    style={props.estilos}
                >
                    {
                        (!canvasVisible && !fotoTomada) &&
                        <div className={"afotos-div-vacio"}></div>
                    }

                    {
                        (canvasVisible && !fotoTomada) &&
                        <video
                            ref={videoFoto}
                            id={`afotos-video-${uuid}`}
                            className={"afotos-video-elemento"}
                            width={props.ancho || medidasFoto.ancho}
                            height={props.alto || medidasFoto.alto}
                            autoPlay
                        >
                        </video>
                    }

                    {
                        (!canvasVisible && fotoTomada) &&
                        <canvas
                            ref={canvasFoto}
                            id={`afotos-canvas-${uuid}`}
                            className={"afotos-canvas-elemento"}
                            width={props.ancho || medidasFoto.ancho}
                            height={props.alto || medidasFoto.alto}
                        ></canvas>
                    }

                    {(
                        !canvasVisible &&
                        <ABoton
                            className={'afotos-btn-tomar-foto'}
                            botonPresionado={() => { ActivarCanvas(); }}
                        >
                            Tomar Foto
                        </ABoton>
                    )}


                    {(
                        canvasVisible &&
                        <ABoton
                            className={'afotos-btn-tomar-foto'}
                            botonPresionado={() => { TomarFoto(); }}
                        >
                            <IoCamera size={20} />
                        </ABoton>
                    )}
                </div>
            );
        }
        else {
            return null;
        }
    }
)

export default AFotos;
