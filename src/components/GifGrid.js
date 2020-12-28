import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

/*  

    useEffect( () => { //Sólo se disparará 1 vez, si no se encuentra alguna dependencia [].
        getGifs( category )
        .then( imgs => setImages( imgs ) )
    }, [ category ] ); //El useEffect ejecuta la instrucción (getgifs) nada más cuando el comp se renderiza por 1 vez.
*/

    return ( 
        <>
        <h3 className="animate__animated animate__backInDown"> { category } </h3> 

        { loading && <p className="animate__animated animate__flash animate__delay-1s"> Loading... </p> }

        <div className="card-grid">     
                {
                    images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                        />
                    ))
                }                             
            </div> 
        </>
    )
}