import styled from "styled-components";
import {Box, TextField} from "@mui/material";

export const StyledBox = styled(Box)({
  maxWidth: "210px",
  display: "flex",
  flexDirection: "row",
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    color: "#00a3ffb0",
  },
})

export const StyledTextField = styled(TextField)({
  '& label': {
    color: '#00a3ffb0',
  }
});