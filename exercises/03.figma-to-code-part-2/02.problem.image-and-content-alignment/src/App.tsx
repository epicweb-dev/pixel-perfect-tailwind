import image from './assets/sunset-skateboard.jpg'

const user = {
	name: 'Max Stylus',
	registeredIn: 'September 2022',
	profileImage: image,
	notesCount: 5,
}

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center bg-cyan-400 p-6 font-comfortaa">
			{/* 
				🐨 Create a "card stack" effect according to the design 
			*/}
			<div className="w-full max-w-sm rounded-xl bg-white shadow-2xl ring-1 ring-black/5 md:h-[300px] md:w-[640px] md:max-w-none">
				<div className="flex h-full flex-col items-center md:flex-row md:items-end">
					{/* Image */}
					<div className="relative h-48 w-56">
						<div className="absolute -top-24 bottom-0 left-0 right-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5">
							<img
								className="absolute inset-0 h-full w-full object-cover"
								src={user.profileImage}
							/>
						</div>
					</div>
					{/* Content */}
					<div className="mt-4 flex flex-1 flex-col justify-end self-stretch p-6 text-center">
						<h2 className="text-4xl/10 font-bold text-cyan-950">{user.name}</h2>
						<p className="mt-2 text-cyan-950/80">
							Joined in {user.registeredIn}
						</p>
						<a
							href="#"
							className="mt-4 flex items-center justify-center gap-2 rounded-md bg-cyan-100 p-4 text-cyan-950 hover:bg-cyan-200"
						>
							<span>View all</span>
							<span className="text-2xl font-bold text-cyan-950/75">
								{user.notesCount}
							</span>
							<span>notes</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
