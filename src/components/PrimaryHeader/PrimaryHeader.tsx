import { ReactChild, FC } from 'react'
import { Box, styled } from '@mui/material'
import {useTheme} from "@mui/material";

const { log } = console

interface PrimaryHeaderProps {
   
   children: ReactChild,
   
}



const PrimaryHeader: FC<PrimaryHeaderProps> = ({ children }) => {
    const theme = useTheme()

    const S_PrimaryHeader = styled(Box)({

        color: theme.palette.text.primary,
        "fontFamily": "Open Sans",
        "fontSize": "96px",
        "fontWeight": "700",
        "lineHeight": "100px",
        "letterSpacing": "0em",
        "textAlign": "left"
    })

    return(
       <S_PrimaryHeader className="PrimaryHeader">
           {children}
       </S_PrimaryHeader>
    )
}
export default PrimaryHeader