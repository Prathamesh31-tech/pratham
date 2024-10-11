import React ,{useState}from 'react'

export default function TextForm(props) {
   const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert(" Convert to UpperCase","success");
   }

   const handlelowerclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showalert(" Convert to lowerCase","success");
   }

   const handleonChange=(event)=>{
    console.log("button was cllicked");
    setText(event.target.value);
   }

    const [text,setText]=useState(" ");
  return (
   
    <>
     <div className="container" style={{color:`${props.mode==='white'?'black':'white'}`}}>
         <h1>{props.title} </h1>
       <div className="mb-3">
          <label htmlFor="myBox" className="form-label"> Examples textarea</label>
          <textarea className="form-control" id="myBox" onChange={handleonChange} rows={8} value={text} defaultValue={""} style={{color:`${props.mode==='white'?'black':'white'}`, backgroundColor: `${props.mode==='white'?'white':'gray'}`}}/>
        </div>
          <button className="btn btn-primary my-1 mx-1"  onClick={handleUpClick}>Convert UpperCase</button>
          <button className="btn btn-primary mx-1 my-1"  onClick={handlelowerclick}>Convert UpperCase</button>
   </div>
    <div className="container" style={{color:`${props.mode==='white'?'black':'white'}`}}>
        <h2>your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Your Text"}</p>
    </div>
    </>
  )
}


