import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center px-4 py-16">
			<div className="grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24">
				<div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
					<EpicStackLogo className="size-20" />
					<h1 className="sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium md:mt-8 md:text-5xl">
						The <span className="text-highlight">Epic</span> Stack
					</h1>
					<p className="mt-4 text-slate-600 sm:text-lg md:mt-6 md:text-xl">
						Check the{' '}
						<a className="text-black underline" href="#">
							Getting Started
						</a>{' '}
						guide file for how to get your project off the ground!
					</p>
				</div>
				{/* 
					🐨 At the xl breakpoint, make the logo list a structured grid with 5 columns and 6 rows. The grid should flow from top to bottom, left to right.
				*/}
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4">
					{logos.map((logo) => (
						<li key={logo.href}>
							<a
								href={logo.href}
								className="bg-highlight/[7%] grid size-20 place-items-center rounded-2xl p-4 sm:size-24"
							>
								<img src={logo.src} alt={logo.alt} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
