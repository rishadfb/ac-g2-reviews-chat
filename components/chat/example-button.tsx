import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ExampleButton({
	children,
	onClick,
}: { children: React.ReactNode; onClick: () => void }) {
	return (
		<Button
			variant="link"
			className="text-primary p-0 h-auto font-normal"
			onClick={onClick}
		>
			<ArrowRight className="mr-2 h-4 w-4" />
			{children}
		</Button>
	);
}
