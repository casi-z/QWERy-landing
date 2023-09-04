import {ReactChild, FC, ReactNode} from 'react'
import { Box, styled } from '@mui/material'
import {sitePadding} from "@/theme/GlobalStyle";
import useConstants from "@/theme/constants";
const { log } = console

interface WrapperProps {
   
   children: ReactChild | ReactNode,
   
}



const Wrapper: FC<WrapperProps> = ({ children }) => {

    const constants = useConstants()

    const S_Wrapper = styled(Box)({
        padding: constants.padding,
        overflow: 'visible',
    })

    return(
       <S_Wrapper className="Wrapper">
           {children}
       </S_Wrapper>
    )
}
export default Wrapper