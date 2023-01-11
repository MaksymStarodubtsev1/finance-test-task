import './App.css';
import {SwitchConnection} from "./components/SwitchConnection";
import {StatusBar} from "./components/connections/StatusBar";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <StatusBar />
        <SwitchConnection />
      </header>
    </div>
  );
}

export default App;
