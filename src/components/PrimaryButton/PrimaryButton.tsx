import {ReactChild, FC} from 'react'
import {Button, useTheme} from "@mui/material";
import styled from "styled-components";

const {log} = console

interface PrimaryButtonProps {

    children: ReactChild,

}

const PrimaryButton: FC<PrimaryButtonProps> = ({children}) => {

    const theme = useTheme()

    const Styles = styled.button`
      background: ${theme.palette.primary.dark};
      color: #000;
      font-family: DM Sans;
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
    `

    return (

        <Button
            component={Styles}
            data-cursor-pointer
            variant="contained"
            className="PrimaryButton"
        >

            {children}

        </Button>
    )
}
export default PrimaryButton