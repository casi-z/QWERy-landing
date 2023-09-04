import { ReactChild, FC } from 'react'
import {Box, Button, styled} from '@mui/material'

const { log } = console

interface SecondaryButtonProps {
   
    children: ReactChild,
    icon?: ReactChild,
    color?: 'string'
   
}

const S_SecondaryButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    color: theme.palette.text.primary,
    "fontFamily": "Open Sans",
    "fontSize": "18px",
    "fontWeight": "600",
    "lineHeight": "25px",
    "letterSpacing": "0px",
    "textAlign": "left",

}))

const SecondaryButton: FC<SecondaryButtonProps> = ({ children, icon, color }) => {

    return(
       <S_SecondaryButton
           className="SecondaryButton"
           endIcon={icon || null}
           variant={'text'}

       >
           {children}
       </S_SecondaryButton>
    )
}
export default SecondaryButton