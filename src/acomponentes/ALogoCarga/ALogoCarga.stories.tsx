import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ALogoCarga from './index';

export default {
    title: "react-sgacomponentes/ALogoCarga",
    component: ALogoCarga
} as ComponentMeta<typeof ALogoCarga>;

const ALogoCargaPlantilla: ComponentStory<typeof ALogoCarga> = (args) => <ALogoCarga {...args} />;

export const ALogoCargaVisualizacion = ALogoCargaPlantilla.bind({});

ALogoCargaVisualizacion.args = {
    texto: "Cargando...",
    visible: true
}