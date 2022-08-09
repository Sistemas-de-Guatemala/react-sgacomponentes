import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import AFotos from './index';

export default {
    title: "react-sgacomponentes/AFotos",
    component: AFotos
} as ComponentMeta<typeof AFotos>;

const AFotosPlantilla: ComponentStory<typeof AFotos> = (args) => <AFotos {...args} />;

export const AFotosVisualizacion = AFotosPlantilla.bind({});

let foto: string = "";

AFotosVisualizacion.args = {
    valor: foto,
    fotoTomada: (valor: string) => {
        foto = valor;
    }
}