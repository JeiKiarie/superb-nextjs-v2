'use client';
import { Box } from '@chakra-ui/react';
import { ExpandMore } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

const AccordionComponent = ({ accordions, header, details }) => {
	// const [accordion, setAccordion] = useState('');
	return (
		<Box
			boxShadow={'md'}
			padding={'1rem'}>
			<Accordion
				// expanded={accordion === accordions.header}
				// onChange={() => setAccordion(accordions.header)}
				className="accordion"
				slotProps={{ transition: { unmountOnExit: true } }}>
				<AccordionSummary
					expandIcon={<ExpandMore sx={{ fontSize: '3rem' }} />}
					className="accordion-summary">
					<Typography
						variant="h4"
						fontWeight={'bold'}>
						{header}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						variant="p"
						className="accordion-details">
						{details}
					</Typography>
				</AccordionDetails>
				{/* <AccordionActions></AccordionActions> */}
			</Accordion>
		</Box>
	);
};

export default AccordionComponent;
