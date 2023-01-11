import {useSelector} from "react-redux";

export const StatusBar = () => {
  const {connection} = useSelector(state => state.trading)

  return (
    <span
      className="icon-rss"
      style={{color:`${connection ? 'green': 'red'}`}}
    />
)}