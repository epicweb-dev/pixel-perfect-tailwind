import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind.',
}

export default function UserProfile() {
	return (
		<div className="pb-20 pt-48">
			<div className="mx-auto max-w-md rounded-3xl bg-slate-100 px-8 text-center shadow-lg ring-1 ring-slate-300">
				<header className="flex flex-col items-center">
					<img
						src={user.avatarUrl}
						alt={`avatar for ${user.name}`}
						className="-mt-20 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-slate-300 ring-offset-[6px]"
					/>
					<h1 className="mt-8 text-3xl text-slate-900">{user.name}</h1>
					<p className="mt-2 text-slate-500">Joined on {user.registerDate}</p>
				</header>
				<p className="text-pretty mt-8 text-lg text-slate-900">{user.bio}</p>
				{/* 🐨 
					1. Replace the vertical padding level `16` on the `<footer>` element with a `margin-top` level `16`.
				
					2.Add a `slate-300` `border-top` of `1px` to the `<footer>`.
				*/}
				<footer className="py-16">
					{/* 🐨 Delete all existing classes on the `<a>` element. Instead...

							1. Make the link text `slate-900` and `semibold`.					

							2. Add a horizontal padding of level `8` and a vertical padding of level `6`.

							3. Set the `display` to `block`.

							4. Set a white background, and change it to `slate-100` on hover. Add a `transition` class too!

							5. Add a `border-bottom-radius` of `3xl`.
					*/}
					<a
						href="#"
						className="ring-ring inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white outline-none ring-offset-2 ring-offset-white transition-colors focus-within:ring-4 hover:bg-slate-900/80 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
					>
						Read notes
					</a>
				</footer>
			</div>
		</div>
	)
}
