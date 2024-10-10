"use client";

import { useChat } from "ai/react";
import { ChatIntro } from "./chat-intro";
import { ChatMessages } from "./chat-messages";

export function ReviewsChat() {
	const {
		input,
		handleInputChange,
		handleSubmit,
		isLoading,
		setInput,
		messages,
	} = useChat();
	const hasMessages = messages.length > 0;

	return (
		<div className="container mx-auto p-4 max-w-3xl">
			{hasMessages ? (
				<ChatMessages messages={messages} />
			) : (
				<ChatIntro
					input={input}
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
					setInput={setInput}
				/>
			)}
		</div>
	);
}
