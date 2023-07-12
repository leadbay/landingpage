import { Container, RequestAccess } from '@/components'
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'

export default function Splash() {
	return (
		<Container>
			<div className="flex max-w-7xl flex-col items-center justify-center sm:mx-auto">
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
					<div className="mt-8 flex items-center justify-center gap-x-6">
						<form
							className="mt-6 sm:flex sm:max-w-md"
							name="waiting"
							method="POST"
							data-netlify="true"
						>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								type="email"
								name="email-address"
								id="waiting-email-address"
								autoComplete="email"
								required
								className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-6 py-4 text-base text-white ring-2 ring-inset  ring-white/10 duration-200 placeholder:text-violet-200 hover:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:w-64 sm:sm:leading-6 xl:w-full"
								placeholder="Enter your email"
							/>
							<div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
								<button
									type="submit"
									className=" flex w-full transform items-center justify-center space-x-2 rounded-md bg-violet-200 px-6 py-4 font-semibold text-violet-900 transition duration-200 hover:translate-x-1 hover:bg-white focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 motion-reduce:transition-none motion-reduce:hover:transform-none"
								>
									Request access
									<ArrowSmallRightIcon className="ml-2 h-6 w-6 text-violet-900" />
								</button>
							</div>
						</form>
					</div>
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
