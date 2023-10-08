import useFooterStyles from './Footer.style'
import { ReactChild, FC } from 'react'
import {ReactComponent as Logo} from '@/svg/Logo.svg'
import {Box, Button, Divider, IconButton, Input, Link, useTheme} from '@mui/material';
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import {socials} from "@/data/socials";
import EndButtonInput from "@/components/EndButtonInput/EndButtonInput";

const { log } = console

interface FooterProps {

	children?: ReactChild,
    className?: string,

}

const Footer: FC<FooterProps> = ({ children, className }) => {

    const Styles = useFooterStyles()

	const theme = useTheme()

	const servicesLinks = [
		{
			name: 'Email Marketing',
			href: '#'
		},
		{
			name: 'Campaigns',
			href: '#'
		},
		{
			name: 'Branding',
			href: '#'
		},
		{
			name: 'Offline',
			href: '#'
		},


	]

	const aboutLinks = [
		{
			name: 'Our Story',
			href: '#'
		},
		{
			name: 'Benefits',
			href: '#'
		},
		{
			name: 'Team',
			href: '#'
		},
		{
			name: 'Careers',
			href: '#'
		},
	]

	const helpLinks = [
		{
			name: 'FAQs',
			href: '#'
		},
		{
			name: 'Contact Us',
			href: '#'
		},
	]

	return (
		<Box component={Styles}>

			<Box className={'footer__header'}>

				<Logo viewBox={'0 0 86 23'} width={'136'} height={'73'}/>

				<Box className={'footer__buttons'}>

					<SecondaryButton color={theme.palette.text.primary}>
						Ready to explore?
					</SecondaryButton>

					<PrimaryButton>
						Get started
					</PrimaryButton>

				</Box>

			</Box>

			<Divider className={'footer__divider'} color={'white'}/>

			<Box className={'footer__body'}>

				<Box
					component={'form'}
					className={'footer__form'}
				>

					<Box component={'h2'} className={'footer__form-title'}>
						Let's go on vacation, <br/> Make your day
					</Box>

					<EndButtonInput
						placeholder={"Email address"}
						button={
							<PrimaryButton>
								<ArrowForwardIosIcon/>
							</PrimaryButton>
						}

					/>

				</Box>

				<Box className={'footer__links'} component={'ul'}>

					<Box component={'li'}>

						<SecondaryHeader>Services</SecondaryHeader>

					</Box>

					{servicesLinks.map(link => (

						<Box component={'li'}>

							<Link
								className={'footer__link'}
								href={link.href}
								underline="hover"
							>

								{link.name}

							</Link>

						</Box>

					))}

				</Box>

				<Box className={'footer__links'} component={'ul'}>

					<Box className={'footer__link'} component={'li'}>

						<SecondaryHeader>About</SecondaryHeader>

					</Box>

					{aboutLinks.map(link => (

						<Box component={'li'}>

							<Link
								className={'footer__link'}
								href={link.href}
								underline="hover"
							>

								{link.name}

							</Link>

						</Box>

					))}

				</Box>

				<Box className={'footer__links'} component={'ul'}>

					<Box className={'footer__link'} component={'li'}>

						<SecondaryHeader>Help</SecondaryHeader>

					</Box>

					{helpLinks.map(link => (

						<Box component={'li'}>

							<Link
								underline="hover"
								className={'footer__link'}
								href={link.href}
							>

								{link.name}

							</Link>

						</Box>

					))}

				</Box>

			</Box>

			<Box className={'footer__bottom'}>

				<Box>

					<Link underline={'hover'} className={'footer__link'} href={'#'}>Terms & Conditions</Link>
					<Link underline={'hover'} className={'footer__link'} href={'#'}>Privacy Policy</Link>

				</Box>

				<Box className={'footer__social-icons'}>

					{socials.map(social => (

						<IconButton
							className={'social-icon'}
							href={`https://${social.href}`}
						>
							{social.icon}
						</IconButton>

					))}

				</Box>

			</Box>

		</Box>

	)
}
export default Footer