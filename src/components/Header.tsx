import { Container } from '@/components'

export default function Header() {
	return (
		<Container>
			<header className="flex items-center p-6">
				<h1 className="font-display text-4xl text-violet-150">leadbay</h1>
				<ul className="ml-auto hidden space-x-8 font-semibold text-violet-800 sm:flex">
					<li>
						<a className="hover:text-violet-500" href="#features">
							Features
						</a>
					</li>
					<li>
						<a className="hover:text-violet-500" href="#waitinglist">
							Request access
						</a>
					</li>
				</ul>
			</header>
		</Container>
	)
}
