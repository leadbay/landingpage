import Container from './Container'

export default function Hero() {
	return (
		<Container>
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
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
						<form
							className="sm:flex sm:max-w-md"
							name="waitinglist"
							method="POST"
							data-netlify="true"
						>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								type="email"
								name="email-address"
								id="email-address"
								autoComplete="email"
								required
								className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-6 py-4 text-base text-neutral-900 ring-2 ring-inset ring-neutral-200 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-violet-200 sm:w-64  sm:leading-6 xl:w-full"
								placeholder="Enter your email"
							/>
							<div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
								<button
									type="submit"
									className="group flex items-center gap-3 rounded-md bg-violet-800 px-6 py-4 font-semibold text-white  transition duration-150 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
								>
									Request access{' '}
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										className="fill-white"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M5 10C5 9.58579 5.33579 9.25 5.75 9.25H12.3879L10.2302 7.29063C9.93159 7.00353 9.92228 6.52875 10.2094 6.23017C10.4965 5.93159 10.9713 5.92228 11.2698 6.20938L14.7698 9.45938C14.9169 9.60078 15 9.79599 15 10C15 10.204 14.9169 10.3992 14.7698 10.5406L11.2698 13.7906C10.9713 14.0777 10.4965 14.0684 10.2094 13.7698C9.92228 13.4713 9.93159 12.9965 10.2302 12.7094L12.3879 10.75H5.75C5.33579 10.75 5 10.4142 5 10Z"
										/>
									</svg>
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
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-500 via-pink-500 to-violet-500 opacity-30 sm:left-[calc(50%-50rem)] sm:w-[72.1875rem]"
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
