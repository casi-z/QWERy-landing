import {
    Box,
    styled,
    useTheme

} from "@mui/material"
import Border from '../../svg/Border.svg'
function useWhiteSectionStyles() {

    const theme = useTheme()
    
    return {

        WhiteSection: styled(Box)({
            width: '100%',
            padding: '10% 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }),

        WhiteSectionItem: styled(Box)({
            width: '50%',

            'img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            },


        }),

        SectionHeader: styled(Box)({
            color: theme.palette.text.disabled,
            "fontFamily": "Inter",
            "fontSize": "72px",
            "fontWeight": "700",
            "lineHeight": "87px",
            "letterSpacing": "-0.02em",
            "textAlign": "left",
            position: 'relative',
            overflow: 'visible',
            zIndex: 2,

            '&::before': {
                content: "''",
                minWidth: '100%',
                height: '100%',
                overflow: 'visible',
                background: `url(${Border}) no-repeat bottom`,
                position: 'absolute',
                top: '3%',
                left: 0,
                zIndex: -1,
            }
        }),

        SectionText: styled(Box)({
            color: theme.palette.text.disabled,
            "fontFamily": "Inter",
            "fontSize": "35px",
            "fontWeight": "400",
            "lineHeight": "40px",
            "letterSpacing": "-0.02em",
            "textAlign": "left"
        }),

    }
}
export default useWhiteSectionStyles