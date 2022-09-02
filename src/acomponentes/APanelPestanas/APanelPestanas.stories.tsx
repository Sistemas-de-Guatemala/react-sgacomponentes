import React from 'react';
import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import {
    APanelPestanas,
    APanelPestana
} from './index';

export default {
    title: "react-sgacomponentes/APanelPestanas",
    component: APanelPestanas
} as ComponentMeta<typeof APanelPestanas>;

const APanelPestanasPlantilla: ComponentStory<typeof APanelPestanas> = (args) => <APanelPestanas {...args} />;

export const APanelPestanasVisualizacion = APanelPestanasPlantilla.bind({});

APanelPestanasVisualizacion.args = {
    pestanaActual: 0,
    cambioPestana: (indicePestana: number) => { console.log(indicePestana) },
    pestanas: [
        "Pestaña 1",
        "Pestaña 2",
        "Pestaña 3"
    ],
    children: [
        <APanelPestana
        >
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam sit. Fugit harum reprehenderit architecto, dolore commodi omnis nisi a amet consectetur natus aut explicabo praesentium quam laboriosam minus provident.
            <APanelPestanas
                pestanas={[
                    "Pestaña 4",
                    "Pestaña 5",
                    "Pestaña 6"
                ]}
                pestanaActual={0}
                cambioPestana={(indicePestana) => {
                    console.log(indicePestana);
                }}
            >
                <APanelPestana
                >
                    4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam sit. Fugit harum reprehenderit architecto, dolore commodi omnis nisi a amet consectetur natus aut explicabo praesentium quam laboriosam minus provident.
                </APanelPestana>
                <APanelPestana
                >
                    5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam sit. Fugit harum reprehenderit architecto, dolore commodi omnis nisi a amet consectetur natus aut explicabo praesentium quam laboriosam minus provident.
                </APanelPestana>
                <APanelPestana
                >
                    6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam sit. Fugit harum reprehenderit architecto, dolore commodi omnis nisi a amet consectetur natus aut explicabo praesentium quam laboriosam minus provident.
                </APanelPestana>
            </APanelPestanas>
        </APanelPestana>,
        <APanelPestana
        >
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam sit. Fugit harum reprehenderit architecto, dolore commodi omnis nisi a amet consectetur natus aut explicabo praesentium quam laboriosam minus provident.
        </APanelPestana>,
        <APanelPestana
        >
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam sit. Fugit harum reprehenderit architecto, dolore commodi omnis nisi a amet consectetur natus aut explicabo praesentium quam laboriosam minus provident.
        </APanelPestana>
    ]
}

APanelPestanasVisualizacion.argTypes = {
    cambioPestana: { action: "cambioPestana" }
}