import {useMediaQuery, useTheme} from "@mui/material";
import {useEffect, useState} from "react";

function useConstants(){

    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('xs')); //0px
    const tablet = useMediaQuery(theme.breakpoints.down('md')); //0px
    const laptop = useMediaQuery(theme.breakpoints.down('lg')); //0px

    const [constants, setConstants] = useState(
        {
            padding: '0 16vw',
        }
    )
    function changeConstants() {
        if(mobile){
            setConstants({...constants, padding: '0 0'})
        } else if (tablet){
            setConstants({...constants, padding: '0 8vw'})
        } else if (laptop){
            setConstants({...constants, padding: '0 10vw'})
        }
    }
    useEffect(() => {
        changeConstants()
    },[])

    window.addEventListener('resize', () => changeConstants())

    return constants
}
export default useConstants