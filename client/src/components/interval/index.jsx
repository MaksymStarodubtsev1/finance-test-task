import {StyledBox, StyledTextField} from "../styledComponents";
import {Button} from "@mui/material";
import {useWebSocketContext} from "../../context/WebSocketProvider";
import {useRef} from "react";

export const Interval = () => {
  const {changeUpdateInterval} = useWebSocketContext()
  const intervalRef = useRef()

  function handleChange() {
    changeUpdateInterval(intervalRef.current.value)
  }

  return (
    <StyledBox>
        <StyledTextField
          label="Update interval"
          type="number"
          color="info"
          variant="filled"
          inputRef={intervalRef}
        />
      <Button
        variant="contained"
        color="info"
        size="small"
        onClick={handleChange}
      >
        Change
      </Button>
    </StyledBox>
  )
}