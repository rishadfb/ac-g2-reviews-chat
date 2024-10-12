import type { ChatRequestOptions, Message } from "ai";
import { useEffect, useRef } from "react";
import { ChatInput } from "./chat-input";
import { ChatMessages } from "./chat-messages";

interface ChatContentProps {
	messages: Message[];
	input: string;
	handleInputChange: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
	handleSubmit: (
		event?: {
			preventDefault?: () => void;
		},
		chatRequestOptions?: ChatRequestOptions,
	) => void;
	isLoading: boolean;
}

export function ChatContent({
	messages,
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
}: ChatContentProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className="flex-grow flex flex-col h-full space-y-8">
			<div
				className="flex-grow h-96 overflow-y-auto p-4"
				style={{
					msOverflowStyle: "none",
					scrollbarWidth: "none",
				}}
			>
				<ChatMessages messages={messages} />
				<div ref={messagesEndRef} />
			</div>
			<div className="p-4">
				<ChatInput
					input={input}
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
