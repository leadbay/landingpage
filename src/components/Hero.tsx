import { Container, RequestAccess } from '@/components'

export default function Hero() {
	return (
		<Container>
			<div className="mx-auto max-w-7xl gap-x-16 px-6 py-16 sm:py-24 lg:flex lg:items-center lg:px-8 lg:py-40">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-violet-900 sm:text-6xl">
						Engage with the right lead at the{' '}
						<span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
							right time
						</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-neutral-600">
						Lead supply and behavioral targeting for B2B sales.
					</p>
					<div className="mt-10 flex items-center gap-x-6">
						<RequestAccess />
					</div>
				</div>
				<div
					className="sm:-top-800 -top-400 absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-500 via-pink-500 to-violet-500 opacity-30 sm:left-[calc(50%-50rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
					/>
				</div>
				<div className="w-full">
					<img width="680" height="460" src="hero.png" alt="" />
				</div>
			</div>
		</Container>
	)
}
