import Head from 'next/head';

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>MusiCLI | {title}</title>
			</Head>
		) : null}

		<main id="musicli-app">
			{children}
		</main>
	</>
)

export default Page
