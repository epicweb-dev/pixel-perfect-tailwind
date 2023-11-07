import profileImage from "./assets/avatar.png";

// User data
const user = {
  name: "Jessy Styles",
  avatarUrl: profileImage,
  registerDate: "10/31/2023",
  bio: "Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind CSS.",
};

// Profile card component
export default function UserProfile() {
  return (
    <div className="space-y-4">
      <div className="pb-20 pt-48">
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
          <p className="mt-2 text-center text-xl">{user.bio}</p>
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

      {/* After */}
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-300">
        <div className="mt-32 border-t border-slate-300 bg-gradient-to-b from-slate-200/50 to-white">
          <header className="flex flex-col items-center px-8">
            <img
              src={user.avatarUrl}
              alt="Simon Vrachliotis"
              className="-mt-20 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-slate-300 ring-offset-[6px]"
            />
            <h1 className="mt-8 text-center text-3xl">{user.name}</h1>
            <p className="mt-2 text-center text-slate-500">
              Joined on {user.registerDate}
            </p>
          </header>
          {user.bio && (
            <p className="mt-8 px-8 text-lg text-slate-900">{user.bio}</p>
          )}
        </div>
        <footer className="mt-10 border-t border-slate-300">
          <a
            href="#"
            className="duration-50 block px-8 py-6 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Read notes
          </a>
        </footer>
      </div>
    </div>
  );
  // return (
  //   <div className="py-20">
  //     <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/10">
  //       <div className="mt-28 border-t border-slate-200 bg-slate-100">
  //         <header className="flex flex-col items-center px-8">
  //           <img
  //             src={user.avatarUrl}
  //             alt="Simon Vrachliotis"
  //             className="-mt-16 h-32 w-32 rounded-full object-cover shadow-md ring-1 ring-black/10 ring-offset-4"
  //           />
  //           <h1 className="mt-8 text-center text-3xl">{user.name}</h1>
  //           <p className="mt-2 text-center text-slate-500">
  //             Joined on {user.registerDate}
  //           </p>
  //         </header>
  //         {user.bio && (
  //           <p className="mt-8 px-8 text-lg text-slate-900">{user.bio}</p>
  //         )}
  //         <footer className="mt-10 border-t border-slate-200">
  //           <a
  //             href="#"
  //             className="duration-50 block px-8 py-6 text-center font-semibold text-slate-900 transition hover:bg-white"
  //           >
  //             Read notes
  //           </a>
  //         </footer>
  //       </div>
  //     </div>
  //   </div>
  // );
}
