import React from 'react';
import {
    ComponentStory,
    ComponentMeta
} from '@storybook/react';

import ABotonOpciones from '.';

export default {
    title: 'react-sgacomponentes/ABotonOpciones',
    component: ABotonOpciones
} as ComponentMeta<typeof ABotonOpciones>;

const ABotonOpcionesPlantilla: ComponentStory<typeof ABotonOpciones> = (args) => <ABotonOpciones {...args} />;

export const ABotonOpcionesClick = ABotonOpcionesPlantilla.bind({});

ABotonOpcionesClick.args = {
    children: "ABotón Opciones (Presioname)",
    opciones: [
        "Opción 1",
        "Opción 2",
        "Opción 3",
        <div>Opción 4</div>
    ]
}

ABotonOpcionesClick.argTypes = {
    opcionSeleccionada: { action: "opcionSeleccionada" }
}