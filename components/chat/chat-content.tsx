import type { ChatRequestOptions, Message } from "ai";
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
	return (
		<>
			<div className="flex-grow overflow-y-auto p-4">
				<ChatMessages messages={messages} />
			</div>
			<div className="p-4 border-t">
				<ChatInput
					input={input}
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
				/>
			</div>
		</>
	);
}
