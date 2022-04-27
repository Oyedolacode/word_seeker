import { useEffect } from 'react';
import './App.css';
import axios  from 'axios';

function App() {
  const dictionaryApi = async() => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
    } catch (error){
    console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();

  }, [])


  return <div className='App'>Hello World</div>;
    
}

export default App;
