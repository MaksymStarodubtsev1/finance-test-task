export const StatusBar = ({connections}) => (
    <span
      className="icon-rss"
      style={{color:`${connections ? 'green': 'red'}`}}
    />
)