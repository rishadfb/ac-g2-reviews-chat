import { signInWithGoogleAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";

export default function Login({ searchParams }: { searchParams: Message }) {
	return (
		<div className="flex-1 flex flex-col min-w-64">
			<div className="flex flex-col gap-2 mt-8">
				<form action={signInWithGoogleAction}>
					<SubmitButton className="w-full">Sign in with Google</SubmitButton>
				</form>
				<p className="text-xs text-muted-foreground mt-2">
					Note: This is not SSO. You will be redirected to Google.
				</p>
				<FormMessage message={searchParams} />
			</div>
		</div>
	);
}
