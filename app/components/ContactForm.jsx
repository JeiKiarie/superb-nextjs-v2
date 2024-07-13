'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');

	function submit(e) {
		// This will prevent page refresh
		e.preventDefault();

		// replace this with your own unique endpoint URL
		fetch('https://formcarry.com/s/XXXXXXX', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				message: message,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.code === 200) {
					setSubmitted(true);
				} else {
					setError(res.message);
				}
			})
			.catch((error) => setError(error));
	}

	if (error) {
		return <p>{error}</p>;
	}

	if (submitted) {
		return <p>We've received your message, thank you for contacting us!</p>;
	}

	return (
		<article className="form">
			<div className="contact-form">
				<div className="form-container">
					<form onSubmit={submit}>
						<div>
							<div className="first-name">
								<label htmlFor="firstName">First Nam</label>
								<input
									id="firstName"
									type="text"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
							</div>
							<div className="last-name">
								<label htmlFor="lastName">Last Name</label>
								<input
									id="lastName"
									type="text"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
							<div className="email">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="message">
								<label htmlFor="message">M</label>
								<textarea
									id="message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="btn submit-button">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</article>
	);
}
