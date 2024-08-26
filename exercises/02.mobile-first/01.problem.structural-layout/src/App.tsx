import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		<div className="font-poppins grid min-h-dvh place-items-center px-4 py-16">
			<div className="grid place-items-center gap-12">
				<div>
					<div>
						<EpicStackLogo className="size-20" />
						<h1>
							The{' '}
							<span className="text-highlight text-4xl font-medium">Epic</span>{' '}
							Stack
						</h1>
					</div>
					<p>
						Check the <a href="#">Getting Started</a> guide file for how to get
						your project off the ground!
					</p>
				</div>
				<div>
					{/* Logo list */}
					<ul>
						{logos.map((logo) => (
							<li key={logo.href}>
								<a href={logo.href}>
									<img src={logo.src} alt={logo.alt} className="w-16" />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
