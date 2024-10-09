import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UseChatHelpers } from "ai/react";
import { ChatInput } from "./chat-input";
import { ExampleButton } from "./example-button";

interface ChatIntroProps
	extends Pick<
		UseChatHelpers,
		"input" | "handleInputChange" | "handleSubmit" | "isLoading"
	> {}

export function ChatIntro({
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
}: ChatIntroProps) {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						Start a conversation here or try the following examples:
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-2 items-start">
						<ExampleButton>Find most used features</ExampleButton>
						<ExampleButton>Understand customer frustration</ExampleButton>
						<ExampleButton>Product ideas</ExampleButton>
					</div>
				</CardContent>
			</Card>
			<div className="mt-8">
				<ChatInput
					input={input}
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
				/>
			</div>
		</>
	);
}
