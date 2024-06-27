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
	)
}
