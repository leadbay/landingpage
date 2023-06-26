import Container from './Container'

export default function EarlyAccess() {
	return (
		<Container background="bg-violet-50" id="waitinglist">
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-x-10 px-8 py-40 sm:py-32">
				<h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-violet-900 sm:text-4xl">
					Request{' '}
					<span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
						early access
					</span>{' '}
					to leadbay
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-neutral-600">
					Empower B2B sales with ai-powered qualified leads.
				</p>
				<form className="mx-auto mt-10 flex max-w-md gap-x-4">
					<label htmlFor="email-address" className="sr-only">
						Email address
					</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autoComplete="email"
						required
						className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-6 py-4 text-base text-neutral-900 ring-2 ring-inset ring-purple-900/20 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-violet-200 sm:w-64  sm:leading-6 xl:w-full"
						placeholder="Enter your email"
					/>
					<button
						type="submit"
						className="group flex items-center gap-3 rounded-md bg-violet-800 px-6 py-4 font-semibold text-white transition duration-150 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
					>
						Join
					</button>
				</form>
			</div>
		</Container>
	)
}
