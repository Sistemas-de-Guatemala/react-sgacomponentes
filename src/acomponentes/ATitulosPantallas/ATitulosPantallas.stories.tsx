import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ATitulosPantallas from './index';

export default {
    title: "react-sgacomponentes/ATitulosPantallas",
    component: ATitulosPantallas
} as ComponentMeta<typeof ATitulosPantallas>;

const ATitulosPantallasPlantilla: ComponentStory<typeof ATitulosPantallas> = (args) => <ATitulosPantallas {...args} />;

export const ATitulosPantallasVisualizacion = ATitulosPantallasPlantilla.bind({});

ATitulosPantallasVisualizacion.args = {
    titulo: "Titulo del componente"
}