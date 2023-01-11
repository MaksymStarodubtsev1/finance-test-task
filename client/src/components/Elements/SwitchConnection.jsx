import {Switch} from "@mui/material";
import {useState} from "react";
import {useWebSocketContext} from "../../context/WebSocketProvider";

export const SwitchConnection = () => {
  const [checked, setChecked] = useState(false)

  const {startTrading, stopTrading} = useWebSocketContext()

  function handleChange(event) {
    if(!checked) startTrading()
    else stopTrading()

    setChecked(event.target.checked)
  }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}