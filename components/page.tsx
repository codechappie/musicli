import Head from 'next/head';

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => {
	
	return (
		<>
			{title ? (
				<Head>
					<title>SimpleCMD | {title}</title>
				</Head>
			) : null}

			<main id="main-app">
				{children}
			</main>
		</>
	)
}

export default Page
