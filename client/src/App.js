import './styles/App.css';
import {SwitchConnection} from "./components/elements/SwitchConnection";
import {StatusBar} from "./components/elements/StatusBar";
import {useSelector} from "react-redux";
import {useWebSocketContext} from "./context/WebSocketProvider";
import {Interval} from "./components/interval";
import {CoinBox, CoinContainer, CoinLabel, CoinStatus} from "./components/styledComponents";

function App() {
  const {connection} = useSelector(state => state.trading)
  const {startTrading, stopTrading} = useWebSocketContext()
  const {tradingInfo} = useSelector(state => state.trading)
  console.log('tradingInfo', tradingInfo)
  return (
    <div className="App">
      <header className="App-header">
        <SwitchConnection start={startTrading} stop={stopTrading} />
        <Interval />
        <StatusBar status={connection}/>
      </header>
      <main className="App-main">
        <CoinContainer>
          {
            tradingInfo?.map(({ticker, price}) => (
              <CoinBox key={ticker}>
                <CoinStatus>
                  ||
                </CoinStatus>
                <CoinLabel>
                  <span>{ticker}</span>
                  <span>{price}</span>
                </CoinLabel>
              </CoinBox>
            ))
          }
        </CoinContainer>
      </main>
    </div>
  );
}

export default App;
