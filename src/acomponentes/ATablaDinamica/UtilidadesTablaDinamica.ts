

/**
 * Esta funcion genera una impresión a partir de una tabla dinamica.
 * @param {string} titulo - Titulo que se mostrará en la impresión.
 * @param {Array<string>} encabezados - Encabezados de la tabla.
 * @param {Array<Array<string>>} datos - Datos de la tabla.
 */
function ImprimirTablaDinamica(titulo: string, encabezados: Array<string|number>, datos: Array<Array<string|number>>): void {

    const encabezadoshtml = encabezados.map((elemento) => {
        return `<th>${elemento}</th>`;
    }).join('');

    const datosHtml = datos.map((fila) => {
        return `<tr>${fila.map((columna) => {
            return `<td>${columna}</td>`;
        }).join('')}</tr>`;
    }).join('');


    const html = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo} - SISCOOP</title>

    <style>

        *,
        *::after,
        *::before{
            box-sizing: border-box;
        }

        body{
            display: block;
            justify-content: center;
            align-items: center;
            font-family: Roboto, sans-serif;
        }

        header{
            width: inherit;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        h1{
            font-size: 20px;
        }

        main{
            width: inherit;
        }

        table{
            width: 100%;
            margin-top: 20px;
        }

        td{
            width: fit-content;
            height: auto;
            word-wrap: break-word;
            text-align: justify;
            padding: 10px;
        }

        table, th, td{
            border: 1px solid black;
            border-collapse: collapse;
        }

        footer{
            margin-top: 10px;
            text-align: center;
        }

    </style>
</head>
<body>
    <header>
        <div>
            <h1>SISCOOP - ${titulo}</h1>
        </div>
        <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAADGCAYAAADc30sqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAE9bSURBVHgB7b0NkFzHfR/4734zC4jEmsscq/ihWDsr34GVqrsDKDgiKJWDgSLbUUyJ4LnkGGR0AGwLrFTuQlDg+WK7nB2o6ip3dYQJKMnZgGQBiCPCZ7tCUqDtlBIbg0QOKUcQwXJVXERiYcDEAFmFCpcBTC525vU///7u93Z2d3b3vTezu/0jF/P1Zl6/ft2//n83QERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERExEBgEBGxlnHqygTI/8Y2IczdZoB33AUgJtznaY9BMvYubEpn6PP34PGpGYjojxevyH6bgG59Auo4AT16ldQQgM+o/vuJB65CxJpEJPq1BElqW2rbgbMGB9hGt28CGWsA0KQErskNUd7VDmfEeSA6IOCqYPwKfdKB92bfgAMjRHSWpHHzJGA6BZggZ2KKru8ueU0ICX2GE0w9l8fRpTGYoEucYHbkMnnJjD5Blh/MCOp9e5j9eAYBO5K8GOIlBuKNlNVfh//l3jdgo+C3/jONoWQbT3A7CmhQz2xnsn/136KgXn6XOvwNhuKSQHEBuukl2DvVgYiRRiT6UYYkwrs2b+NpuofIbw+90zC8pcGIqlATHDHkuyDwPaZfueOQyf+J8dDcbMY6qAiOtQVP2qUTnCUVJhqy/dRcSdzbqTGSuDPEotjaNBMlTZvhKa9BNR3teNWM747XNE9fwavydyVpqbfsTxi6Z7Y/0J5DnUR2DqPvz4DqF/6SYPAS/OQ6kl5pHPGJTfswxSZdb5OZflf9ivoZA2aHzLvUtxeIyKkvaUzJRRblQsCaoPuY+d7UoFdyPJ0W3dsvR9IfTUSiH0X81vVdnIv9NIX2ODJE84+cbIrmyEABOEOPx0Wtd5pMEp3Mb/zzd7Ylve5DdIf3EbE31TfQTGXzG/I1MV2HcWiLLp6BvT/YhoLBfus/X6FTTzpqUOI3I40DOkQZHeIY+sP9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"
             width="200px" height="100px" />
        </div>
    </header>
    <main>
        <table>
            <tbody>
                <tr>
                    ${encabezadoshtml}
                </tr>
            </tbody>
            <tbody>
                ${datosHtml}
            </tbody>
        </table>
    </main>

    <footer>
        ESTÁ INFORMACIÓN PROVIENE DE LA CONSULTA DE UNA TABLA DINÁMICA DE SISCOOP
    </footer>
</body>
</html>
    `;
    let ventanaImpresion: any = window.open("");
    ventanaImpresion.document.write(html);
    setTimeout(() => {
        ventanaImpresion.print();
    }, 10);
}

export {
    ImprimirTablaDinamica
}