import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

export default function App() {
	return (
		<div className="grid justify-start gap-8 p-8">
			<h1 className="font-poppins text-2xl">
				Let's build something{' '}
				<span className="text-highlight font-bold">epic</span>!
			</h1>

			<pre className="rounded-xl bg-slate-100 px-6 py-4 font-semibold leading-relaxed text-slate-800 shadow">
				{JSON.stringify(theme.screens, null, 2)}
			</pre>
		</div>
	)
}
