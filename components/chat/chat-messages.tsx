import type { Message } from "ai";

export function ChatMessages({ messages }: { messages: Message[] }) {
	return (
		<div className="space-y-4">
			{messages.map((message) => (
				<div
					key={message.id}
					className={`p-4 rounded-lg ${
						message.role === "user" ? "bg-blue-100" : "bg-gray-100"
					}`}
				>
					<p className="font-semibold">
						{message.role === "user" ? "You" : "AI"}:
					</p>
					<p>{message.content}</p>
				</div>
			))}
		</div>
	);
}
