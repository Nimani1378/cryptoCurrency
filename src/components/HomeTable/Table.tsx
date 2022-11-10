import { TableHead, Table, TableRow, TableCell, TableBody, TableContainer, Paper, IconButton,Stack, Avatar, Typography, ToggleButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DATA } from "../../types/types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { toggleFav } from "../../redux/data-slice";


const TableComp = () => {
    const dispatch = useDispatch()
    const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);
    const handleColor = (row:DATA) => {
        if(row.favorite===true){
            return 'error';
        }
        else{
            return 'success';
        }
    }
    return (
        <TableContainer sx={{
            backgroundColor : 'transparent'
        }} component={Paper}>
            <Table  arial-aria-label="simle table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ارز دیجیتال</TableCell>
                        <TableCell align="center">قیمت به تومان</TableCell>
                        <TableCell align="center">قیمت به دلار</TableCell>
                        <TableCell align="center">تغییرات</TableCell>
                        <TableCell align="center">نشان</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {crypto_list.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },
                            border:'1px solid #81614e00',
                            borderRight:0,
                            padding:'5px',

                        }}
                        >
                            <TableCell align="left" component="th" scope="row">
                                <Stack justifyContent={'flex-start'} spacing={2} alignItems={'center'}>
                                    <Avatar src={row.image}/>
                                    <Typography>{row.name}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell align="center">{row.toman}</TableCell>
                            <TableCell align="center">{row.current_price}</TableCell>
                            <TableCell align="center">{row.price_change_percentage_24h}</TableCell>
                            <TableCell align="center">
                                <IconButton onClick={() => dispatch(toggleFav(row.id))} color={handleColor(row)} aria-label="delete">
                                    <StarBorderIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComp;