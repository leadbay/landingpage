export default function RequestAccess() {
	return (
		<form className="sm:flex sm:max-w-md" name="waitinglist" method="POST" data-netlify="true">
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
	)
}
