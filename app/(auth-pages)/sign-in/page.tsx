import { signInWithGoogleAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
	return (
		<div className="flex-1 flex flex-col min-w-64">
			<h1 className="text-2xl font-medium">Sign in</h1>
			<p className="text-sm text-foreground">
				Don't have an account?{" "}
				<Link className="text-foreground font-medium underline" href="/sign-up">
					Sign up
				</Link>
			</p>
			<div className="flex flex-col gap-2 mt-8">
				<form action={signInWithGoogleAction}>
					<SubmitButton className="w-full">Sign in with Google</SubmitButton>
				</form>
				<FormMessage message={searchParams} />
			</div>
		</div>
	);
}
