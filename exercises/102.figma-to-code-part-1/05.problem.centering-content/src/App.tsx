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
				{/* 
					🐨 Center the card's content horizontally. 
					Keep in mind what's happening on the 
					desktop version of the design that 
					we will be building next!
				*/}
				<img src={user.profileImage} className="w-56" />
				<h2>{user.name}</h2>
				<p>Joined in {user.registeredIn}</p>
				<a href="#">View all {user.notesCount} notes</a>
			</div>
		</div>
	)
}
