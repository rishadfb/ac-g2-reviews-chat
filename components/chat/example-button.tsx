import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ExampleButton({ children }: { children: React.ReactNode }) {
	return (
		<Button variant="link" className="text-primary p-0 h-auto font-normal">
			<ArrowRight className="mr-2 h-4 w-4" />
			{children}
		</Button>
	);
}
