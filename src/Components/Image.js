import React from 'react'
import './Image.css';
import {useState, useEffect } from 'react';

export default function Image({image}){
    
    const [like, setLike]=useState(false);
    const [counter, setCounter]=useState(0);

    var nasa_id=image.data[0].nasa_id;

    //datas from API
    var images=image.links[0].href;
    var dates=image.data[0].date_created;
    var titles=image.data[0].title;


    const data={
        image:images,
        date:dates,
        title:titles
    }


    var mapper=new Map();//key value pair of image_id and the liked photos


    function onClickLike(){
        mapper.set(nasa_id,like);//key value pair
        setLike(true);
        setCounter(counter +1)
        //set local storage to true
        localStorage.setItem(nasa_id,like);
        if(like && mapper.get(nasa_id)===true ){
            setLike(false)
            setCounter(counter-1);
            //set local storage to false
            localStorage.setItem(nasa_id,like);
            //delete the key from the map
            mapper.delete(nasa_id);         
        }
        
    }

    return(
        
        image['links'][0]['href'].match(/\.(jpg|jpeg|png)$/)
        !=null &&(
            <div className='nasaApi'>
                <img className="nasaApi_img" src={data.image}/>
                <p className="nasaApi_name"> {data.title}</p>   
                <p>{data.date}</p>
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

