import React from 'react'
import {
    Meta
} from '@storybook/react'

import AModal from './index'

export default {
    title: "react-sgacomponentes/AModal",
    component: AModal,
    tags: ["autodocs"]
} satisfies Meta<typeof AModal>;

const AModalPlantilla = (args: any) => <AModal {...args} />

export const AModalVisualizacion = AModalPlantilla.bind({})

AModalVisualizacion.args = {
    visible: true,
    titulo: "Titulo del AModal",
    estilos: {
        width: "500px"
    },
    mostrarCerrar: true,
    children: <p>Contenido del AModal</p>
}

AModalVisualizacion.argTypes = {
    eventoCerrar: { action: "eventoCerrar" }
}