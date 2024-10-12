"use client";

import { useAuthStatus } from "@/hooks/useAuthStatus";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AuthButton() {
	const user = useAuthStatus();
	const supabase = createClient();

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};

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
			<Button onClick={handleSignOut} variant="outline">
				Sign out
			</Button>
		</div>
	);
}
