import { Box, Button, Flex, Text } from '@chakra-ui/react';
import aboutHeroImg from '../../public/images/pexels-kampus-7551667.jpg';
import Image from 'next/image';
import Link from 'next/link';

import AccordionComponent from '../components/AccordionComponent';
// import { MdExpandMore } from 'react-icons/md';

const values = [
	{
		id: 1,
		title: 'Compassion',
		text: `We believe in treating each client with the utmost kindness and
		respect. Our caregivers are committed to providing care that is
		empathetic and understanding, ensuring that every interaction is
		filled with warmth and consideration.`,
	},
	{
		id: 2,
		title: 'Integrity',
		text: `We uphold the highest standards of honesty and ethical behaviour in all our interactions. Trust and transparency are at the core of everything we do, and we are committed to being accountable and reliable partners in care.`,
	},
	{
		id: 3,
		title: 'Excellence',
		text: `We strive for excellence in all aspects of our services. From
		hiring the best caregivers to implementing the latest care
		techniques, we are dedicated to providing the highest quality
		care. Our continuous improvement initiatives ensure that we are
		always at the forefront of the home care industry.`,
	},
	{
		id: 4,
		title: 'Respect',
		text: `We honour the dignity, privacy, and individuality of each client.
		Our approach to care is always respectful and considerate of
		personal preferences and needs. We believe in promoting
		independence and supporting our clients in making their own
		choices.`,
	},
	{
		id: 5,
		title: 'Teamwork',
		text: `We believe in the power of teamwork. Our caregivers, clients, and
		their families work together to create a supportive and nurturing
		environment. Collaboration and open communication are key to
		delivering effective and personalized care.`,
	},
];

const accordions = [
	{
		id: 1,
		header: 'Why choose your live-in services?',
		details: `Our dedicated caregivers provide round-the-clock assistance, ensuring safety and comfort at all times. Whether it’s help with daily activities, medical needs, or companionship, we are here to support you every step of the way.`,
	},
	{
		id: 2,
		header: 'What sets your live-in services establishment apart from others?',
		details: `At Superb Care Services Ltd, we pride ourselves on our commitment to excellence, compassion, and personalized care. What sets us apart is our dedicated team of caregivers, our comprehensive range of services and amenities, and our unwavering dedication to meeting the unique needs and preferences of each individual under our care.`,
	},
	{
		id: 3,
		header: 'What amenities and services are included in your care packages?',
		details: `Our care packages include a wide range of amenities and services aimed at enhancing the quality of life for our clients. These may include assistance with activities of daily living, medication management, housekeeping, laundry service, transportation, nutritious meals and snacks, social and recreational activities, wellness programs, and access to on-site healthcare services.`,
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
			<Box boxShadow={'lg'}>
				<section className="our-mission">
					<h2>Mission</h2>
					<div className="divider"></div>
					<article className="mission">
						<h3>
							Our mission is to provide exceptional, compassionate care that
							enables individuals to live comfortably and independently in their
							own homes. We are dedicated to enhancing the quality of life for
							our clients.
						</h3>
					</article>
				</section>
			</Box>
			<section className="our-values">
				<Box boxShadow={'lg'}>
					<article className="values">
						<h2>Our Values</h2>
						<div className="divider"></div>
						<div className="values-container">
							{values.map((value) => (
								<div
									key={value.id}
									className="single-value">
									<h3>{value.title}</h3>
									<p>{value.text}</p>
								</div>
							))}
						</div>
					</article>
				</Box>
			</section>
			<section className="our-caregivers">
				<h2>Our Caregivers</h2>
				<article className="caregivers">
					<p className="caregivers-info">
						Our caregivers are the heartbeat of our organization. Each one is
						carefully selected for their professionalism, experience, and
						compassion. We invest in continuous training and development to
						ensure our caregivers are equipped with the latest skills and
						knowledge. We put them through a rigorous selection process that
						includes extensive background checks, interviews, and training to
						ensure they meet the highest standards. We also give them continuous
						education and training programs to keep them up-to-date with the
						latest care techniques and best practices. We carefully match
						caregivers to clients based on compatibility, ensuring a harmonious
						and effective caregiver-client relationship.
					</p>
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
