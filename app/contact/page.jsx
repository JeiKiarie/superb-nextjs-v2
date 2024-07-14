import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import contactImg from '@public/images/pexels-jsme-mila-523821574-18429371.webp';
import ContactForm from '@app/components/ContactForm';
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
					<Text as={'h1'}>Reach out to us.</Text>
					<Text as={'h3'}>
						We would love to hear from you! Please take a moment and fill in the
						form. We will contact you immediately.
					</Text>
				</Box>
			</Box>
			<Flex
				justifyContent={'space-between'}
				as={'article'}
				className="section-center contact-address">
				<Flex
					flexDirection={'column'}
					gap={'2rem'}
					flexBasis={'50%'}>
					<Box>
						<Text as={'h3'}>Office</Text>
					</Box>

					<Flex
						fontSize={'1.5rem'}
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
						fontSize={'1.5rem'}
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
						fontSize={'1.5rem'}
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

			{/*  */}
		</main>
	);
};

export default Contact;
