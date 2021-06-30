import React from 'react'
import { ItemGif } from './ItemGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({ category }) => {
   const {data:images, loading}= useFetchGifs(category); 
    return (
        <div>
            <h3>{category}</h3>
            {
                loading && <p>Cargando</p> 
            }

            <ul className="list-gifts">

                {
                    images.map(img => <ItemGif key={img.id} gif={img} />)
                }
            </ul>
            
            
        </div>
    )
}
