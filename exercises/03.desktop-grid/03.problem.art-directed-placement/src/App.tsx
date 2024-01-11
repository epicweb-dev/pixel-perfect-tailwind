import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

function clsx(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

/*
	🐨 Fill the columnClasses and rowClasses objects 
	with the correct keys and Tailwind classes
*/
const columnClasses: Record<(typeof logos)[number]['column'], string> = {}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {}

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-16 px-4 py-16 xl:grid-cols-2 xl:gap-24">
				<div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
					<EpicStackLogo className="size-20 text-slate-900 xl:-mt-4" />
					<h1 className="mt-8 text-4xl font-medium text-slate-900 md:text-5xl xl:mt-4 xl:text-6xl">
						<a href="https://www.epicweb.dev/stack">The Epic Stack</a>
					</h1>
					<p className="mt-6 text-xl/7 text-slate-600 xl:mt-8 xl:text-xl/6 xl:leading-10">
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
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:mt-0 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
					{logos.map(logo => (
						// 🐨 Compose the correct columnClasses and rowClasses together
						<li key={logo.href}>
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
		</div>
	)
}
