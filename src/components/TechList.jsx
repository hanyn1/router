import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Data from '../DataBase/Data'
import './techList.css'
import { useNavigate } from 'react-router-dom';
export default function TechList() {
  const navig=useNavigate()
  return (
    <div>
      <h1 className='jomla'>THE BEST TECHNOLOGIES TO DISCOVER</h1>
    <div className="row">
      
      {
        Data.map((ele)=>(
          <div class="card" style={{width: "18rem"}} key={ele.id}>
  <img src={ele.logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><span style={{color:'red'}}>Tech Name :</span> {ele.name}</h5>
    <h5 class="card-title"><span style={{color:'red'}}>Tech utility : </span>{ele.frontBack}</h5>
    
  </div>
</div>
        ))
      }
      <button type="button" class="btn btn-danger" 
      style={{position:'absolute', 
      height:"50px",
       width:"100px", 
       top:"370px",
      left:"530px"}} 
      onClick={()=>{
        navig('/AddTech')
      }} >Add Tech</button>
    </div>
    </div>
  )
}
