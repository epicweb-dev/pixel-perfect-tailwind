import image from './assets/sunset-skateboard.jpg'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center bg-cyan-400 p-6 font-comfortaa">
			{/* 
				🐨 Adjust the card layout for the "desktop" design
			*/}
			<div className="w-full max-w-sm rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
				<div className="flex h-full flex-col items-center">
					{/* Image */}
					<div className="relative h-48 w-56">
						<div className="absolute -top-24 bottom-0 left-0 right-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5">
							<img
								className="absolute inset-0 h-full w-full object-cover transition duration-300"
								src={image}
							/>
						</div>
					</div>
					{/* Content */}
					<div className="mt-4 flex flex-1 flex-col justify-end self-stretch p-6 text-center">
						<h2 className="text-4xl/10 font-bold text-cyan-950">Max Stylus</h2>
						<p className="mt-2 text-cyan-950/80">Joined in September 2022</p>
						<a
							href="#"
							className="mt-4 flex items-center justify-center gap-2 rounded-md bg-cyan-100 p-4 text-cyan-950 hover:bg-cyan-200"
						>
							<span>View all</span>
							<span className="text-2xl font-bold text-cyan-950/75">5</span>
							<span>notes</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
