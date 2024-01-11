import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-12 px-4 py-16">
				{/*
					🐨
						Set a max-width of 'md' on the wrapping div below.
						Center the elements horizontally:
					- Setup a veritcal flexbox container with 'flex flex-col'
					- Align the items horizontally with 'items-center'
					- Center the children text elements with 'text-center'
				*/}
				<div>
					<EpicStackLogo className="size-20" />
					{/*
						🐨 Apply the correct font size, weight and spacing to the h1.
					*/}
					<h1>
						{/*
							🐨 Wrap the word "Epic" in a span, and set the 
							text-color of this span to 'highlight'.
						*/}
						The Epic Stack
					</h1>

					{/*
						🐨 Apply the correct spacing and color to the paragraph.
					*/}
					<p>
						{/*
							🐨 Apply the correct text color and decoration to the link.
							Don't worry about the hover state for now.
						*/}
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
