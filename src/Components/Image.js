import React from 'react'
import './Image.css';
import {useState, useEffect } from 'react';


export default function Image({image}){
    
    const [like, setLike]=useState(false);
    const [counter, setCounter]=useState(0);

    

    function onClickLike(){
        //update counter so when it's odd, like button turns blue
        //and back to white when unliked
        setCounter(counter + 1);
        if(counter%2==1){
            setLike(true);
        }
        else{
            setLike(false);
        }
        console.log(like);


    }

    return(
        
        <div className='nasaApi'>
            <img 
            className="nasaApi_img"
            src={image['links'][0]['href']}
            />
            <p className="nasaApi_name"><b>{image['data'][0]['title']}</b></p>
            
            <p>{image['data'][0]['date_created']}</p>
            <button id="likeButton" 
            onClick={onClickLike} 
            ><i class="fa fa-thumbs-o-up" 
            aria-hidden="true"></i>Like {counter}</button>
        </div> 
    )
}

