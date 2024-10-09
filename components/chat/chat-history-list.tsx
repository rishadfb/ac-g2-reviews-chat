"use client";

import { Button } from "@/components/ui/button";

// This is a placeholder for the actual chat history data
const chatHistory = [
	{ id: 1, title: "Chat 1" },
	{ id: 2, title: "Chat 2" },
	{ id: 3, title: "Chat 3" },
];

interface ChatHistoryListProps {
	onSelectChat: () => void;
}

export default function ChatHistoryList({
	onSelectChat,
}: ChatHistoryListProps) {
	return (
		<div className="flex flex-col space-y-2 mt-4">
			<h2 className="text-lg font-semibold mb-2 ml-3">Chat History</h2>
			{chatHistory.map((chat) => (
				<Button
					key={chat.id}
					variant="ghost"
					className="justify-start"
					onClick={onSelectChat}
				>
					{chat.title}
				</Button>
			))}
		</div>
	);
}
