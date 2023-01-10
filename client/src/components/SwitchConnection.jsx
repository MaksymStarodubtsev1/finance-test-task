import {Switch} from "@mui/material";
import {useState} from "react";
import {useTradingConnections} from "../hooks/trading/useTradingConnections";

export const SwitchConnection = () => {
  const [checked, setChecked] = useState(false)

  const {stopTrading, startTrading} = useTradingConnections()

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