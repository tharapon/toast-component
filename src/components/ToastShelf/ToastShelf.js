import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ messages, removeMessage }) {
	return (
		<ol className={styles.wrapper}>
			{messages.map((message) => (
				<li className={styles.toastWrapper} key={message.id}>
					<Toast
						id={message.id}
						variant={message.variant}
						removeMessage={removeMessage}>
						{message.content}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
