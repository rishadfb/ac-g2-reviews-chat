import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatInput() {
	return (
		<div className="flex items-center space-x-2">
			<Input
				type="text"
				placeholder="Type your message..."
				className="flex-grow px-4 py-6"
			/>
			<Button type="submit">Send</Button>
		</div>
	);
}
