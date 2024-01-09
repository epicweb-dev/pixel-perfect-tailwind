import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<>
			<EpicStackLogo className="size-20" />
			<h1>The Epic Stack</h1>
			<p>
				Check the <a href={GETTING_STARTED_URL}>Getting Started guide</a> file
				for how to get your project off the ground!
			</p>
			<ul>
				{logos.map(logo => (
					<li key={logo.href}>
						<a href={logo.href}>
							<img src={logo.src} alt="" className="w-16" />
						</a>
					</li>
				))}
			</ul>
		</>
	)
}
