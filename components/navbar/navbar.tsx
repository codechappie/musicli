import Link from 'next/link'
import style from '@/components/navbar/navbar.module.scss'
const links = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Características', href: '/caracteristicas' },
	{ label: 'Como contribuir', href: '/como-contribuir' },
]

const Navbar = () => {

	return (
		<header className={style.navbar}>
			<div className={style.navbar_container}>
				<Link href='/'>
					<a className={style.logo}>
						<h1>Watssy</h1>
					</a>
				</Link>

				<nav>
					{links.map(({ label, href }) => (
						<Link key={label} href={href}>
							<a>
								{label}
							</a>
						</Link>
					))}
				</nav>

				<div className="buttons">
					<button>
						<Link href='/crear-mi-tienda'>
							<a>
								<span>Crear mi tienda</span>
							</a>
						</Link>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navbar
