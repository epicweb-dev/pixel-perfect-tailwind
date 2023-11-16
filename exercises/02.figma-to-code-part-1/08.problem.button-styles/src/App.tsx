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
			<div className="w-full max-w-sm rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
				<div className="flex h-full flex-col items-center">
					{/* Image */}
					<img
						className="-mt-24 h-72 w-56 rounded-xl object-cover shadow-2xl ring-1 ring-black/5"
						src={user.profileImage}
					/>
					{/* Content */}
					<div className="mt-4 flex flex-1 flex-col justify-end self-stretch p-6 text-center">
						<h2 className="text-4xl/10 font-bold text-cyan-950">{user.name}</h2>
						<p className="mt-2 text-cyan-950/80">
							Joined in {user.registeredIn}
						</p>
						{/* 🐨 Implement the button styles as per the design */}
						<a href="#">View all {user.notesCount} notes</a>
					</div>
				</div>
			</div>
		</div>
	)
}
