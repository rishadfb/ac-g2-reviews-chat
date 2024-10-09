import type { Message } from "ai";

export function ChatMessages({ messages }: { messages: Message[] }) {
	return (
		<div className="space-y-4">
			{messages.map((message) => (
				<div key={message.id} className="text-left">
					<p>{message.content}</p>
				</div>
			))}
		</div>
	);
}
