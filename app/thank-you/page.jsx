import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const ThankYou = () => {
	return (
		<Box
			variant="section"
			sx={{
				width: '100%',
				height: '30vh',
				marginTop: '5rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '2rem',
				backgroundColor: '#f9f8fa',
			}}>
			<Box
				variant="article"
				sx={{ maxWidth: '900px', textAlign: 'center' }}>
				<Typography variant="p">
					Thank you. Your form has been submitted. We will be contacting you as
					soon as possible.
				</Typography>
			</Box>
		</Box>
	);
};

export default ThankYou;
