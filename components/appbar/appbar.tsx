import Link from 'next/link'
import style from '@/components/appbar/appbar.module.scss'
const links = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Características', href: '/caracteristicas' },
	{ label: 'Como contribuir', href: '/como-contribuir' },
]

const Appbar = () => {

	return (
		<header className={style.appbar}>
			<div className={style.appbar_container}>
				<Link href='/'>
					<a className={style.logo}>
						<h1>Watssy</h1>
					</a>
				</Link>

				<div className='searcher'>
					<input type='text' placeholder='Buscar productos' />
				</div>

				<nav>
					{links.map(({ label, href }) => (
						<Link key={label} href={href}>
							<a>
								{label}
							</a>
						</Link>
					))}
				</nav>

				<div className='buttons'>
					<button className={style.shopping__cart__button}>
						cart
					</button>
				</div>
			</div>
		</header>
	)
}

export default Appbar
