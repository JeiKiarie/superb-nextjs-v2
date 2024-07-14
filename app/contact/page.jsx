import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import contactImg from '@public/images/pexels-jsme-mila-523821574-18429371.webp';
import ContactForm from '@app/components/ContactForm';
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import EmailIcon from '@mui/icons-material/Email';
import { BiEnvelope } from 'react-icons/bi';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { PiBuildingOfficeFill } from 'react-icons/pi';

const Contact = () => {
	return (
		<main>
			<Box
				as="section"
				className="contact-hero">
				<Image
					className="contact-image"
					// layout="responsive"
					width={1000}
					height={1000}
					src={contactImg}
					alt=""
				/>
			</Box>
			<Box as="section">
				<Box
					className="section-title"
					color={'#fff'}
					bgColor={'#cca6c8'}
					paddingBlock={'1.5rem'}
					paddingInline={'2rem'}>
					<Box
						maxWidth={'1440px'}
						marginInline={'auto'}>
						<Text as={'h1'}>Reach out to us.</Text>
						<Text as={'h3'}>
							We would love to hear from you! Please take a moment and fill in
							the form. We will contact you immediately.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				as="section"
				bgColor={'#f9f8fa'}>
				<Flex
					padding={'2rem'}
					maxWidth={'1440px'}
					marginInline={'auto'}
					justifyContent={'space-between'}
					as={'article'}
					className="contact-address">
					<Flex
						flexDirection={'column'}
						gap={'2rem'}
						flexBasis={'50%'}>
						<Box>
							<Text as={'h3'}>Office</Text>
						</Box>

						<Flex
							fontSize={'2rem'}
							gap={'1rem'}
							alignItems={'center'}>
							<Text
								as={'i'}
								color={'#cca6c8'}>
								<i>{<PiBuildingOfficeFill />}</i>
							</Text>
							<p>Office Hours: 09.00 - 17.00 hours</p>
						</Flex>
						<Flex
							fontSize={'2rem'}
							gap={'1rem'}
							alignItems={'center'}>
							<Text
								as={'i'}
								color={'#cca6c8'}>
								<i>{<FaLocationDot />}</i>
							</Text>
							<p>Castle Hill House, 12 Castle Hill, Windsor, SL4 1PD</p>
						</Flex>
						<Flex
							fontSize={'2rem'}
							gap={'1rem'}
							alignItems={'center'}>
							<Text
								as={'i'}
								color={'#cca6c8'}>
								<i>{<FaPhoneVolume />}</i>
							</Text>
							<p>+44 7984 885069</p>
						</Flex>

						<Flex
							fontSize={'2rem'}
							gap={'1rem'}
							alignItems={'center'}>
							<Text
								as={'i'}
								color={'#cca6c8'}>
								<i>{<FaEnvelope />}</i>
							</Text>
							<p>info@superbcareservices.co.uk</p>
						</Flex>
					</Flex>
					<Box flexBasis={'50%'}>
						<ContactForm />
					</Box>
				</Flex>
			</Box>
			{/*  */}
		</main>
	);
};

export default Contact;
