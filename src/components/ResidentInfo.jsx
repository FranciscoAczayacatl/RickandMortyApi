import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetStatus from './GetStatus';

const ResidentInfo = ({url}) => {
  
  const [charater ,getCharater]=useState([]);
 
  useEffect(()=>{
    axios.get(url)
    .then(res=>
      getCharater(res.data));
  },[])

  return (
    <div className='card'>
      <div className='card-name'>
       <h1>{charater.name}</h1>
      </div>
      
      <div className='charater-info'>
        <img src={charater.image} alt={charater.name}/>
        <div className='charater-description'>
         
          <p><b>Status: </b> <GetStatus info={charater.status}/> {charater.status}</p>
          <p><b>Origin: </b>{charater.origin?.name}</p>
          <p><b>Episode: </b>{charater.episode?.length}</p>
          <p><b>Specie: </b>{charater.species}</p>
          <p><b>Gender: </b>{charater.gender}</p>
        </div>
      </div>
     
    </div>
  );
};

export default ResidentInfo;