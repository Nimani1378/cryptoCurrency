import { Stack } from "@mui/system";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { JsxElement } from "typescript";
import api from "../api/api_axios";
import App from "../App";
import { set_main_data } from "../redux/data-slice";

const Loading = ():JSX.Element => {
    const [flag,SetFlag] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
          await api.get("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false").then((res) => {dispatch(set_main_data(res.data))});
          SetFlag(true);
        }
        fetchData()
        
          .catch((e) => {
            alert(e.message);
          });
      }, []);
    if(flag){
        return(<App></App>)
    }
    else{return(
        <Stack>LOADING...</Stack>
    )}
}
export default Loading;