import useMainScreenStyles from './MainScreen.style'
import {ReactChild, FC, useEffect} from 'react'
import {Box} from '@mui/material'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Photo from "../../img/pushkin.jpg";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import useConstants from "@/theme/constants";

const {log} = console

interface MainScreenProps {

    children?: ReactChild,

}

const MainScreen: FC<MainScreenProps> = ({children}) => {

    const S = useMainScreenStyles()
    const a = useConstants()
    useEffect(() => log(a), [])


    return (
        <S.MainScreen component={'section'}>

            <S.MainScreen__Item>

                <S.MainScreen__header component={'section'}>
                    <SecondaryHeader>
                        explore the Nature Beauty
                    </SecondaryHeader>
                    <h1>
                        Discover <br/>
                        <span>Wonderful Indonesia</span>
                    </h1>
                </S.MainScreen__header>

                <br/>


                <br/>

                <SecondaryButton icon={<ArrowDownwardIcon/>}>Scroll down</SecondaryButton>

            </S.MainScreen__Item>


        </S.MainScreen>
    )
}
export default MainScreen