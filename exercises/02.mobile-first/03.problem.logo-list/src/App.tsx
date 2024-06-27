import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center px-4 py-16">
			<div className="grid place-items-center gap-12">
				<div className="flex max-w-md flex-col items-center text-center">
					<EpicStackLogo className="size-20" />
					<h1 className="mt-6 text-4xl font-medium">
						The <span className="text-highlight">Epic</span> Stack
					</h1>
					<p className="mt-4 text-slate-600">
						Check the{' '}
						<a className="text-black underline" href="#">
							Getting Started
						</a>{' '}
						guide file for how to get your project off the ground!
					</p>
				</div>
				<ul
				/*  
					🐨 Turn this 'ul' into a Flex wrapper. It should:
					- wrap items (flex-wrap)
					- center-align items (justify-content)
					- have a level 2 gap between items (gap)
					- have a 3xl max-width container
				*/
				>
					{logos.map((logo) => (
						<li key={logo.href}>
							<a
								href={logo.href}
								/*  
									🐨 Apply the logo tile styles on this 'a' element,
									based on the Figma design.
									Pay attention to the size, background opacity, 
									border-radius and all!
								*/

								/* 
									💰 To center the logo inside the tile, you can use: 
										'grid place-items-center'
								*/
							>
								<img
									src={logo.src}
									alt=""
									/*  
									🐨 Once you've styled the tiles, remove the w-16 class!
								*/
									className="w-16"
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
