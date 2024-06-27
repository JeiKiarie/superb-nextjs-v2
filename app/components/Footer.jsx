import { Box, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsTwitterX, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<Box
			as="section"
			className="footer"
			minHeight={'30rem'}
			paddingBlock={'2rem'}
			marginBottom={'0'}
			bg={'#cca6c8'}>
			<Flex
				flexDirection={'column'}
				justifyContent={'space-around'}
				alignItems={'center'}>
				<Flex>
					<Box>
						<Box>
							<Text
								fontSize="1.8rem"
								fontWeight={700}
								as="h1"
								color="#51649F"
								marginBottom={'2rem'}>
								SUPERB CARE SERVICES LTD
							</Text>
						</Box>
						<Box>
							<Text
								textAlign={'center'}
								fontSize={'1.4rem'}
								marginBottom={'1rem'}
								color={'#fff'}>
								Site Links
							</Text>
						</Box>
						<Box>
							<Flex
								justifyContent={'center'}
								alignItems={'center'}
								gap="2rem"
								color="#51649F"
								marginBottom={'1rem'}
								fontSize="1.5rem">
								<Text className="footer-link">
									<Link href="/">Home</Link>
								</Text>
								<Text className="footer-link">
									<Link href="about">About</Link>
								</Text>
								<Text className="footer-link">
									<Link href="services">Services</Link>
								</Text>
								<Text className="footer-link">
									<Link href="contact">Contact</Link>
								</Text>
							</Flex>
						</Box>
						<Box>
							<Flex
								justifyContent={'center'}
								alignItems={'center'}
								gap="1rem"
								color="#51649F">
								<Text
									marginBottom={'1rem'}
									textAlign={'center'}
									fontSize={'1.4rem'}
									color={'#fff'}>
									Social Links
								</Text>
							</Flex>
						</Box>
						<Box>
							<Flex
								justifyContent={'center'}
								gap={'4rem'}
								marginBottom={'2rem'}
								alignItems={'center'}>
								<Box fontSize="1.5rem">
									<Link
										href="https://x.com/"
										target="_blank"
										// fontSize="4.3rem"
										color={'#51649F'}
										bg={'transparent'}>
										<Box
											className="social-link"
											padding={'0.4rem'}>
											<BsTwitterX />
										</Box>
									</Link>
								</Box>
								<Box fontSize="1.5rem">
									<Link
										href="https://www.facebook.com/"
										target="_blank"
										fontSize="2.3rem"
										color={'#51649F'}
										bg={'transparent'}
										padding={'0.4rem'}>
										<Box
											className="social-link"
											padding={'0.4rem'}>
											<BsFacebook />
										</Box>
										{/* <IconButton
								boxSize={10}
								padding={'0.4rem'}
								as={BsFacebook}
								fontSize="1.5rem"
								color={'#51649F'}
								bg={'transparent'}
							/> */}
									</Link>
								</Box>
								<Box fontSize="1.5rem">
									<Link
										href="https://www.instagram.com/"
										target="_blank"
										fontSize="2.3rem"
										color={'#51649F'}
										bg={'transparent'}
										padding={'0.4rem'}>
										<Box
											className="social-link"
											padding={'0.4rem'}>
											<BsInstagram />
										</Box>
									</Link>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Flex>
				<Box>
					<Flex
						as={'article'}
						justify={'center'}
						align={'center'}
						// minHeight={'10rem'}
						textAlign={'center'}>
						<Box>
							<Text
								as="p"
								color={'#fff'}
								fontSize={'1.4rem'}>
								Copyright &copy; <span>{year}</span> Superb Care Services Ltd.
								<Text as={'span'}> All rights reserved.</Text>
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default Footer;
