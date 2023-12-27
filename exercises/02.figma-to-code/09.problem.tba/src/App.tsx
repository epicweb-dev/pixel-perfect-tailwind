import { EpicStackLogo, logos } from './logos/logos'

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
		<div className="grid place-items-center px-4 py-16 xl:grid-cols-2 xl:gap-24">
			<div className="xl:order-2">
				<div className="flex max-w-md flex-col items-center text-center xl:items-start xl:text-left">
					<a
						href="https://www.epicweb.dev/stack"
						className="animate-slide-top [animation-fill-mode:backwards]"
					>
						<EpicStackLogo className="text-foreground size-20 xl:-mt-4" />
					</a>

					<h1
						data-heading
						className="animate-slide-top text-foreground mt-8 text-4xl font-medium [animation-fill-mode:backwards] [animation-delay:0.3s] md:text-5xl xl:mt-4 xl:text-6xl"
					>
						<a href="https://www.epicweb.dev/stack">The Epic Stack</a>
					</h1>
					<p
						data-paragraph
						className="animate-slide-top text-muted-foreground mt-6 text-xl/7 [animation-fill-mode:backwards] [animation-delay:0.8s] xl:mt-8 xl:text-xl/6 xl:leading-10"
					>
						Check the{' '}
						<a
							className="underline hover:no-underline"
							href="https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md"
						>
							Getting Started guide
						</a>{' '}
						file for how to get your project off the ground!
					</p>
				</div>
			</div>
			<ul className="mt-16 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:mt-0 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
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
		</div>
	)
}
