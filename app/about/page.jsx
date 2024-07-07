import { Box, Button, Flex, Text } from '@chakra-ui/react';
import aboutHeroImg from '../../public/images/pexels-kampus-7551667.jpg';
import Image from 'next/image';
import Link from 'next/link';
// import {
// 	Accordion,
// 	AccordionActions,
// 	AccordionDetails,
// 	AccordionSummary,
// 	Typography,
// } from '@mui/material';
import AccordionComponent from '../components/AccordionComponent';
// import { MdExpandMore } from 'react-icons/md';

const accordions = [
	{
		id: 1,
		header: 'Why Choose Our Live-In Services?',
		details: `Our dedicated caregivers provide round-the-clock assistance, ensuring safety and comfort at all times. Whether it’s help with daily activities, medical needs, or companionship, we are here to support you every step of the way.`,
	},
	{
		id: 2,
		header:
			'What sets your facility apart from others, and why should I choose your services for my loved one?',
		details: `At Superb Care Services Ltd, we pride ourselves on our commitment to excellence, compassion, and personalized care. What sets us apart is our dedicated team of caregivers, our comprehensive range of services and amenities, and our unwavering dedication to meeting the unique needs and preferences of each individual under our care.`,
	},
	{
		id: 3,
		header: 'What amenities and services are included in your care packages?',
		details: `Our care packages include a wide range of amenities and services aimed at enhancing the quality of life for our residents. These may include assistance with activities of daily living, medication management, housekeeping, laundry service, transportation, nutritious meals and snacks, social and recreational activities, wellness programs, and access to on-site healthcare services.`,
	},
	{
		id: 4,
		header: 'What amenities and services are included in your care packages?',
		details: `Our care packages include a wide range of amenities and services aimed at enhancing the quality of life for our residents. These may include assistance with activities of daily living (ADLs), medication management, housekeeping, laundry service, transportation, nutritious meals and snacks, social and recreational activities, wellness programs, and access to on-site healthcare services.`,
	},
	{
		id: 5,
		header:
			'What levels of care do you provide, and how do you determine which one is right for my loved one?',
		details: `We offer a continuum of care services, including assisted living, memory care, skilled nursing care, respite care, and hospice care. Our experienced team conducts comprehensive assessments to determine the level of care needed for each individual, taking into account factors such as medical needs, cognitive abilities, mobility, and personal preferences. Through collaborative care planning, we work closely with residents and their families to develop personalized care plans that meet their unique needs and goals.`,
	},
];

const About = () => {
	return (
		<main>
			<section className="about-hero">
				<article>
					<Image
						className="about-img"
						src={aboutHeroImg}
						alt="Eldery man with carer"
					/>
				</article>
			</section>
			<section className="about-section">
				<h2>Let us take care of your loved one</h2>
				<article className="about-info">
					<p>
						At Superb Care Services, we provide reliable and affordable live-in
						care services for clients across and around the South East.
					</p>
					<p>
						As your trusted care provider since 2018, our carer/nursing staff
						guarantee personalized attention to all your health and related
						needs.
					</p>
					<p>
						Our clients are our priority and our services are tailored to suit
						every need. We offer extensive person-centred care and support
						services to ensure their comfort.
					</p>
				</article>
				{/* <div> */}
				<Button
					className="btn"
					marginInline={'auto'}
					color={'#fff'}>
					<Link href="/contact">Contact Us</Link>
				</Button>
				{/* </div> */}
			</section>
			<section className="faqs">
				<div className="section-title">
					<h3>frequently asked questions</h3>
					<div className="divider"></div>
					<p>
						Have questions about our services, amenities, costs, insurance
						coverage, or anything else? We have the answers. Explore our
						comprehensive FAQ section to find information on a wide range of
						topics, or reach out to our friendly team for personalized
						assistance. We are here to help you make informed decisions and
						provide peace of mind every step of the way.
					</p>
				</div>
				<div className="faqs-container">
					{accordions.map((accordion) => (
						<AccordionComponent
							key={accordion.id}
							accordions={accordions}
							header={accordion.header}
							details={accordion.details}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default About;
