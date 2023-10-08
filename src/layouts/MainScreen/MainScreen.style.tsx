import {
    Box,

    useTheme

} from "@mui/material"
import Background from "@/img/background.png";
import {sitePadding} from "../../theme/GlobalStyle";
import styled from "styled-components";

function useMainScreenStyles() {

    const theme = useTheme()

    return styled.section`
      height: 1573px;
      width: 100%;
      background: url(${Background}) no-repeat center/cover;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-bottom: 10%;
      overflow: hidden;
      margin-bottom: 2%;

      ${theme.breakpoints.down('sm')} {
        padding: 0 5px;
        
        .SocialIcons {
          display: none;
        }
      }

      .MainScreen__Item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        width: 100%;
        height: 100vh;

        ${theme.breakpoints.down('sm')} {
          margin-top: 10vh;
        }

        img {
          overflow: hidden;
          object-fit: cover;
          height: 100%;
          width: 100%;

        }

        ${theme.breakpoints.up('sm')} {
          .Mainscreen__down-button {

            & svg {
              transition: transform 500ms;
            }

            &:hover svg {
              transform: translateY(15%);
            }
          }
        }
      }

      .MainScreen__header {

        color: ${theme.palette.text.primary};
        font-family: 'Open Sans';
        font-size: 96px;
        font-weight: 900;
        
        letter-spacing: 0em;
        text-align: left;

        ${theme.breakpoints.down('sm')} {
          font-size: 46px;
          line-height: 100%;
        }

        span {
          font-family: 'Open Sans';
          font-size: 88px;
          font-weight: 400;
          
          letter-spacing: 0em;
          text-align: left;

          ${theme.breakpoints.down('sm')} {
            font-size: 38px;
          }

        }

        .MainScreen__text {
          font-size: 18px;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: -0.02em;
          text-align: left;
        }

      }
    `

}

export default useMainScreenStyles