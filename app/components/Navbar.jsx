import { Box, Flex, Text } from '@chakra-ui/react';
import Logo from '../../public/images/Logo - Superb Care.jpg';
import Image from 'next/image';
import Link from 'next/link';
// import '../globals.css';

const Navbar = () => {
	return (
		<Flex
			as="nav"
			bgColor={'#fff'}
			position="fixed"
			left={0}
			top={0}
			right={0}
			height={'4.5rem'}
			marginBottom={'1rem'}
			justify={'space-between'}
			align={'center'}
			boxShadow="md"
			paddingInline="1rem"
			zIndex={100}>
			<Box>
				<Flex
					justifyContent={'center'}
					alignItems={'center'}>
					<Link href="/">
						<Image
							src={Logo}
							width={130}
							height={130}
							alt="superb care ltd logo"
						/>
					</Link>
					<Text
						fontSize="1.8rem"
						fontWeight={700}
						as="h1"
						color="#51649F"
						mt="0">
						SUPERB CARE SERVICES LTD
					</Text>
				</Flex>
			</Box>
			<Box color="green.600">
				<Flex
					gap="3rem"
					color="#51649F"
					fontSize="1.5rem">
					<Text>
						<Link
							href="/"
							className="nav-link">
							Home
						</Link>
					</Text>
					<Text>
						<Link
							href="about"
							className="nav-link">
							About
						</Link>
					</Text>
					<Text>
						<Link
							href="services"
							className="nav-link">
							Services
						</Link>
					</Text>
					<Text>
						<Link
							href="contact"
							className="contact-link">
							Contact Us
						</Link>
					</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
