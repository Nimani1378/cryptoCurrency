import './App.css';
import { Button, Stack, Typography } from '@mui/material';
import theme from './theme/Mui-theme';
import { ThemeProvider } from '@mui/system';
import HomeTextFields from './components/HomeTextFields/HomeTextFields';
import api from './api/api_axios';
import logo from './assets/images/logo.webp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { DATA } from './types/types';
import { set_main_data } from './redux/data-slice';
import { FirstValue } from './types/types';

function App() {
  let firstValue : DATA =  FirstValue;
  const [selectedValue, setSelectedValue] = useState<DATA>(firstValue);
  useEffect(() => {
    api
      .get("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
      .then((res) => {
        dispatch(set_main_data(res.data));
        //setSelectedValue(crypto_list[0]);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, []);
  
  const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);
  if(typeof crypto_list[0]==='DATA'){}
  console.log('crypto_list[0] : ',crypto_list[0]);
  const dispatch = useDispatch();
  function showList(){
    //console.log(crypto_list);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack direction={'column'} height={'100vh'} justifyContent='center' spacing={2}>
          <Stack alignItems={'center'}>
            <img src={logo} style={{ width: '272px' }} />
          </Stack>
          <HomeTextFields selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
          <Stack sx={{ mt: '20px' }} spacing={4}>
            <Button sx={{ backgroundColor: 'primary.light', '&:hover': { backgroundColor: 'primary.' } }} variant='contained'><Typography>فروش</Typography></Button>
            <Button onClick={showList} variant='contained'><Typography>درخواست خرید</Typography></Button>
          </Stack>
          <Stack>
            {crypto_list.map((crypto)=>(
              <Typography>{crypto.name}</Typography>
            ))}
          </Stack>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
export default App;
