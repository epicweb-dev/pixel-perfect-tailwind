export default function App() {
	return (
		<div className="p-12">
			<div className="relative aspect-[8/16] w-80 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-cyan-500/40 ring-[16px] ring-black">
				<img
					className="absolute inset-0 h-full object-cover"
					src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1800,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_onewheeling_flying_yellow"
				/>
				{/* notch */}
				<div className="absolute inset-x-0 top-0 flex justify-center">
					<div className="h-6 w-40 rounded-b-2xl bg-black"></div>
				</div>

				{/* Content overlay */}
				<div className="absolute inset-x-0 bottom-0 grid h-[85%] items-end bg-gradient-to-t from-rose-500 via-rose-500 via-30%">
					<div className="w-1/2 pb-10 pl-6">
						<div className="grid auto-rows-min items-end">
							<h2 className="text-6xl font-extralight tracking-wide text-white">
								Kody McWheel
							</h2>
							<p className="mt-6 text-xl font-light text-white">
								Member since July 2022
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
