import logo from './logo.svg';
import './App.css';
import DateTime from './DateTime.js';
import DateController from './DateController.js';
	
function App() {
  return (
	  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DateController pass="hola">
		</DateController>
      </header>
    </div>
  );
}
export default App;
