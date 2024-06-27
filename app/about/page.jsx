import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import img1 from '../../public/images/AboutPage/SeniorCitizenExerciseClass.webp';

const About = () => {
	return (
		<Flex
			className="about-hero"
			as="section"
			// bg={'#cca6c8'}
			height={'calc(100vh - 9rem)'}
			marginTop={'9rem'}
			marginBottom={'2rem'}
			justifyContent={'flex-end'}
			alignItems={'center'}>
			<Flex
				// justifyContent={'flex-end'}
				// alignItems={'flex-end'}
				flexBasis={'40%'}
				paddingRight={'2rem'}
				flexDirection={'column'}>
				<Text
					as={'p'}
					// fontSize={'1.5rem'}
					marginBottom={'2rem'}>
					At Superb Care Services, we provide reliable and affordable home
					health care services across and around the South East. As your trusted
					care provider since 2018, our carer/nursing staff guarantee
					personalized attention to all your health and related needs. We care
					about all of our clients, and offer extensive care services to make
					sure they feel as comfortable as possible.
				</Text>
				<Button
					bg={'#fff'}
					color={'#cca6c8'}
					width={'25%'}
					zIndex={1}>
					<Link href="/contact">Contact Us</Link>
				</Button>
			</Flex>
			{/* <Image
				src={img1}
				flexBasis="35%"
				objectFit={'cover'}
				objectPosition={'center'}
				borderRadius={'50%'}
				alt=""></Image> */}
		</Flex>
	);
};

export default About;
