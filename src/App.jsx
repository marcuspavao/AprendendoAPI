import SearchButton from './Components/SearchButton';
import './App.css';
import ImagemDia from './Components/ImagemDia';
import React,{useState} from 'react';



function App() {

  const [count, setCount] = useState(0);

   return (
    <div className="App">
      <SearchButton count={count} setCount={setCount}/>
      <ImagemDia show={count}/>
    </div>
  )
}

export default App;
