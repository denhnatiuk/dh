import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

console.log("hot reload");

function App() {

  const [data, setData] = useState([]);

  const getData=()=>{
    fetch('https://spreadsheets.google.com/feeds/cells/1EM9Jye2-cDHz8lslK-IykXSIZuaEr9JKsi3vUtKB2Fo/1/public/full?alt=json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {
            data && data.length>0 && data.map((item)=><p>{item.about}</p>)
          }
        </a>
      </header>
    </div>
  );
}

export default App;
