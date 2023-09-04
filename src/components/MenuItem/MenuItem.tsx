import useMenuItemStyles from './MenuItem.style'
import { ReactChild, FC } from 'react'

const { log } = console

interface MenuItemProps {

	children: ReactChild,
	startIcon?: ReactChild,
	href: string,
	sx?: {},

}

const MenuItem: FC<MenuItemProps> = ({ children, startIcon, sx, href }) => {
const S = useMenuItemStyles()

    return(
        <S.MenuItem startIcon={startIcon} sx={sx} href={href} variant='text' className="MenuItem">
            {children}
        </S.MenuItem>
    )
}
export default MenuItem