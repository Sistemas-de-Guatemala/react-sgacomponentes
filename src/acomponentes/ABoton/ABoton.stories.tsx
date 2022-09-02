import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ABoton from './index';

export default {
    title: "react-sgacomponentes/ABoton",
    component: ABoton
} as ComponentMeta<typeof ABoton>;

const ABotonPlantilla: ComponentStory<typeof ABoton> = (args) => <ABoton {...args} />;

export const ABotonClick = ABotonPlantilla.bind({});

ABotonClick.args = {
    children: "ABotón (Presioname)",
    tipoBoton: "button"
}

ABotonClick.argTypes = {
    botonPresionado: { action: "botonPresionado" }
}