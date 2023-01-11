import {Switch} from "@mui/material";
import {useState} from "react";
import {useTrading} from "../hooks/trading/useTrading";

export const SwitchConnection = () => {
  const [checked, setChecked] = useState(false)

  const {stopTrading, startTrading} = useTrading()

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