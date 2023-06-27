import { Container } from '@/components'

export default function Hero3() {
	return (
		<Container>
			<div className="mx-auto flex max-w-7xl flex-col-reverse  gap-y-12 px-6 py-24 sm:py-32 lg:flex-row-reverse lg:items-center lg:gap-x-20 lg:px-8 lg:py-40">
				<div className="w-full">
					<img width="680" height="460" src="hero3.webp" alt="" />
				</div>
				<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-violet-900 sm:text-6xl">
						<span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
							Leads discovery
						</span>
						, new highly qualified leads every week
					</h1>
					<p className="mt-6 text-lg leading-8 text-neutral-600">
						Leadbay AI will predict which leads is more aiming to close this week based on leads
						events
					</p>
				</div>
			</div>
		</Container>
	)
}
