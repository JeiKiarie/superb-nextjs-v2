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
					width={'auto'}
					height={'auto'}
					src={contactImg}
					alt=""
				/>
			</Box>
			<Box as="section">
				<Box
					className="section-title"
					// color={'#fff'}
					// bgColor={'#cca6c8'}
					// paddingBlock={'1.5rem'}
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
				className="contact-container"
				bgColor={'#f9f8fa'}>
				<Flex
					padding={'2rem'}
					maxWidth={'1440px'}
					marginInline={'auto'}
					justifyContent={'space-between'}
					as={'article'}
					className="contact-address">
					<Flex
						className="office-address"
						flexDirection={'column'}
						gap={'2rem'}
						// flexBasis={'50%'}
					>
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
					<Box
						className="form"
						// flexBasis={'50%'}
					>
						<ContactForm />
					</Box>
				</Flex>
			</Box>
			<Box as="section">
				<Box
					as="article"
					className="map"
					height={'600px'}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.665846005358!2d-0.609198124191054!3d51.48264761251231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae4a576aaab%3A0x3551638a20b9030a!2sCastle%20Hill%20House!5e0!3m2!1sen!2ske!4v1720967565567!5m2!1sen!2ske"
						width="100%"
						height="100%"
						// style="border:0;"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</Box>
			</Box>
			{/*  */}
		</main>
	);
};

export default Contact;
