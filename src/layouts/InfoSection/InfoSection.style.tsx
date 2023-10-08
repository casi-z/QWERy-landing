import {
    Box, Grid,
    useTheme

} from "@mui/material"
import styled from 'styled-components'
function useInfoSectionStyles() {

    const theme = useTheme()

    return (
        styled.section`
          
          width: 100%;
          
          display: flex;
          justify-content: space-between;
          
          align-items: center;
          max-height: 720px;
          margin-bottom: 20vh;

          ${theme.breakpoints.down('sm')}{
            flex-direction: column;
            max-height: none;
          }
          
          .InfoSection__item{
            width: 40%;

            img{
              object-fit: cover;
              width: 100%;

            }
            
            ${theme.breakpoints.down('sm')}{
              width: 100%;
            }
            
            &.right{
              height: 60%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              
            }
          }
          .SecondaryButton{
            justify-content: flex-start;
            padding-left: 0;
          }
          
        `
    )
}
export default useInfoSectionStyles