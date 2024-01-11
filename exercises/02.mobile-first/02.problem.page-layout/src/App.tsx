import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		/*
			🐨 We need to wrap our entire markup inside two container divs.

			The first one is the full-page container. It needs to:
			- have at minimum the full screen height (min-h-screen) 
			- centers its children with a grid (grid place-items-center).
		*/

		/*
			🐨 Inside of that, wrap the entire markup in another 'div'. 
			This is our layout container, a common parent to both
			the logo list and the text content. 
			
			It needs to:
			- be a grid (grid) that contains two children (cells)
			- have a gap  (gap-12)
			- handle horizontal and verticall padding (see Figma)
			- center its children (place-items-center)
		*/

		<>
			{/* 
				🐨 Wrap the Logo, h1 and paragraph in a common parent 'div'.
				It will become one of the two grid cells in our layout. 
			*/}
			<EpicStackLogo className="size-20" />
			<h1>The Epic Stack</h1>
			<p>
				Check the <a href="#">Getting Started guide</a> file for how to get your
				project off the ground!
			</p>

			{/* Logo list */}
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
