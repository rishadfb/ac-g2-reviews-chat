import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function ChatInput() {
	return (
		<div className="flex items-center space-x-2">
			<Button size="icon" variant="outline">
				<span className="text-2xl">+</span>
			</Button>
			<Input placeholder="Send a message." className="flex-grow" />
			<Button size="icon" variant="outline">
				<ArrowRight className="h-4 w-4" />
			</Button>
		</div>
	);
}
