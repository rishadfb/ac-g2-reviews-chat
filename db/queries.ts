import { createClient } from "@/utils/supabase/server";
import type { CoreMessage } from "ai";

export async function saveChat({
	id,
	userId,
	messages,
}: {
	id: string;
	userId: string;
	messages: CoreMessage[];
}) {
	const supabase = createClient();

	const { error } = await supabase
		.from("chats")
		.upsert({ id, user_id: userId, payload: { messages } });

	if (error) {
		console.error("Failed to save chat:", error);
		throw error;
	}
}

export async function getChatById(id: string) {
	const supabase = createClient();

	const { data, error } = await supabase
		.from("chats")
		.select("payload")
		.eq("id", id)
		.single();

	if (error) {
		console.error("Failed to get chat:", error);
		throw error;
	}

	return data?.payload;
}

export async function getChatsByUserId(userId: string) {
	const supabase = createClient();

	const { data, error } = await supabase
		.from("chats")
		.select("id, payload")
		.eq("user_id", userId)
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Failed to get chats by user:", error);
		throw error;
	}

	return data;
}
