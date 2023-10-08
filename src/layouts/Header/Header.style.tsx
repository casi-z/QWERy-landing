import {

    Box,

    useTheme

} from "@mui/material"
import styled from "styled-components";
import { sitePadding } from '../../theme/GlobalStyle'


function useHeaderStyles() {

    const theme = useTheme()

    return styled.header`
      backdrop-filter: blur(10px);
      
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      padding: 0 4vw;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      color: ${theme.palette.text.primary};
      text-transform: capitalize;
      
      ${theme.breakpoints.down('sm')}{
        padding: 0;
        flex-wrap: nowrap;
        .Header__title{
          width: 100%;
          display: flex;
          justify-content: center;
          text-transform: none;
        }
      }
      .Header__search{
        opacity: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        flex-wrap: nowrap;
        #search-label{
          color: ${theme.palette.text.primary}
        }
        &::after{
          display: none;
          content: '';
        }
      }
      
      
      
    `

}
export default useHeaderStyles