import useMenuStyles from './Menu.style'
import { ReactChild, FC, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import MenuItem from '@/components/MenuItem/MenuItem'
import MenuBurger from '@/components/MenuBurger/MenuBurger';
const { log } = console

interface MenuProps {

    children?: ReactChild,

}
const menuItems = [
    {
        name: 'Information',

        href: '/'
    },
    {
        name: 'About us',
        href: '/methods'
    },
    {
        name: 'Culture',
        href: '/articles'
    },

]
const Menu: FC<MenuProps> = ({ children }) => {

    const S = useMenuStyles()

    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.up('sm'))

    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false)

    return (
        <>
            <S.Menu component={'nav'} className="Menu">

                {mobileVersion
                    ? menuItems.map((menuItem, index) =>

                        <MenuItem key={index} href={menuItem.href} >
                            {menuItem.name}
                        </MenuItem>
                    )
                    : <MenuBurger menuItems={menuItems} />

                }

            </S.Menu>

        </>
    )
}
export default Menu