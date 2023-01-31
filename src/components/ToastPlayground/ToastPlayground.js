import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [variant, setVariant] = React.useState('notice');
	const [message, setMessage] = React.useState('');
	const [pop, setPop] = React.useState(false);

	const handleClick = () => {
		setPop(true);
		console.log({ variant, message });
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			{pop && (
				<Toast variant={variant} setPop={setPop}>
					{message}
				</Toast>
			)}

			<div className={styles.controlsWrapper}>
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
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => (
							<label htmlFor={`variant-${option}`} key={option}>
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
						<Button onClick={handleClick}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
