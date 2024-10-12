import { ReviewsChat } from "@/components/chat/reviews-chat";

import { generateUUID } from "@/lib/utils";

export default async function ChatPage() {
	const id = generateUUID();
	return <ReviewsChat id={id} initialMessages={[]} />;
}
