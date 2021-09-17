import React from 'react'
var uniqid = require('uniqid');

function LocalStor(){
    const myStorage = window.localStorage;
    const id=uniqid();
    // localStorage.setItem('user', id);


    // const userId=localStorage.getItem('user');
    // console.log(userId);
    return (
        <div>
            <h1>local storage</h1>
            {/* <h1>{myStorage}</h1> */}

        </div>
    )
}

export default LocalStor;