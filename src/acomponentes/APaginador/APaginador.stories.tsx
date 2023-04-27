import React from 'react';
import {
    Meta
} from '@storybook/react';

import APaginador from './index';

export default {
    title: "react-sgacomponentes/APaginador",
    component: APaginador
} satisfies Meta<typeof APaginador>;

const APaginadorPlantilla = (args: any) => <APaginador {...args} />;

export const APaginadorVisualizacion = APaginadorPlantilla.bind({});

APaginadorVisualizacion.args = {
    paginaActual: 1,
    maxPaginas: 10
}

APaginadorVisualizacion.argTypes = {
    cambioPagina: { action: "cambioPagina" }
}