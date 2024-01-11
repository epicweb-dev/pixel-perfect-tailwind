import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-12 px-4 py-16">
				<div>
					<EpicStackLogo className="size-20" />
					<h1>The Epic Stack</h1>
					<p>
						Check the <a href={GETTING_STARTED_URL}>Getting Started guide</a>{' '}
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
