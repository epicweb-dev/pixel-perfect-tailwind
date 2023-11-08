import profileImage from "./assets/avatar.png";

// User data
const user = {
  name: "Jessy Styles",
  avatarUrl: profileImage,
  registerDate: "10/31/2023",
  bio: "Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind CSS.",
};

export default function UserProfile() {
  return (
    <div className="pb-20 pt-48">
      {/* 
					🐨 Remove the `container` class and use a narrower max-width utility 
					instead. Make sure you keep the profile card centered on the page.
				*/}
      <div className="mx-auto max-w-7xl rounded-3xl bg-slate-100 px-4">
        <header className="flex flex-col items-center">
          <img
            src={user.avatarUrl}
            alt={`Avatar for ${user.name}`}
            className="-mt-28 h-56 w-56 rounded-full object-cover"
          />
          <h1 className="mt-1 text-center text-5xl font-extrabold">
            {user.name}
          </h1>
          <p className="mt-1 text-center">Joined on {user.registerDate}</p>
        </header>
        <p className="mt-2 px-4 text-center text-xl">{user.bio}</p>
        <footer className="py-16 text-center">
          <a
            href="#"
            className="ring-ring inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white outline-none ring-offset-2 ring-offset-white transition-colors focus-within:ring-4 hover:bg-slate-900/80 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
          >
            Read notes
          </a>
        </footer>
      </div>
    </div>
  );
}
