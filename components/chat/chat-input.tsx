import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { UseChatHelpers } from "ai/react";

export function ChatInput({
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
}: Pick<
	UseChatHelpers,
	"input" | "handleInputChange" | "handleSubmit" | "isLoading"
>) {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmit(e);
	};

	return (
		<form onSubmit={onSubmit} className="flex items-center space-x-4">
			<Input
				type="text"
				placeholder="Type your message..."
				value={input}
				onChange={handleInputChange}
				className="flex-grow px-4 py-6"
			/>
			<Button type="submit" disabled={isLoading}>
				{isLoading ? "Sending..." : "Send"}
			</Button>
		</form>
	);
}
