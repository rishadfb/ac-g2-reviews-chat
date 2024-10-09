import ActiveCampaignLogo from "./ac-logo";

export default function Header() {
	return (
		<div className="flex flex-col gap-16 items-center">
			<div className="flex gap-8 justify-center items-center">
				<a
					href="https://www.activecampaign.com/"
					target="_blank"
					rel="noreferrer"
				>
					<ActiveCampaignLogo />
				</a>
			</div>
			<h1 className="sr-only">Supabase and Next.js Starter Template</h1>
			<p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
				Talk to a knowledge base of 4,500 customer reviews from G2.
			</p>
			<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
		</div>
	);
}
