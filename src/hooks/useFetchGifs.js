
import {useState, useEffect} from 'react';
import { GetGifs } from '../helpers/getGifs';
export const useFetchGifs = (category) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

        useEffect( () => {
            GetGifs(category).then(images => {
                setTimeout(() => {
                    setstate({
                        data: images,
                        loading: false
                    })
                }, 3000);
               
            })
        }, [ category ]);

   

    return state;
}