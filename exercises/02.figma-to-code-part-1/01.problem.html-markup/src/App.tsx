import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<>
			{/* 🐨 Add the <EpicStackLogo with a width and height of level 20 */}

			{/* 🐨 Add an `h1` tag that says "The Epic Stack" */}

			{/* 
				🐨 Add a paragraph that says: 
				"Check the Getting Started guide file for how to get your project off the ground!"
				The "Getting Started guide" should be a link to the GETTING_STARTED_URL.
			*/}

			{/* 
				🐨 
				1.Add an `ul` for the logos list.
				2. Iterate over the `logos` array and render an `li` for each logo.
				3. Each `li` should have an `a` with an `href` attribute set to the logo's `href`.
				4. Inside the `a`, render an `img` with a `src` attribute set to the logo's `src`.

				To avoid the images being GIANT, let's add a `className` of "w-16" to the `img`.
			*/}
		</>
	)
}
