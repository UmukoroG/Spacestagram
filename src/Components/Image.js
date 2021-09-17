import React from 'react'
import './Image.css';
import {useState, useEffect } from 'react';
import { Player } from 'video-react';


export default function Image({image}){
    
    const [like, setLike]=useState(false);
    const [counter, setCounter]=useState(0);

    var nasa_id=image.data[0].nasa_id;
    var media=image.data[0].media_type;
    


    const mapper=new Map();//key value pair of image_id and the liked photos

    function stayLiked(){
        const myStorage = window.localStorage;
        localStorage.setItem(nasa_id,like);
        if(like==true){
            // localStorage.get(nasa_id);
            const mapper2=new Map;
            mapper2.set(nasa_id,like);//keeps it as liked in the second map
            
            // console.log(mapper2);
            // setCounter(counter+1);
        }

    }
   

    function onClickLike(){
        setCounter(counter +1);
        mapper.set(nasa_id,like);//key value pair
        setLike(true);
        if(like && mapper.get(nasa_id)===true){
            setLike(false)
            setCounter(counter-1);
            mapper.delete(nasa_id);
        }
        stayLiked();
    }

    

    

    return(
        
        image['links'][0]['href'].match(/\.(jpg|jpeg|png)$/)
        !=null &&(
            <div className='nasaApi'>
                <img 
                    className="nasaApi_img"
                    src={image['links'][0]['href'] || image['links'][1]['href'] }
                    
                />
 
                <p className="nasaApi_name"><b>{image['data'][0]['title']}</b></p>
                
                <p>{image['data'][0]['date_created']}</p>
                <button 
                    id="likeButton" 
                    onClick={onClickLike} 
                    ><i class="fa fa-thumbs-o-up" 
                    // if counter > 0, show the numbers of like, else show nothing
                    aria-hidden="true"></i>Like { counter > 0 ? counter : ''} 
                </button>
            </div>
        ) 
    )
}

