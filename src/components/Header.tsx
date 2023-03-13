import { useEffect, useState } from 'react';
import desktopLight from '../assets/bg-desktop-light.jpg';
import desktopDark from '../assets/bg-desktop-dark.jpg';
import mobileLight from '../assets/bg-mobile-light.jpg';
import mobileDark from '../assets/bg-mobile-dark.jpg';

type HeaderProps = {
	theme: 'light' | 'dark';
	isMobile: boolean;
	setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
	setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};
const Header: React.FC<HeaderProps> = ({
	theme,
	isMobile,
	setIsMobile,
	setTheme,
}) => {
	const mobileBackground = theme === 'light' ? mobileLight : mobileDark;
	const desktopBackground = theme === 'light' ? desktopLight : desktopDark;

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};
		window.addEventListener('resize', handleResize);

		// Clean up event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
		console.log('theme:', theme);
	};

	const moon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
			<path
				fill="#FFF"
				fill-rule="evenodd"
				d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
			/>
		</svg>
	);

	const sun = (
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
			<path
				fill="#FFF"
				fill-rule="evenodd"
				d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
			/>
		</svg>
	);

	return (
		<header
			className={`relative w-full h-[200px] bg-cover bg-center ${
				isMobile ? '' : 'desktop:bg-cover desktop:bg-center desktop:h-[300px]'
			}`}
			style={{
				backgroundImage: `url(${
					isMobile ? mobileBackground : desktopBackground
				})`,
			}}
		>
			<div className="flex items-center justify-between h-50 desktop:flex desktop:w-full desktop:justify-between desktop:pl-[600px] desktop:pr-[550px]">
				<div className="pt-8 pl-8 desktop:pt-12 text-light-gray text-m desktop:text-l">
					T O D O
				</div>
				<div className="desktop:pt-4">
					<button className=" pr-8 pt-8" onClick={handleThemeSwitch}>
						{theme === 'light' ? moon : sun}{' '}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
