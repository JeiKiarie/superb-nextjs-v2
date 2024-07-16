import { Box, Flex, Text } from '@chakra-ui/react';
import Logo from '../../public/images/Logo - Superb Care.webp';
import Image from 'next/image';
import Link from 'next/link';
// import '../globals.css';

const Navbar = () => {
	return (
		<nav
			className="navbar"
			style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
			<div className="logo">
				<div>
					<Link href="/">
						<Image
							src={Logo}
							width={130}
							height={130}
							alt="superb care ltd logo"
						/>
					</Link>
				</div>
				<h1>SUPERB CARE SERVICES LTD</h1>
			</div>

			<div>
				<ul className="nav-links">
					<li className="nav-link">
						<Link href="/">Home</Link>
					</li>
					<li className="nav-link">
						<Link href="about">About</Link>
					</li>
					<li className="nav-link">
						<Link href="services">Services</Link>
					</li>
					<li className="contact-link">
						<Link href="contact">Contact Us</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
