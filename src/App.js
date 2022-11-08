import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  const helmetContext = {};
  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
      <Router/>
      </HelmetProvider>
    </div>
  );
}

export default App;
