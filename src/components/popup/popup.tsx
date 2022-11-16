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
import { Typography } from '@mui/material';

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
  };

  const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);

  return (
    <Dialog sx={{
      '& .MuiDialog-paper': {
        backgroundColor: 'primary.dark',
        width: '500px',
        height: '70vh'
      }
    }} onClose={handleClose} open={open}>
      <DialogTitle textAlign={'right'}>انتخاب ارز</DialogTitle>
      <List sx={{
        pt: 0,
        height: 'auto',
        overflowY: 'scroll'
      }}>
        {crypto_list.map((crypto) => (
          <ListItem key={crypto['id']} sx={{
            padding: '10px 20px',

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
              cursor : 'pointer'
            }} justifyContent={'flex-start'}>
              <Stack justifyContent={'space-between'} sx={{
                flexGrow : 1,
                alignItems: 'center'
              }}>
                <Stack spacing={1}>
                  <Typography>تومان</Typography>
                  <Typography>{crypto['toman']}</Typography>
                </Stack>
                <Typography>{crypto['name']}</Typography>
              </Stack>
              <Stack sx={{
                width : '10%'
              }}>
                <Avatar src={crypto['image']} />
              </Stack>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default Popup;