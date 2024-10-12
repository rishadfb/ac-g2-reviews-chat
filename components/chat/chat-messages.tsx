import type { Message } from "ai";

export function ChatMessages({ messages }: { messages: Message[] }) {
	return (
		<div className="max-h-96 overflow-y-auto space-y-4">
			{messages.map((message) => (
				<div
					key={message.id}
					className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
				>
					<div
						className={`max-w-[70%] rounded-lg p-3 ${
							message.role === "user"
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-800"
						}`}
					>
						<p>{message.content}</p>
					</div>
				</div>
			))}
		</div>
	);
}
