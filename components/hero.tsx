"use client";

import { useTheme } from "next-themes";
import ActiveCampaignLogoDark from "./ac-logo-dark";
import ActiveCampaignLogoLight from "./ac-logo-light";

export default function Header() {
	const { resolvedTheme } = useTheme();

	return (
		<div className="flex flex-col gap-16 items-center">
			<div className="flex gap-8 justify-center items-center">
				<a
					href="https://www.activecampaign.com/"
					target="_blank"
					rel="noreferrer"
				>
					{resolvedTheme === "dark" ? (
						<ActiveCampaignLogoDark />
					) : (
						<ActiveCampaignLogoLight />
					)}
				</a>
			</div>
			<h1 className="sr-only">ActiveCampaign G2 Reviews AI Chatbot</h1>
			<p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
				Talk to a knowledge base of{" "}
				<span className="text-purple-700 dark:text-purple-400">
					4,500 customer reviews
				</span>{" "}
				from{" "}
				<a
					href="https://www.g2.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-orange-700 dark:text-orange-400 hover:underline"
				>
					G2
				</a>
				.
			</p>
			<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
		</div>
	);
}
