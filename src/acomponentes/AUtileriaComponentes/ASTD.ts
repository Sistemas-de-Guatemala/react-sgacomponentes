import * as xlsx from 'xlsx';
import * as FileSaver from 'file-saver';

/**
 * Este archivo contiene funciones y utilidades para el propio uso de los componentes
 * este archivo no es 100% nativo y compatible si se migra a otros proyectos
 *
 * Dependencias
 * ------------
 *  - xlsx
 */

/**
 * Funcion para exportar una tabla a excel
 * @param {string} nombre_excel Nombre del archivo excel
 * @param {string} nombre_hoja_excel Nombre de la hoja del archivo excel
 * @param {Array<any>} datos Datos a exportar
 */
function GenerarExcelJSON(nombre_excel:string, nombre_hoja_excel:string, datos:Array<any>): void{
    // Creamos el excel
    let wb = xlsx.utils.book_new();
    // Creamos la hoja
    let ws = xlsx.utils.json_to_sheet(datos);
    // Agregamos la hoja al libro
    xlsx.utils.book_append_sheet(wb, ws, nombre_hoja_excel);
    // Exportamos el libro
    const salidaExcel = xlsx.write(wb, {bookType: 'xlsx', bookSST: false, type: "buffer"});
    // Creamos el blob
    const blob = new Blob([salidaExcel], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});
    FileSaver.saveAs(blob, nombre_excel + ".xlsx");
}

/**
 * Esta función transforma el array que devuelve xlsx a un array de objetos
 * @param {Array<any>} datos Datos a transformar
 */
function ArrayExcelAArrayObjetos(datos:Array<any>): Array<any> {
    if (Array.isArray(datos)) {
        if (datos.length > 1) {
            const nuevo_array = [];
            // Transformar columnas a un objeto
            let objeto:any = {};
            for (let j = 0; j < datos[0].length; j++) {
                objeto[datos[0][j]] = "";
            }

            // Leer los datos del array
            for (let i = 1; i < datos.length; i++) {

                for (let j = 0; j < datos[i].length; j++) {
                    const llaves = Object.keys(objeto);
                    objeto[llaves[j]] = datos[i][j];
                }

                nuevo_array.push({ ...objeto });
            }
            return nuevo_array;
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
}

/**
 * Está función transforma 2 arrays para que sean compatibles para la función de generar excel
 * @param {Array<any>} encabezados Encabezados de la tabla
 * @param {Array<any>} datos Datos a transformar
 */
function TransformarATablaDinamicaAExcel(encabezados:Array<any>, datos: Array<any>): Array<any> {
    let objeto_excel:any = {};
    for (let i = 0; i < encabezados.length; i++) {
        objeto_excel[encabezados[i]] = "";
    }

    const nuevo_array = [];
    for (let i = 0; i < datos.length; i++) {
        let objeto:any = {};
        for (let j = 0; j < encabezados.length; j++) {
            objeto[encabezados[j]] = datos[i][j];
        }
        nuevo_array.push({ ...objeto });
    }

    return nuevo_array;
}

/**
 * Esta función imprime un objeto html pasandole el id
 * @param {string} idhtml Id del elemento html
 */
function ImprimirObjetoHTML(idhtml: string){
    const elemento = document.getElementById(idhtml);
    if(elemento){
        let ventanaImpresion: any = window.open("");
        elemento.innerHTML = "<html><head><title>Imprimir</title><link rel='stylesheet' href='css/style.css'/></head><body>" + elemento.innerHTML + "</body></html>";
        ventanaImpresion.document.write(elemento.innerHTML);
        ventanaImpresion.print();
        ventanaImpresion.close();
    }
    else{
        throw new Error("El parametro idhtml no fue encontrado");
    }
}


export{
    GenerarExcelJSON,
    ArrayExcelAArrayObjetos,
    TransformarATablaDinamicaAExcel,
    ImprimirObjetoHTML
}
