import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import flech from '../assets/flech.png'
export default function Home() {
  const navig=useNavigate()
  return (
    <div>
      <div className='home'>
      <h1 className='leg'>WELCOME TO IT WORLD</h1>
      <button type="button" class="btn btn-info" style={{ position: 'absolute',top:"270px", left:"670px"}} onClick={()=>{navig('/TechList')}}>Let's discover</button>
      <img className='taswira' src={flech} alt="..." />
      </div>
     
    </div>
  )
}
