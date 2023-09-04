import {
    Box,
    Button,
    styled,
    useTheme
} from "@mui/material"
import { sitePadding } from "../../theme/GlobalStyle"
import useConstants from "@/theme/constants";


function useFooterStyles() {
    const constants = useConstants()
    const theme = useTheme()

    return {
        Footer: styled(Box)({
            marginTop: '5vh',
            width: '100%',
            background: theme.palette.secondary.light,
            padding: sitePadding,
            paddingTop: '2%',
            paddingBottom: ' 1.5%',
            display: 'flex',
            justifyContent: 'space-between',
            color: theme.palette.primary.main,

        }),

        Footer__Info: styled(Box)({
            listStyle: 'none',
            padding: 0,
        }),

        Footer__Buttons: styled(Box)({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }),

        Footer__ButtonsWrapper: styled(Box)({
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
        }),

        Footer__Button: styled(Button)({
            "padding": "1vh",
            "marginTop": "10%",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "background": "theme.palette.secondary.main",
            "borderRadius": "0",
            "transitionDuration": "800ms",
            svg: {
                "fill": "black",
                "transitionDuration": "800ms"
            },
            "&hover": {
                "background": "${theme.palette.primary.light"
            },
            "&hover > svg": {
                "filter": "invert(100%)"
            }
        }),

        Footer__Link: styled(Box)({
            "color": "inherit",
            "font": "inherit",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "flexDirection": "column",
            '.Footer__GithubLink': {
                "color": "inherit",
                "font": "inherit",
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",

            },
            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: 0,
                ".Footer__GithubLink": {
                    "paddingTop": "3vh",
                    "paddingBottom": "3vh"
                }
            }
        }),
        

    }
}
export default useFooterStyles