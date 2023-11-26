import image from './assets/sunset-skateboard.jpg'

const user = {
	name: 'Max Stylus',
	registeredIn: 'September 2022',
	profileImage: image,
	notesCount: 5,
}

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center bg-cyan-400 p-6">
			<div className="w-full max-w-sm rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
				<div className="flex flex-col items-center">
					<img
						className="-mt-24 h-72 w-56 rounded-xl object-cover shadow-2xl ring-1 ring-black/5"
						src={user.profileImage}
					/>
					<div className="p-6 text-center">
						<h2 className="mt-6 text-4xl/10 font-bold text-cyan-950">
							{user.name}
						</h2>
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
