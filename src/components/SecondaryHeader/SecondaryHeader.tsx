
import {ReactChild, FC, ReactNode} from 'react'
import {Box, styled, useTheme} from '@mui/material'

const { log } = console

interface SecondaryHeaderProps {
   
   children?: ReactChild | ReactNode,
   
}

const SecondaryHeader: FC<SecondaryHeaderProps> = ({ children }) => {
    const theme = useTheme()

    const S_SecondaryHeader = styled(Box)({
        display: 'flex',
        "fontFamily": "Open Sans",
        "fontSize": "18px",
        "fontWeight": "700",
        "lineHeight": "25px",
        "letterSpacing": "6px",
        "textAlign": "left",
        color: theme.palette.text.secondary,
        textTransform: 'uppercase',
        '& > div': {
            width: '3.5vw',
            transform: 'translateY(0.5em)',
            height: '100%',
            borderTop: `1px solid ${theme.palette.text.secondary}`,
            marginRight: '2%',
        }
    })


    return(
       <S_SecondaryHeader component={'h2'} className="SecondaryHeader">
           <div className={'HeaderLine'}/>
           {children}
       </S_SecondaryHeader>
    )
}
export default SecondaryHeader