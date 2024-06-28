import { Box, Button, Flex, Text } from '@chakra-ui/react';
import img1 from '../../public/images/AboutPage/SeniorCitizenExerciseClass.webp';
import aboutHeroImg from '../../public/images/pexels-kampus-7551667.jpg';
import Image from 'next/image';
import Link from 'next/link';
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md';
import { ExpandMore } from '@mui/icons-material';
// import { MdExpandMore } from 'react-icons/md';

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
					<Accordion
						className="accordion"
						slotProps={{ transition: { unmountOnExit: true } }}>
						<AccordionSummary
							expandIcon={<ExpandMore sx={{ fontSize: '3rem' }} />}
							sx={{}}
							className="accordion-summary">
							<Typography variant="h4">Do you offer live-in care?</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{}}>
							<Typography
								variant="p"
								className="accordion-details">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Voluptates impedit tenetur repellat. Maxime voluptatibus eius
								iure architecto debitis placeat voluptatum error, vitae saepe,
								quasi totam quidem, dignissimos eaque nobis vel!
							</Typography>
						</AccordionDetails>
						{/* <AccordionActions></AccordionActions> */}
					</Accordion>
					<Accordion
						className="accordion"
						slotProps={{ transition: { unmountOnExit: true } }}>
						<AccordionSummary
							expandIcon={<ExpandMore sx={{ fontSize: '3rem' }} />}
							sx={{}}
							className="accordion-summary">
							<Typography variant="h4">
								How qualified are your carers?
							</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{}}>
							<Typography
								variant="p"
								className="accordion-details">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Voluptates impedit tenetur repellat. Maxime voluptatibus eius
								iure architecto debitis placeat voluptatum error, vitae saepe,
								quasi totam quidem, dignissimos eaque nobis vel!
							</Typography>
						</AccordionDetails>
						{/* <AccordionActions></AccordionActions> */}
					</Accordion>
					<Accordion
						className="accordion"
						slotProps={{ transition: { unmountOnExit: true } }}>
						<AccordionSummary
							expandIcon={<ExpandMore sx={{ fontSize: '3rem' }} />}
							sx={{}}
							className="accordion-summary">
							<Typography variant="h4">Do I pay the carer directly?</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{}}>
							<Typography
								variant="p"
								className="accordion-details">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Voluptates impedit tenetur repellat. Maxime voluptatibus eius
								iure architecto debitis placeat voluptatum error, vitae saepe,
								quasi totam quidem, dignissimos eaque nobis vel!
							</Typography>
						</AccordionDetails>
						{/* <AccordionActions></AccordionActions> */}
					</Accordion>
				</div>
			</section>
		</main>
	);
};

export default About;
