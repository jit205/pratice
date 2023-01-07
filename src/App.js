import './App.css';
import Navbar from './component/Navbar';
import Textdemo from './component/Textdemo';
import react,{ useState } from 'react';

// hello
function App() {
  const [mode, setmode] = useState('light')
  const toggel=()=>{
    if(mode === 'light')
    {
      setmode('dark');
    }
    else{
      setmode('light');
    }
  }
  
  return (
   <>
   
  <Navbar a='jittam' mode={mode} toggel={toggel}/>
  <div  className='container my-3'>
  <Textdemo  titel='enter the text'/>
  </div>
   </>
  );
}

export default App;
