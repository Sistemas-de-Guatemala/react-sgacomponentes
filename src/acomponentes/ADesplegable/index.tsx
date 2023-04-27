import React, { useId, useState, useEffect, useRef, useImperativeHandle } from 'react'
import { FiChevronDown } from "react-icons/fi";
import './../estilosgenerales.css'
import './ADesplegable.css'

import ACajaTexto, { IACajaTextoRef } from './../ACajaTexto'
import { MdSearch } from "react-icons/md";
import ReactChildrenUtilities from 'react-children-utilities'

interface ITituloADesplegableProps {
    /** Clase CSS del titulo del ADesplegable */
    className?: string
    /** Estilos del titulo del ADesplegable */
    estilos?: React.CSSProperties
    /** Atributo for del titulo del ADesplegable */
    para?: string
    /** Contenido del titulo del TituloADesplegable */
    children: React.ReactNode
}

const TituloADesplegable = (
    props: ITituloADesplegableProps
): JSX.Element => {

    return(
        <label
            className={`adesplegable-titulo ${props.className}`}
            style={props.estilos}
            htmlFor={props.para}
        >{props.children}</label>
    );
};

interface IIconoADesplegableIzquierdaProps {
    /** Clase CSS del icono */
    className?: string
    /** Estilos del icono */
    estilos?: React.CSSProperties
    /** Contenido del icono */
    children?: React.ReactNode
}

const IconoADesplegableIzquierda = (props: IIconoADesplegableIzquierdaProps) => {
    return(
        <div className={`adesplegable-icono-izquierda ${props.className}`} style={props.estilos}>{props.children}</div>
    )
}

interface IIconoADesplegableDerechaProps {
    /** Clase CSS del icono */
    className?: string
    /** Estilos del icono */
    estilos?: React.CSSProperties
    /** Contenido del icono */
    children?: React.ReactNode
}

const IconoADesplegableDerecha = (props: IIconoADesplegableDerechaProps) => {
    return(
        <div className={`adesplegable-icono-derecha ${props.className}`} style={props.estilos}>{props.children}</div>
    )
}

interface IADesplegableContenidoDatosProps{
    /** Datos a mostrar en pantalla del ADesplegable */
    datos: IDatosADesplegable[]
    /** Clase CSS del contenido del ADesplegable */
    className?: string
    /** Estilos del contenido del ADesplegable */
    estilos?: React.CSSProperties
    /** Indice del seleccionado por el usuario */
    indiceActual: number
    /** Valor del seleccionado por el usuario */
    valor: string|number
    /** Función que se ejecuta al cambiar el valor del ADesplegable */
    cambioValor: (valor: string|number) => void
    esVisible: boolean
}

const ADesplegableContenidoDatosProps = (props: IADesplegableContenidoDatosProps) => {

    const uuid = useId()
    const divSeleccionadoRef = useRef<HTMLDivElement>(null)
    const [centrarDivSeleccionado, fijarCentrarDivSeleccionado] = useState<boolean>(false)

    useEffect(() => {
        if (centrarDivSeleccionado && divSeleccionadoRef.current) {
            divSeleccionadoRef.current?.focus()
            divSeleccionadoRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
            fijarCentrarDivSeleccionado(false)
        }
    }, [centrarDivSeleccionado, props.esVisible, props.indiceActual])

    useEffect(() => {
        fijarCentrarDivSeleccionado(true)
    }, [props.indiceActual])

    return(
        <div key={uuid} id={uuid} className={`adesplegable-desplegable-contenedor-datos`} style={props.estilos}>
            {
                props.datos.map((elemento, indice) => {
                    return(
                        <div
                            ref={props.indiceActual === indice ? divSeleccionadoRef : null}
                            key={`${uuid}-${indice}`}
                            id={`${uuid}-${indice}`}
                            tabIndex={0}
                            className={`adesplegable-datos ${props.className} ${props.indiceActual === indice ? "adesplegable-datos-indice-seleccionado" : ""}`}
                            onClick={() => props.cambioValor(elemento.valor)}
                        >
                            {elemento.contenido}
                        </div>
                    )
                })
            }
            {
                props.datos.length === 0 && ( <div className={`adesplegable-datos ${props.className}`}>No hay datos</div> )
            }
        </div>
    )
}

/**
 * Datos a mostrar en pantalla del ADesplegable
 */
export interface IDatosADesplegable {
    /** Valor del dato */
    valor: string|number
    /** Contenido del dato */
    contenido: React.ReactNode|string|number
}

export interface IADesplegableProps {
    /** Valor del ADesplegable */
    valor: string|number
    /** Datos a mostrar en pantalla del ADesplegable */
    datos: IDatosADesplegable[]
    /** Placeholder del ADesplegable */
    placeholder?: string
    /** Función a ejecutar cuando cambia el valor del ADesplegable */
    cambioValor: (valor: string|number) => void
    /** Determina si el componente se muestra en pantalla o no */
    visible?: boolean
    /** Icono que se posiciona en el lado izquierdo del desplegable */
    iconoIzquierda?: React.ReactNode
    /** Clase CSS del Icono de la izquierda */
    classNameIconoIzquierda?: string
    /** Estilos del Icono de la izquierda */
    estilosIconoIzquierda?: React.CSSProperties
    /** Icono que se posiciona en el lado derecho del desplegable */
    iconoDerecha?: React.ReactNode
    /** Clase CSS del Icono de la derecha */
    classNameIconoDerecha?: string
    /** Estilos del Icono de la derecha */
    estilosIconoDerecha?: React.CSSProperties
    /** Clase CSS del ADesplegable */
    classNameContendor?: string
    /** Estilos del ADesplegable */
    estilosContendor?: React.CSSProperties
    /** Titulo del ADesplegable */
    titulo?: string
    /** Clase CSS del titulo del ACajaTexto */
    classNameTitulo?: string
    /** Estilos del titulo del ACajaTexto */
    estilosTitulo?: React.CSSProperties
    /** Indice del tab */
    tabIndice?: number
    /** Muestra el filtro del adesplegable o no */
    mostrarFiltro?: boolean
}

export interface IADesplegableRef{
    /** UUID del ADesplegable */
    Refuuid: () => string
    /** Tipo de acontrol */
    TipoAControl: () => string
    /** Poner el foco en el ADesplegable */
    foco: () => void
    /** Poner el foco en el ADesplegable */
    focus: () => void
}

/**
 * Componente ADesplegable para mostrar datos en pantalla de forma desplegable y seleccionable, con filtro de búsqueda
 */
const ADesplegable = React.forwardRef<IADesplegableRef, IADesplegableProps>(
    function ADesplegableInterno(props, ref){

        const uuid = useId()
        const [ desplegableVisible, fijarDesplegableVisible ] = useState<boolean>(false)
        const [ txtFiltro, fijarTxtFiltro ] = useState<string>("")
        const refTxtFiltro = useRef<IACajaTextoRef>()
        const [ indiceActual, fijarIndiceActual ] = useState<number>(0)
        const [ datosTemp, fijarDatosTemp ] = useState<IDatosADesplegable[]>(props.datos)
        const divContenedorRef = useRef<HTMLDivElement>(null)
        const divSinFiltro = useRef<HTMLDivElement>(null)

        useImperativeHandle(ref, () => ({
            Refuuid: () => uuid,
            TipoAControl: () => 'ADesplegable',
            foco: () => PonerFoco(),
            focus: () => PonerFoco()
        }))

        useEffect(() => {
            fijarIndiceActual(datosTemp.findIndex(dato => dato.valor === props.valor))
        }, [props.valor, datosTemp])

        useEffect(() => {
            fijarDatosTemp(props.datos)
        }, [props.datos])

        useEffect(() => {
            if(txtFiltro.length > 0){
                const datosActuales = datosTemp.filter(dato => ReactChildrenUtilities.onlyText(dato.contenido).toString().toLowerCase().includes(txtFiltro.toLowerCase()))
                fijarDatosTemp(datosActuales)
            }else{
                fijarDatosTemp(props.datos)
            }
        }, [txtFiltro])

        useEffect(() => {
            if(!desplegableVisible){
                PonerFoco()
            }
        }, [desplegableVisible])

        const PonerFoco = (): void => {
            divContenedorRef?.current?.focus()
        }

        const RenderizarTextoADesplegable = (valorActual: string|number): string | React.ReactElement | React.ReactNode | number => {
            const datos = props.datos.filter(dato => dato.valor === valorActual)
            if(datos.length > 0){
                return datos[0].contenido
            }
            
            if(props.placeholder){
                return <label style={{ color: "#CCCCCC", width: "100%" }}>{props.placeholder}</label>
            }

            return ""
        }

        const DetectarFlechasPresionadasFiltro = (tecla: string): void => {
            if(tecla === "ArrowDown"){
                if(indiceActual < datosTemp.length - 1){
                    fijarIndiceActual(indiceActual + 1)
                    setTimeout(() => {
                        refTxtFiltro?.current?.focus()
                    }, 10)
                }
            }

            if(tecla === "ArrowUp"){
                if(indiceActual > 0){
                    fijarIndiceActual(indiceActual - 1)
                    setTimeout(() => {
                        refTxtFiltro?.current?.focus()
                    }, 10)
                }
            }

            if(tecla === "Enter"){
                props.cambioValor(datosTemp[indiceActual].valor)
                fijarDesplegableVisible(false)
                fijarDatosTemp(props.datos)
                fijarTxtFiltro("")
            }
        }

        
        const AbrirDesplegable = (): void => {
            fijarDesplegableVisible(!desplegableVisible)
            if(!desplegableVisible){
                setTimeout(() => {
                    if(props.hasOwnProperty('mostrarFiltro')){
                        if(props.mostrarFiltro){
                            refTxtFiltro?.current?.focus()
                        }else{
                            divSinFiltro?.current?.focus()
                        }
                    }
                    else{
                        refTxtFiltro?.current?.focus()
                    }
                }, 10)
            }
        }

        const EventoOpcionSeleccionada = (valor: string | number) => {
            fijarTxtFiltro("")
            props.cambioValor(valor)
            fijarDesplegableVisible(!desplegableVisible)
        }

        const EventoTeclaPresionadaDiv = (tecla: string): void => {
            if(tecla === "Enter"){
                AbrirDesplegable()
            }
            if(tecla === " "){
                AbrirDesplegable()
            }
        }

        const TeclaPresionadaSinFiltro = (tecla: string): void => {
            if(tecla === "ArrowDown"){
                if(indiceActual < datosTemp.length - 1){
                    fijarIndiceActual(indiceActual + 1)
                    setTimeout(() => {
                        divSinFiltro?.current?.focus()
                    }, 10)
                }
            }

            if(tecla === "ArrowUp"){
                if(indiceActual > 0){
                    fijarIndiceActual(indiceActual - 1)
                    setTimeout(() => {
                        divSinFiltro?.current?.focus()
                    }, 10)
                }
            }

            if(tecla === "Enter"){
                props.cambioValor(datosTemp[indiceActual].valor)
                fijarDesplegableVisible(false)
                fijarDatosTemp(props.datos)
                fijarTxtFiltro("")
            }
        }

        return(
            <div
                key={uuid}
                className={`adesplegable ${props.classNameContendor} ${props.hasOwnProperty('visible') ? props.visible ? "" : "no-visible" : ""}`}
                style={props.estilosContendor}
            >
                {/** Titulo del adesplegable */}
                { props.titulo && <TituloADesplegable className={props.classNameTitulo} estilos={props.estilosTitulo} para={uuid}>{props.titulo}</TituloADesplegable> }
                <div
                    ref={divContenedorRef}
                    className={`adesplegable-contenedor`}
                    tabIndex={props.tabIndice || 0}
                    id={`adesplegable-contenedor-${uuid}`}
                    onClick={AbrirDesplegable}
                    onKeyDown={(e) => EventoTeclaPresionadaDiv(e.key)}
                >
                    {/** Icono de la izquierda */}
                    { props.iconoIzquierda && <IconoADesplegableIzquierda className={props.classNameIconoIzquierda} estilos={props.estilosIconoIzquierda}>{props.iconoIzquierda}</IconoADesplegableIzquierda> }
                    {/** Desplegable */}
                    <div className={`adesplegable-contenedor-contenido`}>
                        <div style={{ width: "100%", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                            {RenderizarTextoADesplegable(props.valor)}
                        </div>
                    </div>
                    {/** Icono de la derecha */}
                    { props.iconoDerecha && <IconoADesplegableDerecha className={props.classNameIconoDerecha} estilos={props.estilosIconoDerecha}>{props.iconoDerecha}</IconoADesplegableDerecha> }
                    { !props.iconoDerecha && <FiChevronDown size={25} /> }
                </div>
                <div
                    ref={divSinFiltro}
                    id={`adesplegable-desplegable-${uuid}`}
                    className={`adesplegable-desplegable ${desplegableVisible ? "adesplegable-desplegable-visible" : ""}`}
                    tabIndex={props.hasOwnProperty('mostrarFiltro') ? props.mostrarFiltro ? undefined : 0 : undefined}
                    onKeyDown={(e) => TeclaPresionadaSinFiltro(e.key)}
                >
                    { props.hasOwnProperty('mostrarFiltro') ? props.mostrarFiltro ? 
                        <ACajaTexto
                            // @ts-ignore
                            ref={refTxtFiltro}
                            valor={txtFiltro}
                            cambioTexto={(e) => fijarTxtFiltro(e)}
                            iconoDerecha={<MdSearch size={25} />}
                            placeholder={'Filtrar opciones'}
                            eventoTeclaPresionada={DetectarFlechasPresionadasFiltro}
                        />
                            : null :
                            <ACajaTexto
                                // @ts-ignore
                                ref={refTxtFiltro}
                                valor={txtFiltro}
                                cambioTexto={(e) => fijarTxtFiltro(e)}
                                iconoDerecha={<MdSearch size={25} />}
                                placeholder={'Filtrar opciones'}
                                eventoTeclaPresionada={DetectarFlechasPresionadasFiltro}
                            /> }
                    {/** Desplegable */}
                    <ADesplegableContenidoDatosProps datos={datosTemp} indiceActual={indiceActual} valor={props.valor} cambioValor={(e) => EventoOpcionSeleccionada(e)} esVisible={desplegableVisible} />
                </div>
            </div>
        )
    }
)

export default ADesplegable