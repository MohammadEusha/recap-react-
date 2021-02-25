import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const nameArray = [
  //   {name : 'Kala', age: '20'},
  //   {name : 'Lal' , age: '30'},
  //   {name : 'Sada' , age: '40'},
  //   {name : 'Beguni' , age: '50'},
  // ]
  const [nayoks, setNayoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setNayoks(data))
  },[])
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Nayoks nameOfNayok = {nayok.name} key = {nayok.id} number={nayok.age}></Nayoks>)
      }
      
      <Movie></Movie>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
function Movie(pros) {
  const [count, setCount] = useState(9)
  const handleClick = () =>{
    setCount(count + 1)
  }
  return(
    <div style={nayokStyle}>
      <h2>Number Of Movies :{count} </h2>
      <Acted moviesCount = {count}></Acted>
      <Acted moviesCount = {count + 1}></Acted>
      <Acted moviesCount = {count - 1}></Acted>
      <button onClick = {handleClick}>Add Movie</button>
    </div>
  )
}
function Acted(props) {
  return(
    <h4>Movies I have Acted : {props.moviesCount} </h4>
  )
}
const nayokStyle = {
  border : '5px solid gray',
  margin: '10px'
  
}
function Nayoks(props) {
  return(
    <div style = {nayokStyle}>
      <h1>Name : {props.nameOfNayok}</h1>
      <h3>I have done {props.number} movies.</h3>
    </div>
  )
}

export default App;
