import type { UseChatHelpers } from "ai/react";
import { ChatIntro } from "./chat-intro";
import { ChatMessages } from "./chat-messages";

export function ReviewsChat(props: UseChatHelpers) {
	const hasMessages = props.messages.length > 0;

	return (
		<div className="container mx-auto p-4 max-w-3xl">
			{hasMessages ? (
				<ChatMessages messages={props.messages} />
			) : (
				<ChatIntro
					input={props.input}
					handleInputChange={props.handleInputChange}
					handleSubmit={props.handleSubmit}
					isLoading={props.isLoading}
					setInput={props.setInput}
				/>
			)}
		</div>
	);
}
