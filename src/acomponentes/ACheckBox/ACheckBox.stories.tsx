import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ACheckBox from './index';

export default {
    title: "react-sgacomponentes/ACheckBox",
    component: ACheckBox
} as ComponentMeta<typeof ACheckBox>;

const ACheckBoxPlantilla: ComponentStory<typeof ACheckBox> = (args) => <ACheckBox {...args} />;

export const ACheckBoxVisualizacion = ACheckBoxPlantilla.bind({});

ACheckBoxVisualizacion.args = {
    texto: "Titulo del ACheckBox"
}