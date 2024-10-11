
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg " style={{ backgroundColor: `${props.mode}`,color: "white" }}>

    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{color:`${props.mode==='white'?'black':'white'}`}}>
         {props.title}
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{color:`${props.mode==='white'?'black':'white'}`}}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{color:`${props.mode==='white'?'black':'white'}`}}>
              About
            </Link>
          </li>
          </ul>

        <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked="" onClick={props.greenmode}/>
            <label className={`form-check-label text-${props.mode==='white'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Green Mode</label>
       </div>

       <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked="" onClick={props.redmode}/>
            <label className={`form-check-label text-${props.mode==='white'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Red Mode</label>
     </div>


        <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked="" onClick={props.togglemode}/>
            <label className={`form-check-label text-${props.mode==='white'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
     </div>
  </div>
    </div>
  </nav>
  </>
  )
}
