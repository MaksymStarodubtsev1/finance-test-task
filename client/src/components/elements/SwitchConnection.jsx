import {Switch} from "@mui/material";
import {useState} from "react";

export const SwitchConnection = ({start, stop}) => {
  const [checked, setChecked] = useState(false)

  function handleChange(event) {
    if(!checked) start()
    else stop()

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