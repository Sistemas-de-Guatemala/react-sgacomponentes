import React, { useState, useEffect } from 'react'
import {
    Meta
} from '@storybook/react'
import ADesplegable, { IDatosADesplegable } from './index'
import { FiGithub } from "react-icons/fi";

export default {
    title: "react-sgacomponentes/ADesplegable",
    component: ADesplegable,
    tags: ["autodocs"]
} satisfies Meta<typeof ADesplegable>;

const ADesplegablePlantilla = (args: any) => {

    const [ valorActual, fijarValorActual ] = useState<string|number>(2)
    const [ datos, fijarDatos ] = useState<Array<IDatosADesplegable>>([])

    useEffect(() => {
        const lista_opciones = new Array<IDatosADesplegable>(100).fill({ valor: 1, contenido: "" }).map((_, i) => { return { valor: i, contenido: `Opción ${i}` } })
        fijarDatos(lista_opciones)
    }, [])

    return <ADesplegable {...args} valor={valorActual} cambioValor={fijarValorActual} datos={datos} />
}

export const ADesplegableVisualizacion = ADesplegablePlantilla.bind({});

ADesplegableVisualizacion.args = {
    titulo: "Titulo del ADesplegable",
    placeholder: "Placeholder del ADesplegable",
    iconoIzquierda: <FiGithub size={20} />,
    valor: 2,
    datos: new Array<IDatosADesplegable>(100).fill({ valor: 1, contenido: "" }).map((_, i) => { return { valor: i, contenido: `Opción ${i}` } })
}

ADesplegableVisualizacion.argTypes = {
    cambioValor: { action: "cambioValor" }
}