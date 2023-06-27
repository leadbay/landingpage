import { Container } from '@/components'

export default function Hero2() {
	return (
		<Container className="bg-violet-50" background="bg-violet-50" id="features">
			<div className="mx-auto flex max-w-7xl flex-col-reverse  gap-y-12 px-6 py-24 sm:py-32 lg:flex-row lg:items-center lg:gap-x-20 lg:px-8 lg:py-40">
				<div className="w-full">
					<img width="680" height="460" src="hero2.webp" alt="" />
				</div>
				<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-violet-900 sm:text-6xl">
						Parameter your Ideal Customer Profile with{' '}
						<span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
							Leadbay&nbsp;AI
						</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-neutral-600">
						Define your target personas, connect with your current database, cherry-pick your sample
						clients, and let leadbay extrapolate to find lookalikes.
					</p>
				</div>
			</div>
		</Container>
	)
}
