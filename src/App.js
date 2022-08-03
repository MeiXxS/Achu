import logo from './logo.svg';
import './App.css';
import Home from './home';
import { useState } from 'react';
import Info from './Info';

function App() {
const [paginaactual,setpaginaactual] = useState ("Home");


  return (
    <div className="App">
      <header className="App-header">
       <h1>Luvar</h1>
       <span style={{paddingBottom:20}}>{paginaactual}</span>
       
      </header> <div style={{display:"flex", justifyContent:"flex-start", backgroundColor:"black", padding: 15}}>
       <button onClick={()=>{setpaginaactual("Home")}}>Home</button>
       <button onClick={()=>{setpaginaactual("Info")}}>Info</button>
       </div>
      {paginaactual === "Home" && <Home></Home>}
      {paginaactual === "Info" && <Info></Info>}
    </div>
    
  );
}

export default App;