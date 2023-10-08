import {ReactChild, FC} from 'react'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import LoginIcon from '@mui/icons-material/Login';
import {Box, InputAdornment, TextField, useMediaQuery, useTheme} from '@mui/material';
import useHeaderStyles from './Header.style'
import {ReactComponent as Logo} from '../../svg/Logo.svg'
import {ReactComponent as SearchIcon} from '@/svg/search.svg'
import MenuBurger from "@/components/MenuBurger/MenuBurger";

const {log} = console

interface HeaderProps {

    children?: ReactChild,

}

const Header: FC<HeaderProps> = ({children}) => {

    const Styles = useHeaderStyles()
    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

    const menuItems = [
        {
            name: 'Information',
            href: '#'
        },
        {
            name: 'About us',
            href: '#'
        },
        {
            name: 'Culture',
            href: '#'
        },

    ]

    return (

        <Box component={Styles}>
            <Box className={'Header__title'}>
                <Logo/>
            </Box>


            {!mobileVersion
                ?
                <>
                    <Menu menuItems={menuItems}/>

                    <Box className={'Header__search'}>
                        <SearchIcon/>
                        <TextField
                            id={'search'}
                            label="Search"
                            variant="filled"
                            color={'secondary'}

                        />

                    </Box>
                </>
                : <MenuBurger menuItems={menuItems} />
            }


        </Box>
    )
}
export default Header