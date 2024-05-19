// import logo from './utils/logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from './components/Companies/Conpanies';
import Residencies from "./components/Residencies/Residencies";
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
