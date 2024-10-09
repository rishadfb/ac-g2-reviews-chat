import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UseChatHelpers } from "ai/react";
import { ChatInput } from "./chat-input";
import { ExampleButton } from "./example-button";

interface ChatIntroProps
	extends Pick<
		UseChatHelpers,
		"input" | "handleInputChange" | "handleSubmit" | "isLoading" | "setInput"
	> {}

interface ExampleQuery {
	label: string;
	text: string;
}

const exampleQueries: ExampleQuery[] = [
	{
		label: "Most used features",
		text: "What are the most used features of our product?",
	},
	{
		label: "Customer frustration",
		text: "What are the main sources of customer frustration?",
	},
	{
		label: "Product ideas",
		text: "Can you suggest some new product ideas based on customer feedback?",
	},
];

export function ChatIntro({
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
	setInput,
}: ChatIntroProps) {
	const handleExampleClick = (text: string) => {
		setInput(text);
	};

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
						{exampleQueries.map((query) => (
							<ExampleButton
								key={query.label}
								onClick={() => handleExampleClick(query.text)}
							>
								{query.label}
							</ExampleButton>
						))}
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
