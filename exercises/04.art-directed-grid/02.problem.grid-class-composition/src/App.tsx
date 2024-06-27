import { EpicStackLogo, logos } from './logos/logos'

/*
	🧝‍♀️ I've scaffolded out some "lookup" objects we'll use
	to map Tailwind Grid column and row classes in a way
	that plays nice with Tailwind's JIT engine.
*/

/*
	🦺 The two TypeScript 'Records' below ensure that the lookup objects 
	have keys that match the possible values of the 'column' and 'row'
	properties on the 'logos' array.
*/

/*
		🐨 Remove the @ts-expect-error comment below to trigger the error
	*/
// @ts-expect-error
const columnClasses: Record<(typeof logos)[number]['column'], string> = {
	/*
		🐨 Add the required keys to satisfy the type checker, and assign 
		the correct Tailwind Grid column classes to each key.
	*/
}

/*
		🐨 Remove the @ts-expect-error comment below to trigger the error
	*/
// @ts-expect-error
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
	/*
		🐨 Add the required keys to satisfy the type checker, and assign 
		the correct Tailwind Grid row classes to each key.
	*/
}

/*
	👩‍🔬 I've also created this "mini clsx" helper function that 
	lets you combine multiple class strings together.
*/

// @ts-expect-error
function clsx(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

/*
	🧝‍♀️ Here's an example of how to use it:

	<div 
		className={clsx('some classes', 'more classnames', 'combined together')} 
	/>

	We'll use this in a few places going forward!
*/

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center px-4 py-16">
			<div className="grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24">
				<div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
					<EpicStackLogo className="size-20" />
					<h1 className="sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium md:mt-8 md:text-5xl">
						The <span className="text-highlight">Epic</span> Stack
					</h1>
					<p className="mt-4 text-slate-600 sm:text-lg md:mt-6 md:text-xl">
						Check the{' '}
						<a className="text-black underline" href="#">
							Getting Started
						</a>{' '}
						guide file for how to get your project off the ground!
					</p>
				</div>
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
					{logos.map((logo) => (
						/* 
							🐨 Compose the correct columnClasses and rowClasses together 
						*/
						/*
							💰 That's a great place to use the clsx helper function!
						*/
						<li key={logo.href}>
							<a
								href={logo.href}
								className="bg-highlight/[7%] grid size-20 place-items-center rounded-2xl p-4 sm:size-24"
							>
								<img src={logo.src} alt={logo.alt} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
