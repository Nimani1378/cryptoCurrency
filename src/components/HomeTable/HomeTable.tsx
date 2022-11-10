import { Stack, Box, Avatar, Typography, TableRow, Paper, Table, TableCell, TableContainer, TableHead } from "@mui/material";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableComp from "./Table";

const HomeTabel = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                display: 'block',
                maxWidth: '1152px',
                width: '100%',
                justifyContent: 'center',
                padding: '50px',
                backgroundColor: 'rgb(255 255 255 / 6%)',
                borderRadius: '8px'
            }}>
                <Stack marginBottom={'20px'} justifyContent={'flex-end'}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center'
                    }}
                    >
                        <Stack display={'block'}>
                            <Typography textAlign={'right'} color={'white'} variant="h6">قیمت لحظه ای</Typography>
                            <Typography textAlign={'right'} color={'white'} variant="subtitle1">در 24 ساعت گذشته</Typography>
                        </Stack>
                        <Avatar>
                            <InsertChartIcon color={'success'} />
                        </Avatar>
                    </Box>
                    <Stack>

                    </Stack>
                </Stack>
                <Stack>
                    <TableComp />
                </Stack>
            </Box>
        </Box>
    )
}
export default HomeTabel;