import './App.css';
import {useTradingConnections} from "./hooks/trading/useTradingConnections";
import {Button, Switch} from "@mui/material";
import {SwitchConnection} from "./components/SwitchConnection";

function App() {

  const {
    connectionStatus,
    startTrading: handleStart,
    stopTrading: handleStop
  } = useTradingConnections()

  return (
    <div className="App">
      <header className="App-header">
        header
        <div><span className="icon-rss" style={{color:`${connectionStatus ? 'green': 'red'}`}} /></div>
        <SwitchConnection />
        {/*<div>*/}
        {/*  <Button onClick={handleStart} variant="contained" color="success">Start trading</Button>*/}
        {/*  <Button onClick={handleStop} variant="contained" color="error">Stop trading</Button>*/}
        {/*</div>*/}
      </header>
    </div>
  );
}

export default App;
