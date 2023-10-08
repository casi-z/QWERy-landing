import {ReactChild, FC, ReactNode} from 'react'
import {Box, Grid, useTheme} from '@mui/material'

import {sitePadding} from "@/theme/GlobalStyle";
import styled from "styled-components";

const {log} = console

interface WrapperProps {

    children: ReactChild | ReactNode,

}


const Wrapper: FC<WrapperProps> = ({children}) => {

    const theme = useTheme()

    const Styles = styled.main`
      padding: ${sitePadding};
      overflow: visible;
      background: ${theme.palette.secondary.main};
      ${theme.breakpoints.down('sm')}{
        padding: 0 5px;
      }
    `


    // const S_Wrapper = styled(Box) (({theme}) =>({
    //     padding: sitePadding,
    //     overflow: 'visible',
    //     background: theme.palette.secondary.main,
    // }))

    return (
        <Box component={Styles} className="Wrapper">
            {children}
        </Box>
    )
}
export default Wrapper