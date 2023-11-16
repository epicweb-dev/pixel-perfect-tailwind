import image from './assets/sunset-skateboard.jpg'

const user = {
	name: 'Max Stylus',
	registeredIn: 'September 2022',
	profileImage: image,
	notesCount: 5,
}

export default function App() {
	return (
		<>
			{/* 
				🐨 Style the background container (parentmost div). It should have:
				- a background color of `cyan-400`
				- use up at least 100% of the viewport height
				- have all-around padding of level 6
				- center its content vertically and horizontally
			*/}
			<div className="font-comfortaa">
				<div>
					<img src={user.profileImage} className="w-56" />
					<h2>{user.name}</h2>
					<p>Joined in {user.registeredIn}</p>
					<a href="#">View all {user.notesCount} notes</a>
				</div>
			</div>
		</>
	)
}
