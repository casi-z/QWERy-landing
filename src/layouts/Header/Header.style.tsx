import {

    Box,

    useTheme

} from "@mui/material"
import styled from "@mui/styled-engine-sc";
import { sitePadding } from '../../theme/GlobalStyle'
import useConstants from "@/theme/constants";

function useHeaderStyles() {
    const constants = useConstants()
    const theme = useTheme()

    return {
        HHH: styled(Box)(`
            display: flex;
            
        `),
        Header: styled(Box)({
            backdropFilter: 'blur(10px)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,
            padding: sitePadding,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: theme.palette.text.primary,
            textTransform: 'capitalize',
            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: 0,
            }
        }),
        HeaderTitle: styled(Box)({
            width: '100%',
            display: "flex",
            justifyContent: 'center',
            textTransform: 'none',


        })
    }
}
export default useHeaderStyles