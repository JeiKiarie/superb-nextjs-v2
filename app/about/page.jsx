import { Box, Button, Flex, Text } from '@chakra-ui/react';
import img1 from '../../public/images/AboutPage/SeniorCitizenExerciseClass.webp';
import aboutHeroImg from '../../public/images/pexels-kampus-7551667.jpg';
import Image from 'next/image';
import Link from 'next/link';

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
		</main>
	);
};

export default About;
