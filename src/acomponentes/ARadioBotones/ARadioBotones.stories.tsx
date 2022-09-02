import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ARadioBotones from './index';

export default {
    title: "react-sgacomponentes/ARadioBotones",
    component: ARadioBotones
} as ComponentMeta<typeof ARadioBotones>;

const ARadioBotonesPlantilla: ComponentStory<typeof ARadioBotones> = (args) => <ARadioBotones {...args} />;

export const ARadioBotonesVisualizacion = ARadioBotonesPlantilla.bind({});

ARadioBotonesVisualizacion.args = {
    titulo: "Titulo del ARadioBotones",
    opciones: [
        { texto: "Opcion 1", valor: "1" },
        { texto: "Opcion 2", valor: "2" },
        { texto: "Opcion 3", valor: "3" }
    ]
}

ARadioBotonesVisualizacion.argTypes = {
    cambioSeleccion: { action: "cambioSeleccion" }
}