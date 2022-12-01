import { useEffect, useState } from 'react';
import Header from './Header'
import Dummy from './Dummy'
import SolutionLetters from './SolutionLetters'
import ErrorLetters from './ErrorLetters'
<<<<<<< HEAD
import Footer from './Footer'
import Instructions from './Instructions'
import Options from './Options'
import { Route, Routes } from 'react-router-dom';
=======
import Form from './Form'

>>>>>>> 90ff84fcf89ad17b54a732a50f42ef296a330cdc

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';


import '../styles/Form.scss';



function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events




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
      <Route  path='/options' element={<Options/>}></Route>
      </Routes>
        <Dummy numberOfErrors={getNumberOfErrors()}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
