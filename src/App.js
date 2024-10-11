import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
//import {
//  BrowserRouter as Router,
//  Routes,
//  Route,
//  Link
//} from "react-router-dom";



function App() {

  const [alert,setAlert]=useState(null);

  const showalert=(message,type)=>{
    setAlert({
       msg: message,
       type: type

    })

          setTimeout(()=>{
                setAlert(null)
          },1500);
        }
            
        const [mode,setMode]=useState("white")

        const greenmode=()=>{
          if(mode ==="green"){
            setMode("white");
                document.body.style.backgroundColor='white'
                showalert("Enable Light Mode","success");
          }
          else{
            setMode("green");
            document.body.style.backgroundColor='#58d68d '
            showalert("Enable green Mode","success");
          }
      }


      const redmode=()=>{
        if(mode ==="brown"){
          setMode("white");
              document.body.style.backgroundColor='white'
              showalert("Enable Light Mode","success");
        }
        else{
          setMode("brown");
          document.body.style.backgroundColor='red'
          showalert("Enable Red Mode","success");
        }
      }


        const togglemode=()=>{
                if(mode ==="black"){
                  setMode("white");
                      document.body.style.backgroundColor='white'
                      showalert("Enable Light Mode","success");
                }
                else{
                  setMode("black");
                  document.body.style.backgroundColor='#042743'
                  showalert("Enable Dark Mode","success");
                }
        }

        return (
        <>
          {/*<Router>*/}
            <Navbar title="Prathamesh Chaudhari" mode={mode}  togglemode={togglemode} greenmode={greenmode}  redmode={redmode}/>
            <Alerts  alert={alert} />
          
            <div className="container my-3">
            {/*<Routes>
                <Route exact path="/about" element={<About/>}></Route>
                <Route exact path="/" element={ <TextForm title="Munna Chaudhari" mode={mode} showalert={showalert}/>}></Route>
            </Routes>*/}
            <TextForm title="Munna Chaudhari" mode={mode} showalert={showalert}/>
            </div>
            {/*</Router>*/}
        </>
        );
      }
  
      export default App;
