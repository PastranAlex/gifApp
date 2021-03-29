import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import Gifgrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['dragon ball'])

  // const handleAdd = () => {
  //   setCategories([...categories, 'HxH'])
  // }
  return ( 
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = {setCategories}/>
      <hr/>
      <ol>
        { categories.map( category => {
          return <Gifgrid 
                  category = { category }
                  key = { category }
                  />
        })}
      </ol>
    </>
   );
}
 
export default GifExpertApp;