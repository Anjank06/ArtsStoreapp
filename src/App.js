import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload. by anjan kumar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <div className="white-gradient" />
        <Header />
      </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
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
export default App;
