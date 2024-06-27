import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		<>
			<EpicStackLogo className="size-20" />
			{/* 
				🐨 Wrap the word "Epic" in a span, and set its text color
				to "highlight", to verify our new color works.
			*/}
			<h1>The Epic Stack</h1>
			<p>
				Check the <a href="#">Getting Started</a> guide file for how to get your
				project off the ground!
			</p>
			<ul>
				{logos.map((logo) => (
					<li key={logo.href}>
						<a href={logo.href}>
							<img src={logo.src} alt={logo.alt} className="w-16" />
						</a>
					</li>
				))}
			</ul>
		</>
	)
}
