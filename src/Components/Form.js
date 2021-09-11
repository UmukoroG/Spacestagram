import {useState } from 'react';
import './Form.css';
import Axios from 'axios';
import Image from './Image';
import Register from './Register';

function Form() {
  const [search, setSearch]=useState("") 
  const [images, setImages]=useState([])

  
  var url=`https://images-api.nasa.gov/search?q=${search} `

  async function getImages(){
    var result= await Axios.get(url);
    setImages(result.data.collection.items)
    console.log(result.data.collection.items)
  }
  const onSubmit =(e)=>{
    e.preventDefault();
    getImages();

  }


  return (
    <div className="app">
      <h1 className="app_name">Spacestagram</h1>
      <form onSubmit={onSubmit} className="app_SearchForm">
      <input type='text'
        className="app_input" 
        placeholder='search...  try car'
        value={search} onChange={(e)=> setSearch(e.target.value)}
        />

        <input type="submit"
        value="search"
        className="app_submit"
        />
        

      </form>
      

      <div className="images">
        {images.map(image=>{
          return <Image image={image}/>
        })}

      </div>
    </div>
  );
}

export default Form;
