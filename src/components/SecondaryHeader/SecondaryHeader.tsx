import {ReactChild, FC, ReactNode} from 'react'
import {Box, useTheme} from '@mui/material'
import styled from "styled-components";

const {log} = console

interface SecondaryHeaderProps {

    children?: ReactChild | ReactNode,
    outlined?: 'right' | 'left' | 'all',
    className?: String

}

const SecondaryHeader: FC<SecondaryHeaderProps> = ({children, outlined, className}) => {

    const theme = useTheme()

    const Styles = styled.h3`
      display: flex;
      color: ${theme.palette.text.secondary};
      font-family: Open Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 6px;
      text-transform: uppercase;

      ${theme.breakpoints.down('sm')} {
        font-size: 12px;
      }

      .HeaderLine {
        width: 4rem;
        transform: translateY(0.5em);
        height: 100%;
        border-top: 1px solid ${theme.palette.text.secondary};
        margin-right: 2%;
      }

    `


    return (
        <Box component={Styles} className={`SecondaryHeader ${className}`}>
            {(outlined === 'left' || outlined === 'all') && <Box sx={{marginRight: '2%'}} className={'HeaderLine'}/>}

            {children}

            {(outlined === 'right' || outlined === 'all') && <Box sx={{marginLeft: '2%'}} className={'HeaderLine'}/>}
        </Box>
    )
}
export default SecondaryHeader