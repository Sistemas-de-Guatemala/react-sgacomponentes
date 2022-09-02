import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import APaginador from './index';

export default {
    title: "react-sgacomponentes/APaginador",
    component: APaginador
} as ComponentMeta<typeof APaginador>;

const APaginadorPlantilla: ComponentStory<typeof APaginador> = (args) => <APaginador {...args} />;

export const APaginadorVisualizacion = APaginadorPlantilla.bind({});

APaginadorVisualizacion.args = {
    paginaActual: 1,
    maxPaginas: 10
}

APaginadorVisualizacion.argTypes = {
    cambioPagina: { action: "cambioPagina" }
}