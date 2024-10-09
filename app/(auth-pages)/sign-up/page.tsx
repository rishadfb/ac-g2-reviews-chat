import { signInWithGoogleAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";

export default function Signup({ searchParams }: { searchParams: Message }) {
	return (
		<div className="flex-1 flex flex-col min-w-64">
			<h1 className="text-2xl font-medium">Sign up</h1>
			<p className="text-sm text-foreground">
				Already have an account?{" "}
				<Link className="text-primary font-medium underline" href="/sign-in">
					Sign in
				</Link>
			</p>
			<div className="flex flex-col gap-2 mt-8">
				<form action={signInWithGoogleAction}>
					<SubmitButton className="w-full">Sign up with Google</SubmitButton>
				</form>
				<FormMessage message={searchParams} />
			</div>
		</div>
	);
}
