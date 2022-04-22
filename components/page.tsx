import Head from 'next/head';

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Lidify | {title}</title>
			</Head>
		) : null}

		<main id="lidify-app">
			{children}
		</main>
	</>
)

export default Page
