import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'

export default function RequestAccess() {
	return (
		<form className="mt-6 sm:flex sm:max-w-md" name="waitinglist" method="POST" data-netlify="true">
			<label htmlFor="email-address" className="sr-only">
				Email address
			</label>
			<input
				type="email"
				name="email-address"
				id="waitinglist-email-address"
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
	)
}
