import Head from 'next/head';
import TerminalInput from './terminal-input/TerminalInput';

interface Props {
	title?: string
	children: React.ReactNode
}

const TerminalPage = ({ title, children }: Props) => {
	
	return (
		<>
			{title ? (
				<Head>
					<title>SimpleCMD | {title}</title>
				</Head>
			) : null}

			<main id="musicli-app">
				<section className='screen-terminal'>
					<div className="screen-terminal__header">
						<div className="action-btn close"></div>
						<div className="action-btn minify"></div>
						<div className="action-btn expand"></div>
					</div>
					<label className="screen-terminal__container">
						{children}
						<div id="commands" className="commands"></div>
						<TerminalInput />
					</label>
					<div className="screen-terminal__footer">
						footer content
					</div>
					<div id="hidden-player" className='hidden-music-player'></div>
				</section>
			</main>
		</>
	)
}

export default TerminalPage