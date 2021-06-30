

export const ItemGif = ({ gif }) => {
    const {title, url} = gif;
    return (
         <li className="card animate__animated animate__bounce animate__delay-2s">
             <h4>{title}</h4>
             <img src={url}  alt={title} />
         </li>
            
         
    );
}
