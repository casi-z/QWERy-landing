
import {ReactChild, FC} from 'react'
import {Button, useTheme} from "@mui/material";
import styled from "styled-components";

const {log} = console

interface MenuItemProps {

    children: String,
    startIcon?: ReactChild,
    href?: string,
    sx?: {},
    onClick?: () => void,
    onKeyDown?: () => void,
    key?: number,
    className?: string

}

const MenuItem: FC<MenuItemProps> = ({children, startIcon, sx, href, className}) => {

    const theme = useTheme()

    const Styles = styled.button`
      
      text-transform: none;
      border-radius: 0;
      white-space: nowrap;
      padding: 3.5vh 0.5vw;
      color: ${theme.palette.text.primary};
      font-family: 'Open Sans';
	  font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      
      &.SignInButton{
        padding: 2% 0%;
        
      }
    `

    return (
        <Button
            component={Styles}
            startIcon={startIcon}
            sx={sx}
            href={href}
            variant='text'
            className={`MenuItem ${className}`}
        >
            {children}
        </Button>
    )
}
export default MenuItem