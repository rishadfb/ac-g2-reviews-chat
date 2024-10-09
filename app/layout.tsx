import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "ActiveCampaign G2 Reviews AI Chatbot",
	description: "Talk to a knowledge base of 4,500 customer reviews from G2.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<body className="bg-background text-foreground flex flex-col min-h-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="w-full border-b border-b-foreground/10">
						<nav className="w-full flex justify-center h-16">
							<div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
								<div className="flex gap-5 items-center font-semibold">
									<Link href={"/"}>AC G2 Reviews Chatbot</Link>
								</div>
								{!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
							</div>
						</nav>
					</header>
					<main className="flex-grow w-full flex flex-col items-center">
						<div className="w-full max-w-5xl flex flex-col gap-20 items-center p-5 py-16">
							{children}
						</div>
					</main>
					<footer className="w-full border-t">
						<div className="w-full max-w-5xl mx-auto flex items-center justify-center gap-8 py-4 text-center text-xs">
							<p>
								Powered by{" "}
								<a
									href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
									target="_blank"
									className="font-bold hover:underline"
									rel="noreferrer"
								>
									Supabase
								</a>
							</p>
							<ThemeSwitcher />
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
