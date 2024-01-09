import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-16 px-4 py-16 xl:grid-cols-2">
				<div className="flex max-w-md flex-col items-center text-center">
					<EpicStackLogo className="size-20 text-slate-900" />
					<h1 className="mt-8 text-4xl font-medium text-slate-900">
						<a href="https://www.epicweb.dev/stack">The Epic Stack</a>
					</h1>
					<p className="mt-6 text-xl/7 text-slate-600">
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
				<ul>
					{logos.map(logo => (
						<li key={logo.href}>
							<a href={logo.href}>
								<img src={logo.src} alt="" className="w-16" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
