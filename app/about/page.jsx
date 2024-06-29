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
		header: 'Do you offer live-in care?',
		details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
	impedit tenetur repellat. Maxime voluptatibus eius iure architecto
	debitis placeat voluptatum error vitae saepe quasi totam quidem,
	dignissimos eaque nobis vel!`,
	},
	{
		id: 2,
		header: 'How qualified are your carers?',
		details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
	impedit tenetur repellat. Maxime voluptatibus eius iure architecto
	debitis placeat voluptatum error vitae saepe quasi totam quidem,
	dignissimos eaque nobis vel!`,
	},
	{
		id: 3,
		header: 'Do I pay the carer directly?',
		details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
	impedit tenetur repellat. Maxime voluptatibus eius iure architecto
	debitis placeat voluptatum error vitae saepe quasi totam quidem,
	dignissimos eaque nobis vel!`,
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
				<h2>At Superb Care Services,</h2>
				<article className="about-info">
					<p>
						We provide reliable and affordable home health care services for
						clients across and around the South East.
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
