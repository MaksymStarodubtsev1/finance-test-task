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
const FlexContainer = styled(Box)({
  display: "flex",
})

export const CoinContainer = styled(FlexContainer)({
  flexDirection: "column",
  alignItems: "center",
  gap: '16px',
  width: '100%',
})

export const CoinBox = styled(FlexContainer)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  border: '1px solid black',
  padding: '4px 8px',
  minWidth: '200px',
  borderRadius: '10px'
})

export const CoinLabel = styled(FlexContainer)({
  flexDirection: 'column',
  gap: '4px'
})

export const CoinStatus = styled(Box)({
  textAlign: 'center'
})