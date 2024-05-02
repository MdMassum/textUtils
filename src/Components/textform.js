import React,{useState} from 'react'

export default function Textform(props) {

    const [text,setText] = useState("");

    const handleOnClick = ()=>{
        console.log(text.toLocaleUpperCase());
        let txt = text.toUpperCase();
        // console.log(txt);
        setText(txt);
        // alert message 
        props.showAlert(": Text Converted to UpperCase ","success");
    }
    const handleLwClick = () =>{
      let txt = text.toLowerCase();
      setText(txt);

      // alert message 
      props.showAlert(": Text Converted to LowerCase","success");
    }
    const handleOnChange = (event) =>{
        // console.log("textarea change");
        setText(event.target.value);
  
    }
    const handleClClick = () =>{
      setText("");
      props.showAlert(": Text cleared ","success");
    }


  return (
    <>
    <div className="form-group my-3">
        <label for="exampleFormControlTextarea1">{props.heading}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-1" onClick={handleOnClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleLwClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear</button>
    <hr />
    <div className="">
      <h3 className="my-2">Your Text Summary : </h3>
      <p className="">Total Words :{text.split(" ").filter((elem)=>{return elem.length!==0}).length} Total characters : {text.length}</p> 
      <hr />
      <h3>Preview</h3>
      <p>{text.length >0?text:"Enter Your text to Preview..."}</p>

    </div>
    </>
  )
}
