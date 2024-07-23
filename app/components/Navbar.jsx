'use client';
import Logo from '../../public/images/Logo - Superb Care.webp';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { BsTwitterX, BsInstagram, BsFacebook } from 'react-icons/bs';
import { useState } from 'react';

// import '../globals.css';
// const links = ['Home', 'About', 'Services', 'Contact'];
const links = [
	{ link: 'Home', path: '/' },
	{ link: 'About', path: '/about' },
	{ link: 'Services', path: '/services' },
	{ link: 'Contact', path: '/contact' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		const menubtn = document.querySelector('.menu-btn');
		const closebtn = document.querySelector('.close-btn');
		console.log(sidebar);
		sidebar.classList.add('show-sidebar');
		menubtn.style.display = 'none';
		closebtn.style.display = 'block';
		setIsOpen(true);
	};

	const closeSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		const menubtn = document.querySelector('.menu-btn');
		const closebtn = document.querySelector('.close-btn');
		sidebar.classList.remove('show-sidebar');
		closebtn.style.display = 'none';
		menubtn.style.display = 'block';
		setIsOpen(false);
	};
	return (
		<>
			<header className="home">
				<nav className="navbar">
					<div className="logo">
						<div>
							<Link href="/">
								<Image
									src={Logo}
									width={130}
									height={130}
									alt="superb care ltd logo"
								/>
								{/* <img
							src={Logo}
							alt="logo"
						/> */}
							</Link>
						</div>
						<h1>SUPERB CARE SERVICES LTD</h1>
					</div>

					<div>
						<ul className="nav-links">
							{links.map((link, index) => (
								<li
									key={index}
									className="nav-link">
									<Link href={link.path}>{link.link}</Link>
								</li>
							))}
						</ul>
					</div>
					{/* {!isOpen && ( */}
					<div
						className="menu-btn"
						onClick={openSidebar}>
						{<MenuIcon style={{ fontSize: '2rem' }} />}
					</div>
					{/* )} */}
					{/* {isOpen && ( */}
					<div
						className="close-btn"
						onClick={closeSidebar}>
						{<CloseIcon style={{ fontSize: '2rem' }} />}
					</div>
					{/* )} */}
				</nav>
			</header>
			{/* {isOpen && ( */}
			<nav className="sidebar">
				<div>
					<ul className="sidebar-links">
						{links.map((link, index) => (
							<li
								onClick={closeSidebar}
								key={index}
								className="sidebar-link">
								<Link href={link.path}>{link.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="social-links">
					<ul className="social-icons">
						<li>
							<a
								href="#"
								target="_blank">
								<BsTwitterX />
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank">
								<BsFacebook />
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank">
								<BsInstagram />
							</a>
						</li>
					</ul>
				</div>
			</nav>
			{/* )} */}
		</>
	);
};

export default Navbar;
