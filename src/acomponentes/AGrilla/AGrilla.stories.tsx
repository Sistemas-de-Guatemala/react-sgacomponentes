import React from 'react'
import {
    Meta
} from '@storybook/react'
import {
    AFila,
    ACol
} from './index'

export default {
    title: "react-sgacomponentes/AGrilla",
    component: AFila,
    tags: ["autodocs"]
} satisfies Meta<typeof AFila>;

export const AGrillaVisualizacion = (args: any) => {
    return (
        <AFila>
            <ACol xs={12} sm={6} md={4} xl={2}>
                <div style={{ height: "100px", backgroundColor: "red" }}></div>
            </ACol>
            <ACol xs={12} sm={6} md={4} xl={2}>
                <div style={{ height: "100px", backgroundColor: "blue" }}></div>
            </ACol>
            <ACol xs={12} sm={6} md={4} xl={2}>
                <div style={{ height: "100px", backgroundColor: "yellow" }}></div>
            </ACol>
            <ACol xs={12} sm={6} md={4} xl={2}>
                <div style={{ height: "100px", backgroundColor: "green" }}></div>
            </ACol>
        </AFila>
    );
}
