import useMenuBurgerStyles, * as S from './MenuBurger.style'
import { ReactChild, FC, useState } from 'react'
import {Button, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useMenuItemStyles from '@/components/MenuItem/MenuItem.style';
import { IMenuItem } from '@/types/types';
import { ReactComponent as Logo } from '@/svg/Logo.svg'
const { log } = console

interface MenuBurgerProps {
   
    children?: ReactChild,
    menuItems: IMenuItem[], 
   
}

const MenuBurger: FC<MenuBurgerProps> = ({ children, menuItems }) => {

    const S = useMenuBurgerStyles()

    const MenuItemStyles = useMenuItemStyles()

    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false)

    return (<>
        
        <S.BurgerButton onClick={() => setIsMenuBurgerOpen(!isMenuBurgerOpen)}>
            
            <MenuIcon color='primary' />
            
		</S.BurgerButton>

		<S.MenuBurger
			open={isMenuBurgerOpen}
			anchor={'right'}
			
        >
            
			<S.MenuBurger__Items>
				
                {menuItems.map((menuItem, index) => (
                        
                    <MenuItemStyles.MenuItem
                        key={index}
                        href={menuItem.href}
                        onClick={() => setIsMenuBurgerOpen(false)}
				        onKeyDown={() => setIsMenuBurgerOpen(false)}
                    >
							{menuItem.name}
                    </MenuItemStyles.MenuItem>
                    
				))}
				
				<Divider />
                
            </S.MenuBurger__Items>

            <Button
                href="#"
                onClick={() => setIsMenuBurgerOpen(false)}
				onKeyDown={() => setIsMenuBurgerOpen(false)}
            >
                <Logo />
            </Button>

		</S.MenuBurger>

	</>)
}
export default MenuBurger