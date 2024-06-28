import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import img1 from '../../public/images/AboutPage/SeniorCitizenExerciseClass.webp';
import aboutHeroImg from '../../public/images/pexels-kampus-7551667.jpg';
import Image from 'next/image';

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
			<section className="about-info">
				<p>
					At Superb Care Services, we provide reliable and affordable home
					health care services across and around the South East. As your trusted
					care provider since 2018, our carer/nursing staff guarantee
					personalized attention to all your health and related needs. We care
					about all of our clients, and offer extensive care services to make
					sure they feel as comfortable as possible.
				</p>
				<div>
					<Button>
						<Link href="/contact">Contact Us</Link>
					</Button>
				</div>
			</section>
		</main>
	);
};

export default About;
