import { Box, Flex, Text } from '@chakra-ui/react';

const Contact = () => {
	return (
		<Box
			as="section"
			height={'calc(100vh - 9rem)'}
			marginTop={'9rem'}>
			<Text as={'h1'}>
				We would love to hear from you! Please fill in the form and we will
				contact you immediately.
			</Text>
			<Flex as={'article'}>
				<Flex flexDirection={'column'}>
					<Box>
						<Text as={'h2'}>Contact</Text>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Contact;
