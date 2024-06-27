import HeroImg from '../public/images/pexels-olly-3791664.jpg';
// import HeroImg from '../public/images/HomePage/HeroImg.webp';

import { FaUserNurse } from 'react-icons/fa6';
import { MdOutlineAssistWalker } from 'react-icons/md';
import { MdAssistWalker } from 'react-icons/md';
import { LiaUserNurseSolid } from 'react-icons/lia';
// import { HiChevronDoubleDown } from 'react-icons/hi';
import { FaArrowDownLong } from 'react-icons/fa6';
import { Box, Flex, Text, Divider, Button, Icon } from '@chakra-ui/react';
import 'animate.css';
import ImageTwo from '../public/images/pexels-kampus-7551661.jpg';
import Image from 'next/image';
import Link from 'next/link';
// import Image from 'next/image';
// import { FaArrowDown } from 'react-icons/fa6';

// import './globals.css';

const Home = () => {
	return (
		<div className="main">
			{/* Hero section */}

			<section
				className="hero"
				// position={'relative'}
				// paddingInline={'1rem'}
				// marginTop={'8.5rem'}
				// height={'calc(100vh - 9rem)'}
			>
				<div
					className="hero-image"
					// flexBasis="70%"
				>
					<Image
						// width={700}
						// height={700}
						className="img"
						src={HeroImg}
						alt="hero"
					/>
				</div>
				<div
					className="hero-text"
					// flexBasis="30%"
					// maxWidth={'700px'}
					// paddingInline={'1rem'}
				>
					<h1>Supported Living and Elderly Care</h1>
					<div
						className="divider"
						// orientation="horizontal"
						// height={'0.5rem'}
						// width={'20%'}
						// marginInline={'auto'}
					/>
					<p
					// marginBottom={'2rem'}
					// fontSize={'1.5rem'}
					// as="p"
					>
						We provide home quality care and carers for elderly people and
						people who need fulltime support to cope with all kinds of physical
						and health challenges in their day to day lives.
					</p>
					<button
						className="btn"
						// bg={'#cca6c8'}
						// color={'#fff'}
						// variant="ghost"
					>
						<Link href="/services">Our Services</Link>
					</button>
				</div>
				<div className="scroll-link animate__animated animate__slideInDown animate__infinite infinite">
					<FaArrowDownLong />
				</div>
			</section>

			{/* End of hero section */}

			{/* 2nd section */}
			<section className="home-subsection">
				<h4>
					Providing reliable and affordable home health care services in the
					South East.
				</h4>
			</section>

			{/* End of 2nd section */}

			{/* 3rd section */}
			<Box
				as="section"
				marginInline={'auto'}
				width={'80%'}
				maxWidth={'1400px'}>
				<Text
					as="h2"
					width={'80%'}
					maxWidth={'1000px'}
					marginInline={'auto'}
					textAlign={'center'}>
					Elderly care and supported living services provided by professional,
					dedicated and committed carers
				</Text>
				<Divider
					orientation="horizontal"
					height={'0.5rem'}
					width={'20%'}
					marginInline={'auto'}
				/>
				<Box
					boxShadow={'lg'}
					padding={'2rem 3rem'}>
					<Flex
						gap={'2rem'}
						justifyContent={'space-between'}>
						<Flex
							flexDirection={'column'}
							justifyContent={'start'}
							gap={'2rem'}
							alignItems={'center'}>
							<Box
								padding={'0.4rem'}
								color={'#cca6c8'}>
								<LiaUserNurseSolid fontSize="6rem" />
							</Box>

							<Text as={'h3'}>Skilled Nursing Care</Text>
							<Text as="p">
								Our skilled nursing services are delivered by a
								multidisciplinary team of healthcare professionals dedicated to
								meeting the complex medical needs of our residents.
							</Text>
						</Flex>
						<Flex
							flexDirection={'column'}
							justifyContent={'start'}
							gap={'2rem'}
							alignItems={'center'}>
							<Box
								padding={'0.4rem'}
								color={'#cca6c8'}>
								<MdAssistWalker fontSize={'6rem'} />
							</Box>

							<Text as={'h3'}>Assisted Living</Text>
							<Text as="p">
								Our assisted living communities are carefully designed to
								promote independence and well-being while offering personalized
								assistance with daily tasks.
							</Text>
						</Flex>
						<Text as="p"></Text>
					</Flex>
					<Box
						textAlign={'center'}
						marginTop={'2rem'}>
						<Button
							bg={'#cca6c8'}
							color={'#fff'}>
							<Link href={'/services'}>Our Services</Link>
						</Button>
					</Box>
				</Box>
			</Box>

			{/* End of 3rd section */}
		</div>
	);
};

export default Home;
