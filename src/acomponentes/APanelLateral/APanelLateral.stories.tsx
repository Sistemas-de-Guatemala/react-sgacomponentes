import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import APanelLateral from './index';

export default {
    title: "react-sgacomponentes/APanelLateral",
    component: APanelLateral
} as ComponentMeta<typeof APanelLateral>;

const APanelLateralPlantilla: ComponentStory<typeof APanelLateral> = (args) => <APanelLateral {...args} />;

export const APanelLateralVisualizacion = APanelLateralPlantilla.bind({});

APanelLateralVisualizacion.args = {
    visible: true,
    titulo: "Titulo del APanelLateral",
    children: <p>Contenido del APanelLateral</p>
}

APanelLateralVisualizacion.argTypes = {
    cambioVisible: { action: "cambioVisible" }
}