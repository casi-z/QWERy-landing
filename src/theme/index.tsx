import React, { FC, useEffect, useState } from 'react';
import { CssBaseline } from "@mui/material"
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { useMemo } from "react"
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    


    //Создаю тему

	const theme = useMemo(
		() => createTheme({
            palette: {
                primary: {
                    main: '#fff',
                    dark: '#FFA343'
                },
                text: {
                    primary: '#fff',
                    secondary: '#FBD784',
                    disabled: '#043873'
                },
                secondary: {
                    light: '#FFF',
                    main: '#000',
                    dark: '#043873',
                    
                }
            },
            
		}), []
    )
    
    //Изменяю отступы при ресайзе окна


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