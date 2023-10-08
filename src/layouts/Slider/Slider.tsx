import useSliderStyles from './Slider.style'
import {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'
import {Swiper, SwiperSlide} from 'swiper/react';
import image from '@/img/mountains-2.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation, EffectCoverflow} from 'swiper/modules';
import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Text from "@/components/Text/Text";

const {log} = console

interface SliderProps {

    children?: ReactChild,

}

const Slider: FC<SliderProps> = ({children}) => {

    const Styles = useSliderStyles()
    const theme = useTheme()


    return (
        <Box component={Styles} className="Slider">
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}

                className="mySwiper"


            >

                {Array.from({length: 5}).map(() => (

                    <SwiperSlide>
                        <img src={image} alt=""/>
                        <Box className={'swiper__effect'}></Box>
                        <Box className='Slider__item'>

                            <SecondaryHeader outlined={'all'}>
                                Bromo
                            </SecondaryHeader>

                            <PrimaryHeader>
                                Steady your steps, we <br/> will climb together!
                            </PrimaryHeader>

                            <Text>
                                Enjoying the vast expanse of the sea of ​​​​sand, witnessing the splendor of Mount Semeru that
                                soars into the sky, and gazing at the beauty of the sun moving out of its bed or otherwise
                                enjoying the dim twilight from the Bromo ridge is an unforgettable experience when visiting
                                Bromo.
                            </Text>

                            <SecondaryButton

                                icon={<ArrowForwardIcon/>}
                                color={theme.palette.text.secondary}

                            >
                                read more
                            </SecondaryButton>

                        </Box>

                    </SwiperSlide>

                ))}

            </Swiper>
        </Box>
    )
}
export default Slider