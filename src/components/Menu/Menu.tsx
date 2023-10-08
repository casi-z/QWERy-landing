import useMenuStyles from './Menu.style'
import { ReactChild, FC, useState } from 'react'
import {Box, useMediaQuery} from '@mui/material'
import MenuItem from '@/components/MenuItem/MenuItem'
import MenuBurger from '@/components/MenuBurger/MenuBurger';
import {IMenuItem} from "@/types/types";
const { log } = console

interface MenuProps {

    children?: ReactChild,
    menuItems: IMenuItem[]

}

const Menu: FC<MenuProps> = ({ children, menuItems }) => {

    const Styles = useMenuStyles()

    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.up('sm'))

    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false)

    return (

        <Box component={Styles} className="Menu">

            {menuItems.map((menuItem, index) =>

                <MenuItem key={index} href={menuItem.href}>
                    {menuItem.name}
                </MenuItem>
            )}

        </Box>

    )
}
export default Menu