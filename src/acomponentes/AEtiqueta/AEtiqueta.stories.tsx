import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import AEtiqueta from './index';

export default {
    title: "react-sgacomponentes/AEtiqueta",
    component: AEtiqueta
} as ComponentMeta<typeof AEtiqueta>;

const AEtiquetaPlantilla: ComponentStory<typeof AEtiqueta> = (args) => <AEtiqueta {...args} />;

export const AEtiquetaVisualizacion = AEtiquetaPlantilla.bind({});

AEtiquetaVisualizacion.args = {
    children: "AEtiqueta"
}