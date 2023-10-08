import {
    Box,
    Button,
    useTheme
} from "@mui/material"
import styled from "styled-components";

import { sitePadding } from "../../theme/GlobalStyle"


function useFooterStyles() {

    const theme = useTheme()

    return styled.footer`
      
      padding: ${sitePadding};
      
      ${theme.breakpoints.down('sm')}{
        padding: 0 5px;
        padding-top: 20vh;
      }
      
      padding-top: 20vh;
      width: 100%;
      overflow: hidden;
        
        .footer__header{
          
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          ${theme.breakpoints.down('sm')}{
            flex-direction: column;
            
          }
          
          
          svg{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          
          .footer__buttons{
            display: flex;
            //width: 100%;
          }
          
          button{
            white-space: nowrap;
            
          }
          
          .SecondaryButton{
            margin-right: 4vw;
            
          }
          
          .PrimaryButton{
            padding: 2vh 3vw;
            
          }
          
        }

      .footer__divider{
        opacity: 0.3;
        margin: 4vh 0;
      }
      
      .footer__body{
        
        display: flex;
        justify-content: space-between;

        ${theme.breakpoints.down('sm')}{
          flex-direction: column;
          align-items: center;
          
        }
        
        ul{
          list-style: none;
          padding: 0;
          ${theme.breakpoints.down('sm')}{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

          }
          
        }
        li{
          padding-top: 1vh;
        }
        
        .SecondaryHeader{
          font-size: 20px;
          font-weight: 700;
          text-transform: capitalize;
          letter-spacing: -0.232px;
          
        }
        
      }
      .footer__bottom{
        
        display: flex;
        justify-content: space-between;

        ${theme.breakpoints.down('sm')}{
          flex-direction: column;
          margin-top: 3vh;
          align-items: center;
          gap: 1vh;

        }
        
        
        
        .footer__link{
          padding: 0 1vw;
        }
        .footer__social-icons {

          display: flex;
          
          .social-icon {
            padding-left: 1vw;
            svg{
              color: yellow;
            }
          }
        }
      }
      
    `

}
export default useFooterStyles