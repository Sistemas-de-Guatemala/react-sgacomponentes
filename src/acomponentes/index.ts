import ABoton from './ABoton';
import ABotonOpciones from './ABotonOpciones';
import AEtiqueta from './AEtiqueta';
import ACajaTexto from './ACajaTexto';
import ACheckBox from './ACheckBox';
import APaginador from './APaginador';
import APanel from './APanel';
import ARadioBotones from './ARadioBotones';
import ATitulosPantallas from './ATitulosPantallas';
import ATablaDinamica from './ATablaDinamica';
import ADesplegable from './ADesplegable';
import AFotos from './AFotos';
import ALogoCarga from './ALogoCarga';
import {
    APanelPestanas,
    APanelPestana
} from './APanelPestanas';

import {
    GenerarExcelJSON,
    ArrayExcelAArrayObjetos,
    TransformarATablaDinamicaAExcel,
    ImprimirObjetoHTML
} from './AUtileriaComponentes/ASTD';

export{
    ABoton,
    ABotonOpciones,
    AEtiqueta,
    AFotos,
    ACajaTexto,
    ACheckBox,
    APaginador,
    APanel,
    APanelPestana,
    APanelPestanas,
    ALogoCarga,
    ARadioBotones,
    ATitulosPantallas,
    ATablaDinamica,
    ADesplegable,

    /** Generar Excel desde un JSON */
    GenerarExcelJSON,
    /** Transformar un array excel a un array de objetos */
    ArrayExcelAArrayObjetos,
    /** Transformar Datos de tabladinamica a excel */
    TransformarATablaDinamicaAExcel,
    /** Pasar objeto a una impresión HTML */
    ImprimirObjetoHTML
}