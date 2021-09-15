import {useState, useEffect } from 'react';
import './Form.css';
import Axios from 'axios';
import Image from './Image';
import Loader from 'react-loader-spinner';
import * as ReactBootstrap from 'react-bootstrap';
import { LocalStor } from './LocalStor';

function Form() {
  const [search, setSearch]=useState("") 
  const [images, setImages]=useState([])

  const [loading, setLoading]=useState(false);
  const [apod,setApod]=useState(null)
  
  
  var url=`https://images-api.nasa.gov/search?q=${search} `
  const [title, setTitle]=useState("")
  const [date, setDate]=useState("")
  const [description, setDescription]=useState("")

  var urlApod=`https://api.nasa.gov/planetary/apod`
  const pictureOfTheDay=async()=>{
    try {
      const result=await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=vMtA7TfsWPGpWypFgJFOXjcLpduV2lj59YMBp13r`)
      .then(res=>{
        console.log(res);
        setApod(res.data.url)//set picture of the day
        setDate(res.data.date);
        setTitle(res.data.title);
        setDescription(res.data.explanation);
        
      });    
    } catch (e) {
      console.log(e)      
    }
  }

  useEffect(()=>{
    pictureOfTheDay();
  },[]);

  const getImages=async()=>{
    try {
      const result=await Axios.get(url)
      .then(res=>{
        // console.log(res.data.collection.items);
        setImages(res.data.collection.items)
        setLoading(true);        
      })
    } catch (e) {
      console.log(e);
      
    }
  }
  

  const onSubmit =(e)=>{
    e.preventDefault();
    getImages();
};






var words = ['"car"', '"boat"'];
var input = words[Math.floor(Math.random() * words.length)];
let searchPlaceholder=` try   ${input}`;

  return (
    <div className="app">
      <h1 className="app_name">Spacestagram</h1>
      <form onSubmit={onSubmit} className="app_SearchForm">
      <input type='text'
        className="app_input" 
        placeholder={searchPlaceholder}
        value={search} onChange={(e)=> setSearch(e.target.value)}
        />

        <input type="submit"
        value="search"
        className="app_submit"
        />
               

      </form>

      <div class="apod"> 
      {/* picture of the day */}    
      <img className='imageOfDay' src={apod} alt="" />
      </div>
      <div class='container'>
        <p className="imgText" > PICTURE OF THE DAY  </p>
        <p className="imgText"><b>{title}</b></p>
        {/* <p className="imgText" >{description}</p> */}
        <p className="imgText">{date}</p>  
      </div>   

      <div className="images">

              
        {/* array of images from API */}

        {images.map(image=>{
            return <Image image={image}/>
        })}

              

        {/* {loading ? (
          images.map(image=>{
            return <Image image={image}/>
          })) : <ReactBootstrap.Spinner animation="border" />} */}
        

         {/* A loader before api finishes */}
        
        {/* { loading ? ( <ReactBootstrap.Spinner animation="border" />) :
          images.map(image=>{
            return <Image image={image}/>
          })
        } */}

        

      </div>
    </div>
    
  );
}

export default Form;
