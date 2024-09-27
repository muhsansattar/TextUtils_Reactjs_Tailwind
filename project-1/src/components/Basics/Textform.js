import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase" , "success");
  }
  const handleLoClick = () =>{
  
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase" , "success");

  }
  const handleClearClick = () =>{
    
    let newText = "";
    setText(newText)
    props.showAlert("Data is cleared" , "success");

  }

  const handleChange =(event) =>{
    console.log("button");
    setText(event.target.value)
  }
  const handleCopy = () =>{
    var text = document.getElementById ("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Data is Copied" , "success");

    
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces is removed" , "success");

  }




    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleChange} style={{backgroundColor:props.mode==="dark"?"gray":"white" ,color:props.mode==="dark"?"white":"#042743"}} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copied All</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear All</button>

    </div>
    <div className='container  my-3' style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h2>Your text Summary is</h2>
      <p>{text.split(" ").length} words , {text.length} chracters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  
  
  )
}
