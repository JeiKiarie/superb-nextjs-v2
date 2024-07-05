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
		header:
			'What sets your facility apart from others, and why should I choose your services for my loved one?',
		details: `At Superb Care Services Ltd, we pride ourselves on our commitment to excellence, compassion, and personalized care. What sets us apart is our dedicated team of caregivers, our comprehensive range of services and amenities, and our unwavering dedication to meeting the unique needs and preferences of each individual under our care. We understand that choosing the `,
	},
	{
		id: 2,
		header: 'What amenities and services are included in your care packages?',
		details: `Our care packages include a wide range of amenities and services aimed at enhancing the quality of life for our residents. These may include assistance with activities of daily living, medication management, housekeeping, laundry service, transportation, nutritious meals and snacks, social and recreational activities, wellness programs, and access to on-site healthcare services.`,
	},
	{
		id: 3,
		header: 'What amenities and services are included in your care packages?',
		details: `Our care packages include a wide range of amenities and services aimed at enhancing the quality of life for our residents. These may include assistance with activities of daily living (ADLs), medication management, housekeeping, laundry service, transportation, nutritious meals and snacks, social and recreational activities, wellness programs, and access to on-site healthcare services.`,
	},
	{
		id: 4,
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
						At Superb Care Services, we provide reliable and affordable home
						health care services for clients across and around the South East.
					</p>
					<p>
						As your trusted care provider since 2018, our carer/nursing staff
						guarantee personalized attention to all your health and related
						needs.
					</p>
					<p>
						We care about all of our clients, and offer extensive care services
						to make sure they feel as comfortable as possible.
					</p>
				</article>
				<div className="btn">
					<Button>
						<Link href="/contact">Contact Us</Link>
					</Button>
				</div>
			</section>
			<section className="faqs">
				<div className="section-title">
					<h3>frequently asked questions</h3>
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
