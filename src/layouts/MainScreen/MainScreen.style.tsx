import {
    Box,
    styled,
    useTheme

} from "@mui/material"
import Background from "@/img/background.png";
import {sitePadding} from "../../theme/GlobalStyle";

function useMainScreenStyles() {

    const theme = useTheme()

    return {

        MainScreen: styled(Box)({
            height: '100vh',
            width: '100%',
            backgroundColor: theme.palette.secondary.main,
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            padding: sitePadding,
            display: "flex",
            justifyContent: 'center',

            paddingBottom: '10%',
            overflow: 'hidden',
            marginBottom: '2%',



        }),
        MainScreen__Item: styled(Box)({
            marginTop: '7%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
            'img': {
                overflow: 'hidden',
                objectFit: 'cover',

                height: '100%',
                width: '100%',
            }

        }),
        MainScreen__header: styled(Box)({

            '& > h1': {
                color: theme.palette.text.primary,
                "fontFamily": "Open Sans",
                "fontSize": "96px",
                "fontWeight": "900",
                "lineHeight": "100px",
                "letterSpacing": "0em",
                "textAlign": "left",
                '& > span': {

                    "fontFamily": "Open Sans",
                    "fontSize": "88px",
                    "fontWeight": "400",
                    "lineHeight": "100px",
                    "letterSpacing": "0em",
                    "textAlign": "left"

                }
            }
        }),
        MainScreen__text: styled(Box)({


            "fontSize": "18px",
            "fontWeight": "400",
            "lineHeight": "30px",
            "letterSpacing": "-0.02em",
            "textAlign": "left",
        }),
    }
}

export default useMainScreenStyles