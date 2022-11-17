import { Stack, TextField } from "@mui/material"
import { useState } from "react";
import { DATA } from "../../types/types";
import PopupShow from '../PopupShow/popupShowFunc'
interface propbool {
    selectedValue : DATA,
    setSelectedValue : React.Dispatch<React.SetStateAction<DATA>>
}

const HomeTextFields = (props : propbool): JSX.Element => {
    const [count,setCount] = useState<number>(1);
    const {selectedValue,setSelectedValue} = props;
    const handleCount = (e:React.ChangeEvent<HTMLInputElement>)=> {
         setCount(parseInt(e.target.value));
      }
    const handleCost = () => {
        if(typeof selectedValue['toman']==='number'){return count*selectedValue['toman']}
        else{return 1}
    }
    
    return(
        <Stack width={'100%'}>
            <Stack sx={{
                width : '100%',
                maxWidth : '1000px',
                margin : '10px'
            }} spacing={2}>
            <PopupShow selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            <TextField onChange={handleCount} value={count} type={'number'} label='واحد' />
            <TextField value={handleCost()} type={'number'} label='تومان' />
        </Stack>
        </Stack>
    )
}
export default HomeTextFields;