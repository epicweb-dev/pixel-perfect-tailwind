export default function App() {
	return (
		<div className="aspect-[3/4] w-[25rem] overflow-hidden rounded-xl bg-gradient-to-br from-rose-600 via-orange-500 to-yellow-400 p-8 shadow-2xl">
			{/* 
				🐨 Create a decorative "bubble" covering the bottom-right portion of the card
				and sitting behind the content (but in front of the card's background).
			*/}

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
