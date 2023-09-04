import {
    Box,
    styled,
    useTheme
} from "@mui/material"

function useMenuStyles() {

    const theme = useTheme()
        
    return {
        Menu: styled(Box)({
            display: 'flex',
            
        })
    }
}
export default useMenuStyles