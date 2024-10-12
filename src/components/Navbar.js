
import React from 'react'
//import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg " style={{ backgroundColor: `${props.mode}`,color: "white" }}>

    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:`${props.mode==='white'?'black':'white'}`}}>
         {props.title}
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{color:`${props.mode==='white'?'black':'white'}`}}>
              munna
            </a>
          </li>
          {/*<li className="nav-item">
            <a className="nav-link" href="/about" style={{color:`${props.mode==='white'?'black':'white'}`}}>
              About
            </a>
          </li>*/}
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
