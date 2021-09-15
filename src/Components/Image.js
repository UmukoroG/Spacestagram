import React from 'react'
import './Image.css';
import {useState, useEffect } from 'react';


export default function Image({image}){
    
    const [like, setLike]=useState(false);
    const [counter, setCounter]=useState(0);

    let ButtonStyle={
        marginBottom: '35px',
        borderRadius: '5px',
        
    }

    function onClickLike(){
        //update counter so when it's odd, like button turns blue
        //and back to white when unliked
        setCounter(counter + 1);
        if(counter%2==1){
            setLike(true);
            ButtonStyle={
                backgroundColor:'lightsteelblue'
            };
            
        }
        else{
            setLike(false);
        }
    };

    

    return(
        
        <div className='nasaApi'>
            <img 
            className="nasaApi_img"
            src={image['links'][0]['href']}
            />
            <p className="nasaApi_name"><b>{image['data'][0]['title']}</b></p>
            
            <p>{image['data'][0]['date_created']}</p>
            <button 
            id="likeButton" 
            onClick={onClickLike} 
            ><i class="fa fa-thumbs-o-up" 
            // if counter > 0, show the numbers of like, else show nothing
            aria-hidden="true"></i>Like { counter > 0 ? counter : ''} </button>
        </div> 
    )
}

