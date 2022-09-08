import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import ASeccion from './index';
import ACajaTexto from './../ACajaTexto';
import ABoton from './../ABoton';

export default {
    title: "react-sgacomponentes/ASeccion",
    component: ASeccion
} as ComponentMeta<typeof ASeccion>;

const ASeccionPlantilla: ComponentStory<typeof ASeccion> = (args) => <ASeccion {...args} />;

export const ASeccionVisualizacion = ASeccionPlantilla.bind({});

ASeccionVisualizacion.args = {
    titulo: "Titulo del ASeccion",
    children:
        <>
            <ACajaTexto
                titulo="Titulo de la ACajaTexto"
                placeholder='Placeholder de la ACajaTexto'
            />
            <div>
                <ABoton
                    botonPresionado={() => { console.log("Genera acción de boton presionado") }}
                >
                    Aceptar
                </ABoton>
            </div>
        </>
}