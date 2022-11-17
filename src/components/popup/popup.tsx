import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux';
import { DATA } from '../../types/types';
import { Stack } from '@mui/system';
import { Divider, InputAdornment, TextField, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { AccountCircle } from '@mui/icons-material';

export interface PopupProps {
  open: boolean;
  selectedValue: DATA;
  onClose: (value: DATA) => void;
}
function Popup(props: PopupProps) {
  const { onClose, selectedValue, open } = props;
  const [searchBox, setSearchBox] = useState('');
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchBox(e.target.value);
  }
  const handleListItemClick = (value: DATA) => {
    onClose(value);
  };

  const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);



  return (
    <Dialog sx={{
      '& .MuiDialog-paper': {
        backgroundColor: 'primary.dark',
        width: '500px',
        height: '80vh'
      }
    }} onClose={handleClose} open={open}>
      <DialogTitle textAlign={'right'}>انتخاب ارز</DialogTitle>
      <TextField
        id="input-with-icon-textfield"
        value={searchBox}
        onChange={handleSearch}
        placeholder='جستجو'
        sx={{
          margin: '10px 40px'
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <List sx={{
        padding : '20px',
        height: 'auto',
        overflowY: 'scroll'
      }}>
        {crypto_list.filter(filter_crypto => filter_crypto.name.toUpperCase().includes(searchBox.toUpperCase())).map((crypto) => (
          <>
            <ListItem key={crypto['id']} sx={{
              padding: '10px 0',
            }}>
              {/* <ListItemText sx={{
              textAlign : 'right'
            }} primary={crypto['name']} />
            <ListItemAvatar>
              <Avatar src={crypto['image']} />
            </ListItemAvatar> */}
              <Stack onClick={() => handleListItemClick(crypto)} spacing={2} sx={{
                width: '100%',
                padding: '10px',
                cursor: 'pointer',
                borderRadius : '8px',
                '&:hover' : {
                  backgroundColor : 'primary.light'
                }
              }} justifyContent={'flex-start'}>
                <Stack justifyContent={'space-between'} sx={{
                  flexGrow: 1,
                  alignItems: 'center'
                }}>
                  <Stack spacing={1}>
                    <Typography>تومان</Typography>
                    <Typography>{crypto['toman']}</Typography>
                  </Stack>
                  <Typography>{crypto['name']}</Typography>
                </Stack>
                <Stack sx={{
                  width: '10%'
                }}>
                  <Avatar src={crypto['image']} />
                </Stack>
              </Stack>
            </ListItem>
            <Divider sx={{
              backgroundColor : 'primary.light',
              height : '1px'
            }} component="li" />
          </>
        ))}
      </List>
    </Dialog>
  );
}

export default Popup;