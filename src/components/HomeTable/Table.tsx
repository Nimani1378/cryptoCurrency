import { TableHead, Table, TableRow, TableCell, TableBody, TableContainer, Paper, IconButton, Stack, Avatar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DATA } from "../../types/types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { toggleFav } from "../../redux/data-slice";
import { numberWithCommas } from '../../globalFunctions/numberWithCommas'
import PriceArrow from "../PriceArrow/PriceArrow";


const TableComp = () => {
    const dispatch = useDispatch()
    const crypto_list = useSelector((state: { market_List: DATA[]; }) => state.market_List);
    const handleColor = (row: DATA) => {
        if (row.favorite === true) {
            return 'error';
        }
        else {
            return 'info';
        }
    }
    return (
        <TableContainer sx={{
            backgroundColor: 'transparent'
        }} component={Paper}>
            <Table arial-aria-label="simle table">
                <TableHead sx={{
                    backgroundColor: 'primary.dark'
                }}>
                    <TableRow>
                        <TableCell align="left">
                            <Typography>
                                ارز دیجیتال
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography>
                                قیمت به تومان
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography>
                                قیمت به دلار
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography>
                                تغییرات
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography>
                                نشان
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {crypto_list.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                borderBottom: '1px solid',
                                borderColor: '#848484',
                                padding: '5px',
                            }}
                        >
                            <TableCell align="left" component="th" scope="row">
                                <Stack justifyContent={'flex-start'} spacing={2} alignItems={'center'}>
                                    <Avatar src={row.image} />
                                    <Typography>{row.name}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell align="center">{numberWithCommas(row.toman ?? 0)}</TableCell>
                            <TableCell align="center">{row.current_price}</TableCell>
                            <TableCell align="center">
                                <Stack>
                                    <PriceArrow rr1={row.price_change_percentage_24h > 0 ? 'true' : 'false'} />
                                    <Typography color={row.price_change_percentage_24h > 0 ? 'success.main' : 'error'}>{row.price_change_percentage_24h}%</Typography>
                                </Stack>
                            </TableCell>
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