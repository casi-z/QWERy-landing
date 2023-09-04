import {
    Box, Grid,
    styled,
    useTheme

} from "@mui/material"

function useInfoSectionStyles() {

    const theme = useTheme()

    return {

        InfoSection: styled(Grid)(`
           
        `),
        InfoSectionItem: styled(Grid)(`
           
        `)
    }
}
export default useInfoSectionStyles