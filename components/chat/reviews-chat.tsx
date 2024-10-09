import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatInput } from "./chat-input";
import { ExampleButton } from "./example-button";

export function ReviewsChat() {
	return (
		<div className="container mx-auto p-4 max-w-3xl">
			<Card className="bg-background text-foreground">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						Welcome to the ActiveCampaign G2 Reviews AI Chatbot!
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground mb-6">
						Talk to a knowledge base of 4,500 customer reviews from G2.
					</p>
					<p className="mb-4">
						You can start a conversation here or try the following examples:
					</p>
					<div className="flex flex-col gap-2 items-start">
						<ExampleButton>Find most used features</ExampleButton>
						<ExampleButton>Understand customer frustration</ExampleButton>
						<ExampleButton>Product ideas</ExampleButton>
					</div>
				</CardContent>
			</Card>
			<div className="mt-8">
				<ChatInput />
			</div>
		</div>
	);
}
