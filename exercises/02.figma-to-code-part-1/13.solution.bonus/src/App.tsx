import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

function clsx(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const columnClasses: Record<(typeof logos)[number]['column'], string> = {
	1: 'xl:col-start-1',
	2: 'xl:col-start-2',
	3: 'xl:col-start-3',
	4: 'xl:col-start-4',
	5: 'xl:col-start-5',
}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
	1: 'xl:row-start-1',
	2: 'xl:row-start-2',
	3: 'xl:row-start-3',
	4: 'xl:row-start-4',
	5: 'xl:row-start-5',
	6: 'xl:row-start-6',
}

export default function App() {
	return (
		<div className="font-poppins grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-16 gap-y-4 px-4 py-16 xl:max-w-[1220px] xl:grid-cols-2 xl:grid-rows-6 xl:gap-x-24">
				<div className="isolate row-span-2 flex max-w-md grid-rows-subgrid flex-col items-center text-center xl:col-start-2 xl:row-start-3 xl:grid xl:w-full xl:max-w-none xl:grid-cols-[auto,1fr] xl:items-center xl:gap-4 xl:text-left">
					<EpicStackLogo className="animate-slide-top xl:animate-slide-left size-20 text-slate-900 [animation-fill-mode:backwards] xl:[animation-delay:0.5s] xl:[animation-fill-mode:backwards]" />
					<h1 className="animate-slide-top xl:animate-slide-left mt-8 text-4xl font-medium text-slate-900 [animation-fill-mode:backwards] [animation-delay:0.3s] md:text-5xl xl:mt-0 xl:text-6xl xl:[animation-fill-mode:backwards] xl:[animation-delay:0.8s]">
						<a href="https://www.epicweb.dev/stack">The Epic Stack</a>
					</h1>
					<p className="animate-slide-top xl:animate-slide-left mt-6 text-xl/7 text-slate-600 [animation-fill-mode:backwards] [animation-delay:0.8s] xl:col-start-2 xl:mt-0 xl:[animation-fill-mode:backwards] xl:[animation-delay:1s]">
						Check the{' '}
						<a
							className="underline hover:no-underline"
							href={GETTING_STARTED_URL}
						>
							Getting Started guide
						</a>{' '}
						file for how to get your project off the ground!
					</p>
				</div>
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:row-span-6 xl:mt-0 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-subgrid">
					{logos.map((logo, i) => (
						<li
							key={logo.href}
							className={clsx(
								columnClasses[logo.column],
								rowClasses[logo.row],
								'animate-roll-reveal [animation-fill-mode:backwards]',
							)}
							style={{ animationDelay: `${i * 0.07}s` }}
						>
							<a
								href={logo.href}
								className="grid size-20 place-items-center rounded-2xl bg-violet-100 p-4 transition hover:-rotate-6 hover:bg-violet-200 sm:size-24"
							>
								<img src={logo.src} alt="" className="w-16" />
							</a>
						</li>
					))}
				</ul>

				{/* Decorative bullshit */}
			</div>
		</div>
	)
}
