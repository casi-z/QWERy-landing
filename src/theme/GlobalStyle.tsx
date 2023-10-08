import { GlobalStyles as MUIGlobalStyles, useTheme } from '@mui/material'
import Background from '../img/background.png'

export const sitePadding = '0 12vw'

const GlobalStyle = () => {

    const theme = useTheme()
    

    return (

        <MUIGlobalStyles styles={{
            '*': {
                boxSizing: 'border-box',

            },


            'html, body, #root': {
                scrollBehavior: 'smooth',
                fontFamily: `'Open Sans'`,
                width: '100%',
                height: '100%',
                background: theme.palette.secondary.main
            },

        }} />

    )
}

export default GlobalStyle