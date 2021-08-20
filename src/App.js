import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Konten from './components/Konten-home';
import iconDisclaimer from './assets/icon/Info.png'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Tips from './Page/Tips';
import About from './Page/About';
import axios from 'axios';
import {useEffect, useState} from 'react'
require('dotenv');

function App() {
  // ngambil data
  const [konten, setKonten] = useState([
    {
      judul: "",
      kategori: "",
      deskripsi: "",
      link:""
    }
  ]);

  useEffect(() => {
    ambildata()
  }, [])

  function ambildata() { 
    axios
    .get(`${process.env.REACT_APP_API_URL}`)
    .then((res)=>{
      setKonten(res.data)
      console.log(konten)
    })
    .catch((err) => {
      console.log(err)
    })
  
  }

  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar konten={konten}/>
        <Switch>
          <Route path="/" exact>
            <Header />
            <div className="disclaimer">
              <img src={iconDisclaimer} alt="icon disclaimer" />
              <p>
                I'm sorry if the information listed is inaccurate, because the author is only human
              </p>
            </div>
            <Konten headerkonten={konten}/>
          </Route>

          <Route path="/tips">
            <Tips tipskonten={konten}/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

        </Switch>

      </BrowserRouter>

      
      <p className="footer">
        Copyright 2021
      </p>
    </div>
  );
}

export default App;
