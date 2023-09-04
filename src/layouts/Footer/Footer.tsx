import useFooterStyles from './Footer.style'
import { ReactChild, FC } from 'react'
import { ReactComponent as InstagramIcon } from "../../svg/InstagramIcon.svg";
import { ReactComponent as VKIcon } from "../../svg/VKIcon.svg";
import { ReactComponent as FacebookIcon } from "../../svg/FacebookIcon.svg";
//import { BlackButton } from '../../components/BlackButton/BlackButton.style';
import { Button } from '@mui/material';
const { log } = console

interface FooterProps {

	children?: ReactChild,
    className?: string,

}

const Footer: FC<FooterProps> = ({ children, className }) => {
    
    const S = useFooterStyles()

	const socialIcons = [
		{icon: <VKIcon/>, href: 'vk.com'},
		{icon: <FacebookIcon/>, href: 'facebook.com'},
		{icon: <InstagramIcon/>, href: 'instagram.com'},
	]
	return (
		<S.Footer className={className}>
			<S.Footer__Info component={'ul'}>

				<li>БАРБЕРШОП «БОРОДИНСКИЙ»</li>
				<li>АДРЕС: Г. Ногинск, ул. Пушкина, д. Колотушкина</li>
				<li>КАК НАС НАЙТИ?</li>
				<li>ТЕЛЕФОН: +7 (495) 666-02-66</li>

			</S.Footer__Info>
			<S.Footer__Buttons component={'section'}>

				ДАВАЙТЕ ДРУЖИТЬ!
				<S.Footer__ButtonsWrapper>

					{socialIcons.map((socialIcon, index) => 
						<S.Footer__Button
							href={`https://${socialIcon.href}`}
							key={index}
							className='_socialButton'>

							{socialIcon.icon}

						</S.Footer__Button>
					)}

				</S.Footer__ButtonsWrapper>
			</S.Footer__Buttons>
			<S.Footer__Link component={'section'}>
				РАЗРАБОТАНО:
				<Button className='Footer__GithubLink' href='https://github.com/casi-z'>
					CASI-Z
				</Button>
			</S.Footer__Link>
		</S.Footer>
	)
}
export default Footer