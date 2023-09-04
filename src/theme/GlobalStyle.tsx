import { GlobalStyles as MUIGlobalStyles, useTheme } from '@mui/material'
import Background from '../img/background.png'

export const sitePadding = '0 7vw'

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
                minWidth: '100%',
                minHeight: '100%',

            },

            '#wrapper': {
                width: '100%',
                minHeight: '100vh',
                padding: sitePadding,
                '@media(min-width: 768px)': {
                    padding: 0
                },
            },

        }} />

    )
}

export default GlobalStyle