import { Stack, TextField } from "@mui/material"
import { DATA } from "../../types/types";
import PopupShow from "../popup/popupShowFunc"
interface propbool {
    selectedValue : DATA,
    setSelectedValue : React.Dispatch<React.SetStateAction<DATA>>
}

const HomeTextFields = (props : propbool): JSX.Element => {
    const {selectedValue,setSelectedValue} = props;
    //console.log(selectedValue);
    
    return(
        <Stack spacing={2}>
            <PopupShow selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            <TextField type={'tel'} label='واحد' defaultValue={1} />
            <TextField type={'number'} label='دلار' defaultValue={1318391} />
        </Stack>
    )
}
export default HomeTextFields;