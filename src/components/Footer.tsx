import { Container } from '@/components'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

const navigation = {
	aboutus: [
		{ name: 'Home', href: '#' },
		{ name: 'Features', href: '#features' },
		{ name: 'Waiting list', href: '#waitinglist' }
	],
	cantwait: [
		{
			name: "Ludo's blog",
			href: 'https://ludogranger.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile'
		},
		{
			name: 'User research',
			href: 'https://milstan.typeform.com/to/TVsi3Afc?_gl=1*fog3cr*_ga*NzIwNjI5NzE2LjE2ODI0Mzc4OTA.*_ga_N6F0VDRT9W*MTY4MzI4Mjc2Ny4xNi4xLjE2ODMyODI3OTEuMzYuMC4w*_ga_YBVHZJ5VPC*MTY4MzI4Mjc2Ny4xMi4xLjE2ODMyODI3OTEuMzYuMC4w&typeform-source=admin.typeform.com'
		}
	]
}

export default function Footer() {
	return (
		<footer aria-labelledby="footer-heading">
			<Container>
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>
				<div className="flex flex-col ">
					<div className="flex flex-col gap-12 px-8 py-16 sm:flex-row">
						<div className="flex sm:w-1/2 sm:gap-16">
							<div className="w-1/2 sm:w-auto">
								<h3 className="font-semibold leading-6 text-violet-50">Can't wait?</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.cantwait.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="leading-6 text-violet-200/70 hover:text-violet-200"
												target="_blank"
												rel="noreferrer"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="w-full sm:w-1/2">
							<h3 className="font-semibold leading-6 text-violet-50">
								Subscribe to our newsletter
							</h3>
							<p className="mt-2 leading-6 text-violet-200/70">
								Monthly digest of what's new and exciting from us.
							</p>
							<form
								className="mt-6 sm:flex sm:max-w-md"
								name="newsletter"
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
									className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-6 py-4 text-base text-white ring-2 ring-inset  ring-white/10 duration-200 placeholder:text-violet-200 hover:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:w-64 sm:sm:leading-6 xl:w-full"
									placeholder="Email address"
								/>
								<div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
									<button
										type="submit"
										className=" flex w-full transform items-center justify-center space-x-2 rounded-md bg-violet-200 px-6 py-4 font-semibold text-violet-900 transition duration-200 hover:translate-x-1 hover:bg-white focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 motion-reduce:transition-none motion-reduce:hover:transform-none"
									>
										Subscribe
										<PaperAirplaneIcon className="ml-2 h-6 w-6 text-violet-900" />
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="border-t border-violet-200/10 p-8 md:flex md:items-center md:justify-between">
						<p className="text-sm leading-5 text-violet-50/30 md:order-1 md:mt-0">
							&copy; 2023 Leadbay. All rights reserved.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}
