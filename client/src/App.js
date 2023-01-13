import './styles/App.css';
import {SwitchConnection} from "./components/elements/SwitchConnection";
import {StatusBar} from "./components/elements/StatusBar";
import {useSelector} from "react-redux";
import {useWebSocketContext} from "./context/WebSocketProvider";
import {Interval} from "./components/interval";
import {
  CoinBox,
  CoinContainer,
  CoinInfo,
  CoinInfoWrapper,
  CoinStatus,
} from "./components/styledComponents";

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
            tradingInfo?.map(({ticker, price, yield: increase, change_percent, dividend}) => {
              const isPositive = increase > 1
                const color = isPositive ? '#00e9ff40' : '#ff000040'
              return (
                <CoinBox key={ticker}>
                  <CoinInfoWrapper>
                    <CoinStatus bgcolor={color}>
                      <span className={`icon-arrow-${isPositive ? 'up' : 'down'}2`}></span>
                    </CoinStatus>
                    <CoinInfo>
                      <span>{ticker}</span>
                      <span>{price}</span>
                    </CoinInfo>
                  </CoinInfoWrapper>
                  <CoinInfo>
                    <span>+{change_percent}%</span>
                    <span>+{dividend}</span>
                  </CoinInfo>
                </CoinBox>
              )
            })
          }
        </CoinContainer>
      </main>
    </div>
  );
}

export default App;
