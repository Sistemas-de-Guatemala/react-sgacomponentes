import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ACajaTexto from './index';
import { FiAward } from "react-icons/fi";

export default {
    title: "react-sgacomponentes/ACajaTexto",
    component: ACajaTexto
} as ComponentMeta<typeof ACajaTexto>;

const ACajaTextoPlantilla: ComponentStory<typeof ACajaTexto> = (args) => <ACajaTexto {...args} />;

export const ACajaTextoVisualizacion = ACajaTextoPlantilla.bind({});

const listado_opciones = Array<string>();
for(let i = 0; i < 101; i++){
    listado_opciones.push(`Opción ${i}`);
}

ACajaTextoVisualizacion.args = {
    titulo: "Titulo del ACajaTexto",
    placehodler: "Placeholder del ACajaTexto",
    icono: <FiAward size={20} />,
    estilos: { width: "300px" },
    autoCompletado: listado_opciones
}

ACajaTextoVisualizacion.argTypes = {
    cambioTexto: { action: "cambioTexto" },
    quitoFoco: { action: "quitoFoco" },
    quitoFocus: { action: "quitoFocus" }
};