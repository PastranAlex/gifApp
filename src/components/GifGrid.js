import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


const Gifgrid = ({category}) => {

  const { data: images, loading } = useFetchGifs(category);
  // const [images, setImages] = useState([])
  
  // useEffect( () => {
  //   getGifs(category)
  //       .then( imgs => setImages(imgs));
  //       // .then( setImages);
  // }, [category]);


  return (
    <>
      <h3>{ category }</h3>
      { loading && <p className="animate__animated animate__flash">Cargando...</p>}
      <div className="card-grid">
          { 
            images.map( image => (
              <GifGridItem
                key = {image.id}
                {...image} 
              />
            )) 
          }
      </div>
    </>
  );
}
 
export default Gifgrid;