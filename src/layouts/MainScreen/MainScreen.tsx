import useMainScreenStyles from './MainScreen.style'
import {ReactChild, FC, useEffect} from 'react'
import {Box, IconButton, useTheme} from '@mui/material'

import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import SocialIcons from "@/components/SocialIcons/SocialIcons";
const {log} = console

interface MainScreenProps {

    children?: ReactChild,

}

const MainScreen: FC<MainScreenProps> = ({children}) => {

    const Styles = useMainScreenStyles()

    const theme = useTheme()

    //const socialIcons = importAllImages('@/svg/Socials')

    return (
        <Box component={Styles}>

            <Box className={'MainScreen__Item'}>
                <SocialIcons/>

                <Box className={'MainScreen__header'} component={'section'}>

                    <SecondaryHeader outlined={'left'}>
                        explore the Nature Beauty
                    </SecondaryHeader>

                    <h1>

                        Discover <br/>
                        <span>Wonderful Indonesia</span>

                    </h1>

                </Box>

                <br/>


                <br/>

                <SecondaryButton
                    className={'Mainscreen__down-button'}
                    color={theme.palette.text.primary}
                    icon={<ArrowDownwardIcon/>}
                    href={'#down'}
                >

                    Scroll down

                </SecondaryButton>

            </Box>


        </Box>
    )
}
export default MainScreen