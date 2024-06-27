import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center px-4 py-16">
			{/* 
				🐨 At the xl breakpoint, make the grid have 2 columns.
				The first column's width should be defined by the logo grid (auto).
				The second column should take up the remaining space (1fr).

				Make sure the gap between the columns matches the Figma design.
			*/}

			{/* 
				💰 You can use a 'grid-cols-[]' arbitrary value to achieve this! 
			*/}
			<div className="grid place-items-center gap-12 sm:gap-16">
				{/* 
					🐨 To make the text content go on the right, change the 
					'order' of the text-content (first grid cell) to '2' at the xl breakpoint.

					Adjust the 'items' and 'text' alignment to match the Figma design.
				*/}
				<div className="flex max-w-md flex-col items-center text-center">
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
