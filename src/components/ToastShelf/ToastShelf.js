import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
	const { messages } = React.useContext(ToastContext);
	return (
		<ol
			className={styles.wrapper}
			role='region'
			aria-live='assertive'
			aria-label='Notification'>
			{messages.map((message) => (
				<li className={styles.toastWrapper} key={message.id}>
					<Toast id={message.id} variant={message.variant}>
						{message.content}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
