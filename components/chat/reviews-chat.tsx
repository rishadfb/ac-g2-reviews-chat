"use client";

import { useChat } from "ai/react";
import { ChatContent } from "./chat-content";

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
		<div className="flex flex-col flex-grow w-full max-w-3xl mx-auto">
			{/* {hasMessages ? (
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
			)} */}
			<ChatContent
				messages={messages}
				input={input}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				isLoading={isLoading}
			/>
		</div>
	);
}
