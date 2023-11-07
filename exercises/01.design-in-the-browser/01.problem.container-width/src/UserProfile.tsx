import profileImage from './assets/avatar.png'

export default function UserProfile() {
	return (
		<div className="my-36">
			{/* 
				🐨 Remove the `container` class and use a narrower max-width utility 
				instead. Make sure you keep the profile card centered on the page.
			*/}
			<div className="container flex flex-col items-center rounded-3xl bg-slate-100 p-12">
				<div className="relative w-52">
					<div className="absolute -top-40">
						<div className="relative">
							<img
								src={profileImage}
								alt="Simon Vrachliotis"
								className="h-52 w-52 rounded-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="h-20"></div>
				<div className="flex flex-col items-center">
					<div className="flex flex-wrap items-center justify-center gap-4">
						<h1 className="text-center text-4xl">Johnny McTailwind</h1>
					</div>
					<p className="mt-2 text-center text-slate-900">Joined 10/31/2023</p>
					<p className="text-lg text-center text-slate-900 mt-1">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
						consequatur deserunt ad, reiciendis autem assumenda neque quod
						recusandae cumque quo voluptas voluptatem sed asperiores aliquam
						numquam ducimus, ratione, obcaecati amet.
					</p>
					<a
						href="#"
						className="mt-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-slate-900 underline-offset-4 hover:underline px-12 py-3 leading-3"
					>
						<span className="inline-flex items-center gap-1.5">
							<svg
								viewBox="0 0 15 15"
								fill="none"
								id="exit"
								className="w-[1.25em] h-[1.25em] inline self-center"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
									fill="currentColor"
								></path>
							</svg>
							Logout
						</span>
					</a>
					<div className="mt-10 flex gap-4">
						<a
							href="#"
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-900/80 h-10 px-4 py-2"
						>
							My notes
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-900/80 h-10 px-4 py-2"
						>
							Edit profile
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
