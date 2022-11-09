import { Typography, Button, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { DATA } from "../../types/types";
import Popup from "./popup";
interface propbool {
  selectedValue : DATA,
  setSelectedValue : React.Dispatch<React.SetStateAction<DATA>>
}
export default function PopupShow(props: propbool) {
  const {selectedValue,setSelectedValue} = props;
  const [open, setOpen] = React.useState(false);
  const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: DATA) => {
    setOpen(false);
    setSelectedValue(value);
  };
  function checkLoad(param:undefined | string):string{
    if(typeof param === 'string'){return param}
    else{return 'Not Resive'}
  }

  return (
    <div>
      <TextField style={{ textAlign: 'center' }} type={'button'} color='secondary' InputProps={{
        readOnly: true,
      }} value={checkLoad(selectedValue['name'])} onClick={handleClickOpen} label='انتخاب ارز' ></TextField>
      <Popup
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}