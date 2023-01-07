import React ,{useState}from 'react'


export default function Textdemo(props) {
  const [btn, setbtn] = useState("enable dark mode")

  const [mystyle, setmystyle] = useState(
    {
      color: 'white',
      background : 'black'
    }
  )
const toggelstyle=()=>
{
  if(mystyle.color ==='white')
  {
    setmystyle(
      {
        color:'black',
        background:'white'
      }
      )
      setbtn("enable light mode")
  }
  else
  {
    setmystyle(
      {
        color:'white',
        background:'black'
      }
    )
    setbtn("enable dark mode")
  }
}
  const handeltupclick =()=>{
  console.log("clicked to uppercase");
  let newtext=text.toUpperCase();
  setText(newtext)
  }

  const clear =()=>{
    console.log("clear");
    let newtext='';
    setText(newtext)
    }
  const handeltonchange =(event)=>
  {
    console.log("handel to button");
    setText(event.target.value)

  }
  const copy=()=>{
    var text =document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)

  }
  const[text,setText]=useState('enter text here');
  // setText("new text");
  return (
    <>
     <h1>{props.a}</h1>
<div style={mystyle} className="mb-3">
  <textarea style={mystyle} className="form-control"value={text}   onChange={handeltonchange} id='myBox' rows="8"></textarea>
  <button style={mystyle} className='btn btn-primary mx-3'onClick={handeltupclick} >to upper case</button>
  <button style={mystyle} className='btn btn-primary 'onClick={clear} >clear</button>
  <button style={mystyle} className='btn btn-primary 'onClick={copy} >copy</button>

</div>
<div>
  <h1>this summery</h1>
  <p style={mystyle}>{text.split(" ").length} words and {text.length} character</p>
  </div>
  <div style={mystyle} className='cointaner' >
    <button  className='btn btn-primary'style={mystyle} onClick={toggelstyle}>{btn}</button>
  </div>
    </>
  )
}
