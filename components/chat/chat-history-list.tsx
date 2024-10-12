"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSWR from "swr";

interface ChatHistoryItem {
	id: string;
	payload: {
		messages: Array<{ content: string }>;
	};
}

interface ChatHistoryListProps {
	onSelectChat: (id: string) => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ChatHistoryList({
	onSelectChat,
}: ChatHistoryListProps) {
	const { data: chatHistory, error } = useSWR<ChatHistoryItem[]>(
		"/api/chat/history",
		fetcher,
	);

	if (error) {
		return <div>Failed to load chat history</div>;
	}

	if (!chatHistory) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col space-y-2 mt-4">
			<h2 className="text-lg font-semibold mb-2 ml-3">Chat History</h2>
			{chatHistory.map((chat) => (
				<Button
					key={chat.id}
					variant="ghost"
					className="justify-start"
					onClick={() => onSelectChat(chat.id)}
				>
					<Link href={`/chat/${chat.id}`}>{chat.id}</Link>
				</Button>
			))}
		</div>
	);
}
