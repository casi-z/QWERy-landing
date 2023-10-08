import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'

import { useTheme } from "@mui/material";
import React from 'react';
import styled from "styled-components";
const { log } = console

interface PrimaryHeaderProps {

    children: ReactChild | React.ReactNode,
    className?: String

}



const PrimaryHeader: FC<PrimaryHeaderProps> = ({ children, className }) => {

    const theme = useTheme()

    const Styles = styled.h2`
      color: ${theme.palette.text.primary};
      font-family: "Open Sans";
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      ${theme.breakpoints.down('sm')}{
        font-size: 44px;
      }
    `


    return (
        <Box component={Styles} className={`PrimaryHeader ${className}`}>
            {children}
        </Box>
    )
}
export default PrimaryHeader