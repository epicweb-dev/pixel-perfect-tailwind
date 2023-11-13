export default function App() {
	return (
		<div className="relative aspect-[3/4] w-[25rem] overflow-hidden rounded-xl bg-gradient-to-br from-rose-600 via-orange-500 to-yellow-400 p-8 shadow-2xl">
			{/* Decorative bubble */}
			<div
				aria-hidden="true"
				className="absolute bottom-[-15%] right-[-35%] aspect-square w-[98%] rounded-full bg-gradient-to-br from-yellow-300/50 to-rose-500 to-80% shadow-2xl ring-1 ring-black/5"
			></div>

			{/* Content */}
			<div className="flex h-full flex-col items-start justify-between">
				<header>
					<p className="font-medium uppercase tracking-widest text-white/60">
						Report
					</p>
					<h1 className="mt-2 grid text-4xl font-extrabold leading-tight text-white">
						<span>Design Report —</span>
						<span>May 2018 </span>
					</h1>
				</header>
				<a
					className="rounded-lg bg-white px-6 py-2.5 text-lg font-semibold text-orange-600 shadow-md saturate-50 transition-shadow hover:shadow-lg"
					href="#"
				>
					Read article
				</a>
			</div>
		</div>
	)
}
