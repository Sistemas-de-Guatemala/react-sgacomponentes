import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import APanel from './index';

export default {
    title: "react-sgacomponentes/APanel",
    component: APanel
} as ComponentMeta<typeof APanel>;

const APanelPlantilla: ComponentStory<typeof APanel> = (args) => <APanel {...args} />;

export const APanelVisualizacion = APanelPlantilla.bind({});

APanelVisualizacion.args = {
    visible: true,
    titulo: "Titulo del APanel",
    estilos: {
        width: "500px"
    },
    mostrarCerrar: true,
    children: <p>Contenido del APanel</p>
}

APanelVisualizacion.argTypes = {
    eventoCerrar: { action: "eventoCerrar" }
}