import React from 'react';
import emailjs from 'emailjs-com';
import './App.css';
export default function ContactUs() {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm('service_c90kaxl',
			'template_ysqszan',
			e.target, 
			'user_r0T0rmoUoznwcKTSljU9S')
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
			
	};

	return (
		<form className="form contact-form" onSubmit={sendEmail}>
			<h1>Contact form here</h1>

			<label>Name</label>
			<input type="text" name="name" placeholder="name" />

			<label>Email</label>
			<input type="email" name="email" placeholder="email" />

			<label>Message</label>
			<textarea name="message" placeholder="message" />

			<button type="submit" value="send">Send Message</button>
		</form>
	);
}
