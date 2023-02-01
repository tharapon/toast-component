import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [messages, setMessages] = React.useState([]);

	const removeMessage = (id) => {
		const newMessages = messages.filter((message) => message.id !== id);
		setMessages(newMessages);
	};

	return (
		<ToastContext.Provider value={{ messages, setMessages, removeMessage }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
