import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind CSS.',
}

// Profile card component
export default function UserProfile() {
	return (
		<div className="font-comfortaa grid min-h-screen place-items-center bg-cyan-400 p-6">
			<div className="group relative w-full max-w-sm md:h-[300px] md:w-[640px] md:max-w-none">
				{/* Stack effect */}
				<div className="absolute inset-2 translate-y-4 rounded-xl bg-white opacity-60 ring-1 ring-black/5 duration-300 group-hover:translate-y-3 md:-translate-x-4 md:translate-y-0 md:group-hover:-translate-x-3 md:group-hover:translate-y-0"></div>
				<div className="absolute inset-4 translate-y-8 rounded-xl bg-white opacity-30 ring-1 ring-black/5 duration-300 group-hover:translate-y-6 md:-translate-x-8 md:translate-y-0 md:group-hover:-translate-x-6 md:group-hover:translate-y-0"></div>
				{/* Main card */}
				<div className="isolate h-full rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
					<div className="flex h-full flex-col items-center md:flex-row md:items-end">
						{/* Image */}
						<div className="relative h-48 w-56 md:h-full md:w-72">
							<div className="absolute -top-24 bottom-0 left-0 right-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5 md:-bottom-6 md:-top-6 md:left-6">
								<img
									className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:-rotate-1 group-hover:scale-105"
									src="https://images.unsplash.com/photo-1597019558926-3eef445fdf60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHNrYXRlYm9hcmRlciUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
								/>
							</div>
						</div>
						{/* Content */}
						<div className="mt-4 flex flex-1 flex-col justify-end self-stretch p-6 text-center md:mt-0 md:text-left">
							<h2 className="text-4xl/10 font-bold text-cyan-950">
								Max Stylus
							</h2>
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
		</div>
	)
}
