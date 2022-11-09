import { Box, Grid, Stack, TextField } from '@mui/material';
import logo from './assets/images/logo.webp'
const MainGrid = () => {
    return(<Grid container height={'100vh'} direction='row' justifyContent={'center'}>
    <Grid item xs={12} textAlign='center'><img src={logo} style={{width:'272px'}}/></Grid>
    <Grid item xs={12}>
      <Stack direction={'row'} justifyContent={'center'}>
        <TextField color='secondary' InputProps={{
        readOnly: true,
      }} value={2} onClick={()=>console.log('hello')} label='انتخاب ارز' ></TextField>
      <TextField label='واحد' />
      <TextField label='تومان' />
      </Stack>
    </Grid>
    <Grid item>hello 2</Grid>
  </Grid>)
}
export default MainGrid;