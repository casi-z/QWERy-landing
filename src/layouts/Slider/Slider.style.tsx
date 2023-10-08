import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useSliderStyles() {

    const theme = useTheme()


    return styled.section`
      width: 100%;
      min-height: 20vh;
      color: black;

      .swiper {
        width: 100%;
        height: 962px;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
      }
      
      
      
      .swiper-slide img {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: lightgray 50%;
      }

      .Slider__item {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 50%;
        padding: 3% 25%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        ${theme.breakpoints.down('sm')}{
          
          padding: 3% 0%;
        }
        
        .PrimaryHeader{
          ${theme.breakpoints.down('sm')}{
            font-size: 20px;
          }
        }
        .SecondaryHeader{
          display: flex;
          justify-content: center;
        }
      }
    `

}

export default useSliderStyles