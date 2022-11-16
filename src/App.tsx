import { Button, Stack, Typography } from '@mui/material';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/system';
import HomeTextFields from './components/HomeTextFields/HomeTextFields';
import logo from './assets/images/logo.webp';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { DATA } from './types/types';
import HomeTabel from './components/HomeTable/HomeTable';

function App() {
  const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);
  const [selectedValue, setSelectedValue] = useState<DATA>(crypto_list[1]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack direction={'column'} height={'100vh'} justifyContent='center' alignItems={'center'}>
          <Stack alignItems={'center'}>
            <img src={logo} style={{ width: '272px' }} />
          </Stack>
          <HomeTextFields selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
          <Stack sx={{ mt: '20px',marginBottom:'100px' }} spacing={4}>
            <Button sx={{ backgroundColor: 'primary.light', '&:hover': { backgroundColor: 'primary.' } }} variant='contained'><Typography>فروش</Typography></Button>
            <Button variant='contained'><Typography>درخواست خرید</Typography></Button>
          </Stack>
        </Stack>
        <HomeTabel/>
      </div>
    </ThemeProvider>
  );
}
export default App;
