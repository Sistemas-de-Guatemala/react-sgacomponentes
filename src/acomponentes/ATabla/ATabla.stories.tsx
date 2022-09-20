import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ATabla from './index';

export default {
    title: "react-sgacomponentes/ATabla",
    component: ATabla
} as ComponentMeta<typeof ATabla>;

const ATablaPlantilla: ComponentStory<typeof ATabla> = (args) => <ATabla {...args} />;

export const ATablaVisualizacion = ATablaPlantilla.bind({});

ATablaVisualizacion.args = {
    encabezados: ["Encabezado 1", "Encabezado 2", "Encabezado 3"],
    datos: new Array(20).fill(0).map((_, indice) => {
        return [
            `Dato 1 -> ${indice}`,
            `Dato 2 -> ${indice}`,
            `Dato 3 -> ${indice}`
        ]
    })
}