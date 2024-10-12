"use client";

import type { Message } from "ai";
import { useChat } from "ai/react";
import { ChatContent } from "./chat-content";
import { ChatIntro } from "./chat-intro";

export function ReviewsChat({
	id,
	initialMessages,
}: {
	id: string;
	initialMessages: Message[];
}) {
	const {
		input,
		handleInputChange,
		handleSubmit,
		isLoading,
		setInput,
		messages,
	} = useChat({
		body: {
			id,
			messages: initialMessages,
		},
	});
	const hasMessages = messages.length > 0;

	return (
		<div className="flex flex-col flex-grow w-full max-w-3xl mx-auto">
			{hasMessages ? (
				<ChatContent
					messages={messages}
					input={input}
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
				/>
			) : (
				<div className="flex-grow overflow-y-auto p-4">
					<ChatIntro
						input={input}
						handleInputChange={handleInputChange}
						handleSubmit={handleSubmit}
						isLoading={isLoading}
						setInput={setInput}
					/>
				</div>
			)}
		</div>
	);
}
