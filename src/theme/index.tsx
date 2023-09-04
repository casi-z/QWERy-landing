import React, { FC, useEffect, useState } from 'react';
import { CssBaseline } from "@mui/material"
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { useMemo } from "react"
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    
    //Задаю отступы слева и справа для всего сайта

    const [sitePadding, setSitePadding] = useState(`15vw`)

    //Создаю тему

	const theme = useMemo(
		() => createTheme({
            palette: {
                text: {
                    primary: '#fff',
                    secondary: '#FBD784',
                    disabled: '#043873'
                },
                secondary: {
                    light: '#FFF',
                    main: '#043873',
                    dark: '#043873',
                    
                }
            },
            
		}), [sitePadding]
    )
    
    //Изменяю отступы при ресайзе окна

    function changeSitePadding() {
        if (theme.breakpoints.down('sm')) setSitePadding('0vw')
            
        else setSitePadding('15vw')
    }


    window.onresize = e => changeSitePadding()

    useEffect(changeSitePadding, [])

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyle />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
    );
};

export default ThemeProvider;