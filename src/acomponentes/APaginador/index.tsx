import React, { useImperativeHandle, useMemo, useState, useEffect } from 'react';
import './APaginador.css';
import AControl from './../AUtileriaComponentes/AControl';
// Componentes
import ReactPaginate from 'react-paginate';

// Iconos
import {
    IoChevronBackSharp,
    IoChevronForwardSharp
} from "react-icons/io5";

export interface IPropsAPaginador {
    /** Clase CSS */
    className?: string;
    /** Etiqueta de anterior */
    etiquetaAnterior?: string;
    /** Etiqueta de Siguiente */
    etiquetaSiguiente?: string;
    /** Si es false, no se muestra el APaginador */
    visible?: boolean;
    /** Numero máximo de páginas */
    maxPaginas: number;
    /** Numero de página actual */
    paginaActual: number;
    /** Función que se ejecuta al cambiar de página */
    cambioPagina: (pagina: number) => void;
}

export interface IRefAPaginador{
    TipoAControl: () => string;
    Refuuid: () => string;
}

const APaginador = React.forwardRef<IRefAPaginador, IPropsAPaginador>(
    function APaginadorInterno (
        props,
        ref
    ) {

        const [visible, _] = useState<boolean>(props.visible || true);
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState<Array<any>>([]);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        const [ itemsPerPage, setItemsPerPage ] = useState(7);
        const [ items, setItems ] = useState<Array<any>>([]);
        const uuid = useMemo(() => AControl.GenerarUuidControl(), []);

        
        useImperativeHandle(ref, () => ({
            TipoAControl: () => "APaginador",
            Refuuid: () => uuid
        }));


        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        useEffect(() => {
            // @ts-ignore
            setItems([...Array(props.maxPaginas).keys()]);
            setItemsPerPage(props.maxPaginas);
        }, [props.maxPaginas]);

        const handlePageClick = (event:any) => {
            const newOffset = event.selected * itemsPerPage % items.length;
            setItemOffset(newOffset);
            props.cambioPagina(event.selected + 1);
        };

        if (visible) {
            return (
                <div
                    className={`apaginador ` + (props.hasOwnProperty('className') ? props.className : '')}
                    id={uuid}
                >
                    <ReactPaginate
                        nextLabel={<>{props.hasOwnProperty('etiquetaSiguiente') ? props.etiquetaSiguiente : "Siguiente"} <IoChevronForwardSharp size={20} /></>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={props.maxPaginas}
                        previousLabel={<><IoChevronBackSharp size={20} /> {(props.hasOwnProperty('etiquetaAnterior') ? props.etiquetaAnterior : "Anterior")} </>}
                        pageClassName="apaginador-pagina"
                        pageLinkClassName="apaginador-pagina-link"
                        previousClassName="apaginador-pagina"
                        previousLinkClassName="apaginador-pagina-link"
                        nextClassName="apaginador-pagina"
                        nextLinkClassName="apaginador-pagina-link"
                        breakLabel="..."
                        breakClassName="apaginador-pagina"
                        breakLinkClassName="apaginador-pagina-link"
                        containerClassName="apaginador-contenedor"
                        activeClassName="apaginador-paginas-seleccionada"
                        // @ts-ignore
                        renderOnZeroPageCount={null}
                        forcePage={props.paginaActual - 1}
                    />
                </div>
            );
        }
        else {
            return null;
        }
    }
);

export default APaginador;
