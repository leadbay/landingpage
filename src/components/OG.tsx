import { Container } from '@/components'

export default function OG() {
	return (
		<Container>
			<div className="flex max-w-7xl flex-col items-center justify-center sm:mx-auto">
				<div className="flex h-10v items-center px-6 py-10">
					<h1 className="font-display text-7xl text-violet-100">leadbay</h1>
				</div>
				<div className="mx-auto max-w-2xl  text-center lg:mx-0 lg:flex-auto">
					<h1 className=" heading mt-10  max-w-2xl text-4xl  font-bold leading-10 text-white sm:text-6xl">
						Engage with the right lead at the{' '}
						<span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
							right time
						</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-violet-250">
						Lead supply and behavioral targeting for B2B sales.
					</p>
				</div>
				<div
					className="sm:-top-800 -top-400 absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] animate-blob bg-gradient-to-tr from-yellow-500 via-pink-500 to-violet-500 opacity-30 sm:left-[calc(50%-50rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
					/>
				</div>
			</div>
		</Container>
	)
}
