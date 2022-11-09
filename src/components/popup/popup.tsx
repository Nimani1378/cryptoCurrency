import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { DATA } from '../../types/types';



export interface PopupProps {
  open: boolean;
  selectedValue: DATA;
  onClose: (value: DATA) => void;
}

function Popup(props: PopupProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: DATA) => {
    onClose(value);
    // console.log(value);
    // console.log(crypto_list);
  };
  
  const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);
  
  return (
    <Dialog sx={{'& .MuiDialog-paper' : {backgroundColor : 'secondary.main'}}} onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {crypto_list.map((crypto) => (
          <ListItem button onClick={() => handleListItemClick(crypto)} key={crypto['id']}>
            <ListItemText primary={crypto['name']} />
            <ListItemAvatar>
              <Avatar src={crypto['image']} />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default Popup;