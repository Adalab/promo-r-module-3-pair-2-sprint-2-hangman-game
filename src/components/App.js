import { useEffect, useState } from 'react';
import Header from './Header'
import Dummy from './Dummy'
import SolutionLetters from './SolutionLetters'
import ErrorLetters from './ErrorLetters'
import Footer from './Footer'
import Instructions from './Instructions'
import Options from './Options'
import Loading from './Loading'
import { Route, Routes } from 'react-router-dom';
import Form from './Form'

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';


import '../styles/Form.scss';



function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  const [isLoading, setIsLoading] = useState();
  

  useEffect(() => {
    setIsLoading(true);
    getWordFromApi().then((word) => {
      setWord(word);
    });
    setIsLoading(false);
  }, []);

  // events

  const updateInput = (word) =>{
    setWord(word);
    setUserLetters([]);
    setLastLetter('');
  }


  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header/>
     
      <main className='main'>
        <Loading loading='loading' isLoading={isLoading} />
      <Routes>
        <Route
        path='/'
        element={
          <section>
          <SolutionLetters word={word} userLetters={userLetters}/>
          <ErrorLetters  word={word} userLetters={userLetters}/>
          <Form lastLetter={lastLetter} handleLastLetter={handleLastLetter} />
        </section>
        }
      ></Route>
      <Route  path='/instructions' element={<Instructions/>}></Route>
      <Route  path='/options' element={<Options updateInput={updateInput} word={word}/>}></Route>
      </Routes>
        <Dummy numberOfErrors={getNumberOfErrors()}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
