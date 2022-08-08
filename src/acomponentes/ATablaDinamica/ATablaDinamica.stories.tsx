import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ATablaDinamica from './index';

export default {
    title: "react-sgacomponentes/ATablaDinamica",
    component: ATablaDinamica
} as ComponentMeta<typeof ATablaDinamica>;

const ATablaDinamicaPlantilla: ComponentStory<typeof ATablaDinamica> = (args) => <ATablaDinamica {...args} />;

export const ATablaDinamicaVisualizacion = ATablaDinamicaPlantilla.bind({});

ATablaDinamicaVisualizacion.args = {
    titulo: "Titulo del ATablaDinamica",
    encabezados: [ "Encabezado 1", "Encabezado 2", "Encabezado 3" ],
    datos: new Array(200).fill(0).map((_, i) => [`Dato ${i}`, `Dato ${i}`, `Dato ${i}`]),
}