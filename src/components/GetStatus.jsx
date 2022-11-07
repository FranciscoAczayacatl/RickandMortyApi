import React from 'react';

const GetStatus = ({info}) => {
 if (info==='Alive') {
  return(
    <div className='status'></div>
  )
  
 } else if(info==='Dead'){
    return(
      <div className='status' style={{backgroundColor:'red'}}></div>
    )
  
 }else{
    return(
      <div className='status' style={{backgroundColor:'gray'}}></div>
    )
  
 }
};

export default GetStatus;