"use client";

import { ReviewsChat } from "@/components/chat/reviews-chat";
import { useChat } from "ai/react";

export default function Home() {
	const chatProps = useChat();

	return <ReviewsChat {...chatProps} />;
}
