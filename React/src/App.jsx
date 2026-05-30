import "./App.css";
import Title from "./Title.jsx";

function Title(){
  return <h1>I am the title</h1>
}

function Description(){
  return <h3>I am the Description!</h3>
}
function App() {
  

  return( 
  <div>
  <Title/>
  <Description/>

  </div>
  );
}

export default App;
