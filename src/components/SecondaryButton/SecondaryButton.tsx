import {ReactChild, FC} from 'react'
import {Box, Button, useTheme} from '@mui/material'
import styled from "styled-components";

const {log} = console

interface SecondaryButtonProps {

    children: ReactChild,
    icon?: ReactChild,
    color?: String,
    className?: string,
    href?: string,

}


const SecondaryButton: FC<SecondaryButtonProps> = ({className, children, icon, color, href}) => {

    const theme = useTheme()

    const Styles = styled.a`
      text-transform: none;
      color: ${String(color) || theme.palette.text.primary};
      font-family: 'Open Sans';
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      letter-spacing: 0;
      text-align: left;
      min-width: 10px;
      white-space: nowrap;
    `
    return (
        <Button
            component={Styles}
            className={`SecondaryButton ${className}`}
            endIcon={icon || null}
            variant={'text'}
            href={href}

        >
            {children}
        </Button>
    )
}
export default SecondaryButton