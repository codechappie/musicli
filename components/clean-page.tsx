import Head from 'next/head'

interface Props {
	title?: string
	children: React.ReactNode
}

const CleanPage = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Watssy | {title}</title>
			</Head>
		) : null}

		<main>
			<div>{children}</div>
		</main>
	</>
)

export default CleanPage
