import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import ResidentInfo from './components/ResidentInfo';

function App() {

  const[locations, getLocation]=useState({});
  const [typeId,setTypeId]=useState('')
  
  
  useEffect(()=>{
    const ramdomIndex=Math.floor(Math.random()*126)
    axios.get(`https://rickandmortyapi.com/api/location/${ramdomIndex}`)
    .then(res =>getLocation(res.data));
  },[]);

  const searchType=()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then(res =>getLocation(res.data));
  }

  console.log(locations);
  return (
    <div className="App">
      <header>
        <h1>Rick and Morty</h1>
        <div className='search'>
          <input type="text" value={typeId} onChange={e=>setTypeId(e.target.value)} placeholder="ID Example: 1" />
          <button onClick={searchType}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </header>
      <div className='about-search'>
      
        <div className='about'>
          <div className='name-location'>
            <h1>{locations.name}</h1>
          </div>
          <div className='about-location'>
            <p><b>Tipe: </b>{locations.type}</p>
            <p><b>dimension: </b>{locations.dimension}</p>
            <p><b>Residents: </b>{locations.residents?.length}</p>
          </div>
          
        </div>
        
      </div>
    <div className='container-cards'>
      {
        locations.residents?.map(location=>(
        <ResidentInfo url={location} key={location}/>
        ))
      }
    </div>
    
    </div>
  )
}

export default App
