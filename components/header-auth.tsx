"use client";

import { signOutAction } from "@/app/actions";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AuthButton() {
	const user = useAuthStatus();

	if (!user) {
		return (
			<div className="flex gap-2">
				<Button asChild size="sm" variant="outline">
					<Link href="/sign-in">Sign in</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="flex items-center gap-4">
			Hey, {user.user_metadata.full_name || user.email}!
			<form action={signOutAction}>
				<Button type="submit" variant="outline">
					Sign out
				</Button>
			</form>
		</div>
	);
}
