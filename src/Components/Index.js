import {useState, useEffect } from 'react';
import './Index.css';
import './Image.css';
import Axios from 'axios';
import Image from './Image';
import * as ReactBootstrap from 'react-bootstrap';



function Form() {
  const [search, setSearch]=useState("") 
  const [images, setImages]=useState([])//array of images

  const [loading, setLoading]=useState(false);
  const [apod,setApod]=useState(null);//picture of the day
  const [media,setMedia]=useState("");

  
  
  const [title, setTitle]=useState("")
  const [date, setDate]=useState("")
  const [description, setDescription]=useState("")

  const pictureOfTheDay=async()=>{
    try {
      const result=await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=vMtA7TfsWPGpWypFgJFOXjcLpduV2lj59YMBp13r`)
      .then(res=>{
        // console.log(res);
        setLoading(true);
        setApod(res.data.url)//set picture of the day
        setDate(res.data.date);
        setMedia(res.data.media_type);
        setTitle(res.data.title);
        setDescription(res.data.explanation);
        setTimeout(()=>{
          setLoading(false);
        },1000)
        
      });    
    } catch (e) {
      console.log(e)      
    }
  }


  useEffect(()=>{
    pictureOfTheDay();
  },[]);

  const getImages=async()=>{
    const result=await Axios.get(`https://images-api.nasa.gov/search?q=${search}`)
    .then(res=>{
      // console.log(res.data.collection.items);
      setLoading(true);
      setImages(res.data.collection.items);
      setTimeout(()=>{
        setLoading(false);
      },1000)        
    }).catch(
      function (error) {
        console.log('Show error notification!')
        // return Promise.reject(error)
      }
    )            
  }
  

  const onSubmit =(e)=>{
    e.preventDefault();
    getImages();
};






var words = ['"saturn"','"venus"', '"jupiter"','"mercury"', '"star"', '"galaxy"'];
var input = words[Math.floor(Math.random() * words.length)];
let searchPlaceholder=` try   ${input}`;

  return (
    <div className="app">
      <h1 className="app_name">Spacestagram</h1>
      <form onSubmit={onSubmit} className="app_SearchForm" >
        <input type='text'
        className="app_input" 
        placeholder={searchPlaceholder}
        value={search} onChange={(e)=> setSearch(e.target.value)}
        />
        {/* submit button */}
        <input type="submit"
        value="search"
        className="app_submit"
        />

               

      </form>

      <div class="apod"> 
      {/* picture or video of the day */}    
      {/* conditional rendering of image or video */}
      {
        media !== 'video' ?
        <img 
            className='imageOfDay'
            src={apod}
        /> :
        <iframe className='imageOfDay' src={apod} controls />
      }
      </div>
      <div>
        {
          media !== 'video' ?
          <p className="imgText" > PICTURE OF THE DAY  </p>
          :
          <p className="imgText" > VIDEO OF THE DAY  </p>
        } 
        <p className="imgText"><b>{title}</b></p>
        <p className="imgText">{date}</p>  
      </div>   


      <div className="images">
        {/* A loader before api finishes calling */}
        
        { loading ? <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> ( < ReactBootstrap.Spinner animation="border" variant="success" />) </div> :
          images.map(image=>{
            return <Image image={image}/>
          })
        }

        

      </div>
    </div>
    
  );
}

export default Form;
