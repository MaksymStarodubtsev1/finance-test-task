export const StatusBar = ({status}) => (
    <span
      className="icon-rss"
      style={{color:`${status ? 'green': 'red'}`}}
    />
)