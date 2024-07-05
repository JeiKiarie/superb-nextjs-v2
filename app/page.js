import HeroImg from '../public/images/pexels-olly-3791664.jpg';
// import HeroImg from '../public/images/HomePage/HeroImg.webp';

import { FaUserNurse } from 'react-icons/fa6';
import { MdOutlineAssistWalker } from 'react-icons/md';
import { MdAssistWalker } from 'react-icons/md';
import { LiaUserNurseSolid } from 'react-icons/lia';
import { BiBrain } from 'react-icons/bi';
import { LuCalendarClock } from 'react-icons/lu';
import { TbMoodPuzzled } from 'react-icons/tb';
import { GiPeaceDove } from 'react-icons/gi';
// import { HiChevronDoubleDown } from 'react-icons/hi';
import { FaArrowDownLong } from 'react-icons/fa6';
import { Box, Flex, Text, Divider, Button, Icon } from '@chakra-ui/react';
import 'animate.css';
import ImageTwo from '../public/images/pexels-kampus-7551661.jpg';
import Image from 'next/image';
import Link from 'next/link';

const services = [
	{
		title: 'Skilled Nursing Care',
		icon: LiaUserNurseSolid,
		text: `Our skilled nursing services are delivered by a
		multidisciplinary team of healthcare professionals dedicated to
		meeting the complex medical needs of our residents.`,
	},
	{
		title: 'Assisted Living',
		icon: MdOutlineAssistWalker,
		text: `Our assisted living communities are carefully designed to promote independence and well-being while offering personalized assistance with daily tasks.`,
	},
	{
		title: 'Memory Care',
		icon: TbMoodPuzzled,
		text: `Our memory care program provides a safe and secure environment where residents receive specialized care tailored to their cognitive needs.`,
	},
	{
		title: 'Respite Care',
		icon: LuCalendarClock,
		text: `Our respite care services offer temporary relief for caregivers while ensuring that their loved ones receive the highest standard of care in a welcoming and supportive setting.`,
	},
	{
		title: 'Hospice Care',
		icon: GiPeaceDove,
		text: `Our holistic approach focuses on pain management, symptom control, and emotional support, allowing residents to live their remaining days with dignity and peace.`,
	},
];

const Home = () => {
	return (
		<div className="main">
			{/* Hero section */}

			<section className="hero">
				<div
					className="hero-text
					">
					<h1
						className="animate__animated
					animate__slideInRight">
						Supported Living and Elderly Care
					</h1>
					<div
						className="divider animate__animated
					animate__fadeIn"
					/>
					<p
						className="animate__animated
					animate__slideInLeft">
						We provide home quality care and carers for elderly people and
						people who need fulltime support to cope with all kinds of physical
						and health challenges in their day to day lives.
					</p>
				</div>
				<div
					className="hero-image
					animate__animated
					animate__slideInUp">
					<Image
						className="img"
						src={HeroImg}
						alt="hero"
					/>
				</div>

				{/* <div className="scroll-link animate__animated animate__slideInDown animate__infinite infinite">
					<FaArrowDownLong />
				</div> */}
			</section>

			{/* End of hero section */}

			{/* 2nd section */}
			<section className="home-subsection">
				<h4>
					Reliable and affordable home health care services in the South East.
				</h4>
			</section>

			{/* End of 2nd section */}

			{/* 3rd section */}
			<Box
				as="section"
				marginInline={'auto'}
				width={'100%'}
				maxWidth={'1400px'}>
				<Box
					padding={'2rem'}
					width={'100%'}
					bgColor={'#cca6c8'}
					color={'#fff'}>
					<Text
						as="h2"
						width={'80%'}
						maxWidth={'1000px'}
						marginInline={'auto'}
						textAlign={'center'}>
						Elderly care and supported living services provided by professional,
						dedicated and committed carers
					</Text>
				</Box>
				<Divider
					orientation="horizontal"
					height={'0.5rem'}
					width={'20%'}
					marginInline={'auto'}
				/>
				<Box
					width={'80%'}
					marginInline={'auto'}
					boxShadow={'lg'}
					padding={'2rem 3rem'}>
					<Flex
						gap={'2rem'}
						justifyContent={'space-between'}
						flexWrap={'wrap'}>
						{services.map((service) => (
							<Flex
								key={service.title}
								flexDirection={'column'}
								justifyContent={'start'}
								gap={'2rem'}
								flexBasis={'calc(50% - 2rem)'}
								alignItems={'center'}>
								<Box
									padding={'0.4rem'}
									color={'#cca6c8'}>
									{<service.icon fontSize={'6rem'} />}
								</Box>

								<Text as={'h3'}>{service.title}</Text>
								<Text as="p">{service.text}</Text>
							</Flex>
						))}
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
		</div>
	);
};

export default Home;
