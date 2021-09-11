import React from 'react'
import './Image.css';

export default function Image({image}){
    return(
        
        <div className='nasaApi'>
            <img 
            className="nasaApi_img"
            src={image['links'][0]['href']}
            />
            <p className="nasaApi_name"><b>{image['data'][0]['title']}</b></p>
            
            <p>{image['data'][0]['date_created']}</p>
        </div> 
    )
}

