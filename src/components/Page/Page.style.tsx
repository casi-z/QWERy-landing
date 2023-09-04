import {
    Box,
    styled,
    useTheme
} from "@mui/material"
function usePageStyles() {
    const theme = useTheme()
    return {
        Page: styled(Box)({
            width: '100%',
            minHeight: '100%',
        })
        
    }
}
export default usePageStyles