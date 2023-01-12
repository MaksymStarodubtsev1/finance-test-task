import './styles/App.css';
import {SwitchConnection} from "./components/elements/SwitchConnection";
import {StatusBar} from "./components/elements/StatusBar";
import {useSelector} from "react-redux";
import {useWebSocketContext} from "./context/WebSocketProvider";
import {Interval} from "./components/interval";

function App() {
  const {connection} = useSelector(state => state.trading)
  const {startTrading, stopTrading} = useWebSocketContext()

  return (
    <div className="App">
      <header className="App-header">
        <SwitchConnection start={startTrading} stop={stopTrading} />
        <Interval />
        <StatusBar status={connection}/>
      </header>
    </div>
  );
}

export default App;
