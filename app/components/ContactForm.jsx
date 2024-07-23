'use client';

import { Box, Flex } from '@chakra-ui/react';
import { permanentRedirect, redirect } from 'next/navigation';
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
		fetch('https://formcarry.com/s/y3E1LMY9xUR', {
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
		// return <p>We have received your message, thank you for contacting us!</p>;
		// redirect('/thank-you');
		permanentRedirect('/thank-you');
	}

	return (
		<article className="contact-form">
			{/* <div className="contact-form"> */}
			<div className="form-container">
				<form onSubmit={submit}>
					<Flex
						paddingTop={'0.5rem'}
						paddingBottom={'1rem'}
						flexDirection={'column'}>
						<div
							// justifyContent={'space-between'}
							className="first-name">
							<label htmlFor="firstName">First Name</label>
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
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								cols="33"
								rows="5"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>

						<button
							type="submit"
							className="btn submit-button">
							Submit
						</button>
					</Flex>
				</form>
			</div>
			{/* </div> */}
		</article>
	);
}

// import React, { useState } from 'react';

// export default function BasicForm() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const [error, setError] = useState('')

//   function onSubmit(e){
//     e.preventDefault();
//     e.stopPropagation();

//     fetch("https://formcarry.com/s/KuGyPt0Ynz8", {
//       method: 'POST',
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ name, email, message })
//     })
//     .then(response => response.json())
//     .then(response => {
//       if (response.code === 200) {
//         alert("We received your submission, thank you!");
//       }
//       else if(response.code === 422){
//         // Field validation failed
//         setError(response.message)
//       }
//       else {
//         // other error from formcarry
//         setError(response.message)
//       }
//     })
//     .catch(error => {
//       // request related error.
//       setError(error.message ? error.message : error);
//     });
//   }

//   return (
//     <form onSubmit={(e) => onSubmit(e)}>

//       <div className="formcarry-block">
//         <label htmlFor="name">Full Name</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
//       </div>

//       <div className="formcarry-block">
//         <label htmlFor="email">Your Email Address</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
//       </div>

//       <div className="formcarry-block">
//         <label htmlFor="message">Your message</label>
//         <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
//       </div>

//       <div className="formcarry-block">
//         <button type="submit">Send</button>
//       </div>
//     </form>
//   )
// }
