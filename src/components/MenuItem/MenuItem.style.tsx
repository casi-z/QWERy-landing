import {
    Box,
    Button,
    styled,
    useTheme
} from "@mui/material"

function useMenuItemStyles() {

    const theme = useTheme()

    return {
        MenuItem: styled(Button)({
            textTransform: 'none',
            boxSizing: 'border-box',
            borderRadius: '0',
            whitespace: 'nowrap',
            paddingTop: '2%',
            paddingBottom: '2%',
            color: theme.palette.text.primary,
            "fontFamily": "Open Sans",
            "fontSize": "18px",
            "fontWeight": "600",
            "lineHeight": "25px",
            "letterSpacing": "0px",
            "textAlign": "left"


        })
    }
}
export default useMenuItemStyles