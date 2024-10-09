interface ChatHistoryDisplayProps {
	chatId: number;
}

export function ChatHistoryDisplay({ chatId }: ChatHistoryDisplayProps) {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Chat History {chatId}</h2>
			<p>This is where the chat history for chat {chatId} will be displayed.</p>
		</div>
	);
}
