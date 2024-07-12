// import HeroImg from '../public/images/pexels-olly-3791664.webp';
import HeroImg from '../public/images/pexels-jsme-mila-523821574-18459193.webp';

import { FaUserNurse } from 'react-icons/fa6';
import { MdOutlineAssistWalker } from 'react-icons/md';
import { MdAssistWalker } from 'react-icons/md';
import { LiaUserNurseSolid } from 'react-icons/lia';
import { BiBrain } from 'react-icons/bi';
import { LuCalendarClock } from 'react-icons/lu';
import { TbMoodPuzzled } from 'react-icons/tb';
import { GiPeaceDove } from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';
import { GiBroom } from 'react-icons/gi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { BiFirstAid } from 'react-icons/bi';
import { BiTimeFive } from 'react-icons/bi';
import { BiAlarm } from 'react-icons/bi';
// import { HiChevronDoubleDown } from 'react-icons/hi';
import { FaArrowDownLong } from 'react-icons/fa6';
import { Box, Flex, Text, Divider, Button, Icon } from '@chakra-ui/react';
import 'animate.css';
import ImageTwo from '../public/images/pexels-kampus-7551661.jpg';
import Image from 'next/image';
import Link from 'next/link';

const services = [
	{
		id: 1,
		title: 'Personal Care',
		icon: MdHealthAndSafety,
		text: `Our personal care services are designed to assist with daily activities, ensuring that clients can maintain their independence and dignity. Our caregivers assist with such activities of daily living as bathing, dressing, grooming, and mobility.`,
	},
	{
		id: 2,
		title: 'Household Assistance',
		icon: GiBroom,
		text: `We take care of household chores to create a clean, safe, and comfortable living environment, ie, light housekeeping, laundry, meal preparation, and grocery shopping.`,
	},
	{
		id: 3,
		title: 'Companionship',
		icon: FaPeopleGroup,
		text: `We provide companionship to combat loneliness and enhance quality of life. Social interaction, emotional support, accompaniment to appointments, and help in engaging in hobbies are some of the aspects of companionship that our carers are trained to give.`,
	},
	{
		id: 4,
		title: 'Specialized Care',
		icon: BiFirstAid,
		text: `We offer specialised care for those with specific health conditions or recovery needs including Dementia and Alzheimer’s care, post-surgery and rehabilitation support, as well as palliative and end-of-life care.`,
	},

	{
		id: 5,
		title: '24/7 Care & Support',
		icon: BiTimeFive,
		text: `Our dedicated caregivers provide round-the-clock assistance, ensuring safety and comfort at all times. Whether it’s help with daily activities, medical needs, or companionship, we are here to support you every step of the way.`,
	},
	{
		id: 6,
		title: 'Emergency Response',
		icon: BiAlarm,
		text: `Trained in emergency procedures, our caregivers can quickly and effectively respond to all unexpected situations.`,
	},
	{
		id: 7,
		title: 'Skilled Nursing Care',
		icon: LiaUserNurseSolid,
		text: `Our skilled nursing services are delivered by a
		multidisciplinary team of healthcare professionals dedicated to
		meeting the complex medical needs of our residents.`,
	},
	{
		id: 8,
		title: 'Assisted Living',
		icon: MdOutlineAssistWalker,
		text: `Our assisted living communities are carefully designed to promote independence and well-being while offering personalized assistance with daily tasks.`,
	},
	{
		id: 9,
		title: 'Memory Care',
		icon: TbMoodPuzzled,
		text: `Our memory care program provides a safe and secure environment where residents receive specialized care tailored to their cognitive needs.`,
	},
	{
		id: 10,
		title: 'Respite Care',
		icon: LuCalendarClock,
		text: `Our respite care services offer temporary relief for caregivers while ensuring that their loved ones receive the highest standard of care in a welcoming and supportive setting.`,
	},
	{
		id: 11,
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
						Supported Living and Elderly Care. Bringing Compassionate Care to
						Your Home.
					</h1>
					<div
						className="divider animate__animated
					animate__fadeIn"
					/>
					<p
						className="animate__animated
					animate__slideInLeft">
						We provide quality care for elderly people and people who need
						fulltime support to cope with all kinds of physical and health
						challenges in their day to day lives. Our mission is to provide
						exceptional live-in care services that enable you or your loved ones
						to live safely and comfortably in the place you love most — home.
					</p>
				</div>

				<Box
					className="hero-image
					animate__animated
					animate__slideInUp">
					<Image
						width="auto"
						height="auto"
						layout="responsive"
						className="img"
						src={HeroImg}
						alt="hero"
					/>
				</Box>

				{/* <div className="scroll-link animate__animated animate__slideInDown animate__infinite infinite">
					<FaArrowDownLong />
				</div> */}
			</section>

			{/* End of hero section */}

			{/* 2nd section */}
			<section className="home-subsection">
				<h4>
					Reliable and affordable home health care services in the South East.
					Customized care plans tailored to your specific situation.
				</h4>
			</section>
			{/* End of 2nd section */}

			{/* 3rd section */}
			<Box
				as="section"
				// marginInline={'auto'}
				// width={'100%'}
			>
				<Box
					width={'100%'}
					bgColor={'#cca6c8'}
					color={'#fff'}>
					<Text
						as="h2"
						width={'80%'}
						maxWidth={'1440px'}
						paddingBlock={'1rem'}
						// paddingInline={'10rem'}
						marginInline={'auto'}
						textAlign={'center'}>
						Elderly care and supported living services. With our team of
						experienced and compassionate caregivers, we offer personalized,
						customised live-in care services tailored to meet all unique needs,
						ensuring that you receive the support you need in the most
						comfortable and effective way possible.
					</Text>
				</Box>
			</Box>

			<Box
				as="section"
				className="section-center live-in-services"
				width={'85%'}
				marginInline={'auto'}
				marginBottom={'2rem'}
				boxShadow={'lg'}
				padding={'2rem 3rem'}>
				<Flex
					gap={'2rem'}
					justifyContent={'space-between'}
					flexWrap={'wrap'}>
					{services.map((service) => (
						<Flex
							key={service.id}
							flexDirection={'column'}
							justifyContent={'start'}
							gap={'2rem'}
							flexBasis={'calc(50% - 2rem)'}
							alignItems={'center'}>
							<Box
								padding={'0.4rem'}
								color={'#cca6c8'}>
								{
									<service.icon
										fontSize={'6rem'}
										width={'6rem'}
										height={'6rem'}
									/>
								}
							</Box>

							<Text as={'h3'}>{service.title}</Text>
							<Text
								as="p"
								textAlign={'justify'}>
								{service.text}
							</Text>
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
		</div>
	);
};

export default Home;
