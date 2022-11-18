import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Arrow = { 
    rr1 : string
}

const PriceArrow = ( props: Arrow ): JSX.Element => {
    const {rr1} = props;
    if (rr1 == 'true') {
        return (
            <ArrowDropUpIcon color='success'/>
        )
    }
    else {
        return (
            <ArrowDropDownIcon color='error'/>
        )
    }
}
export default PriceArrow;