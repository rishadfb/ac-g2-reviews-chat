import { ReviewsChat } from "@/components/chat/reviews-chat";
import { getChatById } from "@/db/queries";

export default async function ChatPage({ params }: { params: { id: string } }) {
	const { id } = params;
	const chat = await getChatById(id);

	return <ReviewsChat id={id} initialMessages={chat?.messages} />;
}
