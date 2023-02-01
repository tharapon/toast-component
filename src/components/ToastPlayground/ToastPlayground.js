import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [variant, setVariant] = React.useState('notice');
	const [content, setContent] = React.useState('');
	const [messages, setMessages] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const newMessage = { variant, content, id: crypto.randomUUID() };
		setMessages([...messages, newMessage]);
	};

	const removeMessage = (id) => {
		const newMessages = messages.filter((message) => message.id !== id);
		setMessages(newMessages);
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			{messages.length > 0 && (
				<ToastShelf messages={messages} removeMessage={removeMessage} />
			)}

			<div className={styles.controlsWrapper}>
				<form onSubmit={handleSubmit}>
					<div className={styles.row}>
						<label
							htmlFor='message'
							className={styles.label}
							style={{ alignSelf: 'baseline' }}>
							Message
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id='message'
								className={styles.messageInput}
								value={content}
								onChange={(event) =>
									setContent(event.target.value)
								}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label}>Variant</div>
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							{VARIANT_OPTIONS.map((option) => (
								<label
									htmlFor={`variant-${option}`}
									key={option}>
									<input
										id={`variant-${option}`}
										type='radio'
										name='variant'
										value={option}
										checked={option === variant}
										onChange={(event) =>
											setVariant(event.target.value)
										}
									/>
									{option}
								</label>
							))}

							{/* TODO Other Variant radio buttons here */}
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label} />
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							<Button>Pop Toast!</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ToastPlayground;
