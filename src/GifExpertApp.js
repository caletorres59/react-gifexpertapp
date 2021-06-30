import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const  GifExpertApp  = () => {
    //const categories = ['One Punch', 'Samurai x', 'Dragon Ball' ];

    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = (e) =>{
    //    // setCategories([...categories,'Xmen']);
    //    //callback
    //    setCategories(cats => [...cats, 'Xmen']);
    // }
    return ( 
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(element => 
                    (<GifGrid category={element} 
                              key={element}/>))
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;