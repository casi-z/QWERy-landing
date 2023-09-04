import {
    Box,
    Drawer,
    IconButton,
    styled,
    useTheme
} from "@mui/material"

function useMenuBurgerStyles() {

    const theme = useTheme()

    return {
        MenuBurger: styled(Drawer)({
           '.MuiDrawer-paper':{
                background: theme.palette.secondary.main,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                paddingBottom: '5%'
                
            }
        }),
        MenuBurger__Items: styled(Box)({
         	width: '60vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         	flexDirection: 'column',
            background: theme.palette.secondary.main,
            padding: 0,
        }),
        BurgerButton: styled(IconButton)({

        })
    }
}

export default useMenuBurgerStyles