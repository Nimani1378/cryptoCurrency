import { TextField } from "@mui/material";
import React from "react";
import { DATA } from "../../types/types";
import Popup from '../popup-body/popup'
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
    return `${selectedValue['name']} (${selectedValue['symbol'].toUpperCase()})`;
  }
  return (
    <>
      <TextField style={{ textAlign: 'center' }} type={'button'} color='secondary' 
      InputProps={{
        readOnly: true,
      }}
      value={handleValue()} onClick={handleClickOpen} label='انتخاب ارز' ></TextField>
      <Popup
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}