import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ADesplegable from './index';

export default {
    title: "react-sgacomponentes/ADesplegable",
    component: ADesplegable
} as ComponentMeta<typeof ADesplegable>;

const ADesplegablePlantilla: ComponentStory<typeof ADesplegable> = (args) => <ADesplegable {...args} />;

export const ADesplegableVisualizacion = ADesplegablePlantilla.bind({});

ADesplegableVisualizacion.args = {
    titulo: 'Titulo del ADesplegable',
    placeholder: 'Placeholder del ADesplegable',
    valor: -1,
    datos: new Array(100).fill(0).map((_, i) => { return {id: i, texto: `Elemento ${i}`}}),
    estilos: { width: "300px" }
}

ADesplegableVisualizacion.argTypes = {
    cambioSeleccion: { action: "cambioSeleccion" }
}