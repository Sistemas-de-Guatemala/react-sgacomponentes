import React, { useState } from 'react';
import {
    Meta
} from '@storybook/react';

import ACajaTexto from './index';
import { FiGithub } from "react-icons/fi";

export default {
    title: "react-sgacomponentes/ACajaTexto",
    component: ACajaTexto,
    tags: ["autodocs"]
} satisfies Meta<typeof ACajaTexto>;

const ACajaTextoPlantilla = (args: any) => {

    const [valorActual, fijarValorActual] = useState<string>("");

    return <ACajaTexto {...args} valor={valorActual} cambioTexto={fijarValorActual} />
}

export const ACajaTextoVisualizacion = ACajaTextoPlantilla.bind({});

const listado_opciones = Array<string>();
for(let i = 0; i < 101; i++){
    listado_opciones.push(`Opción ${i}`);
}

ACajaTextoVisualizacion.args = {
    titulo: "Titulo del ACajaTexto",
    placehodler: "Placeholder del ACajaTexto",
    iconoIzquierda: <FiGithub size={20} />,
    estilos: { width: "300px" },
    autoCompletado: listado_opciones
}

ACajaTextoVisualizacion.argTypes = {
    cambioTexto: { action: "cambioTexto" },
    quitoFoco: { action: "quitoFoco" },
    quitoFocus: { action: "quitoFocus" }
}