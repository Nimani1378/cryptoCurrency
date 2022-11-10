import { Avatar, InputAdornment, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { DATA } from "../../types/types";
import Popup from "./popup";
interface propbool {
  selectedValue : DATA,
  setSelectedValue : React.Dispatch<React.SetStateAction<DATA>>
}
export default function PopupShow(props: propbool) {
  const {selectedValue,setSelectedValue} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: DATA) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const handleValue= ():String =>{
    return selectedValue['name']+' '+`(${selectedValue['symbol'].toUpperCase()})`;
  }
  return (
    <div>
      <TextField style={{ textAlign: 'center' }} type={'button'} color='secondary' InputProps={{
        readOnly: true,
      }} value={handleValue()} onClick={handleClickOpen} label='انتخاب ارز' ></TextField>
      <Popup
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}