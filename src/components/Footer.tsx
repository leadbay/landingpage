import Container from './Container'

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
		<footer className="bg-violet-950" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="grid grid-cols-2 gap-8 sm:col-span-2">
					<div className="col-span-2 grid grid-cols-2 gap-8 sm:col-span-1">
						<div className="sm:col-span-2 sm:grid-cols-2 md:grid md:gap-8">
							<div>
								<h3 className="font-semibold leading-6 text-violet-50">About us</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.aboutus.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="leading-6 text-violet-200/70 hover:text-violet-200"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="font-semibold leading-6 text-violet-50">Can't wait?</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.cantwait.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="leading-6 text-violet-200/70 hover:text-violet-200"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="xl:mt-0">
						<h3 className="font-semibold leading-6 text-violet-50">Subscribe to our newsletter</h3>
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
								className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-6 py-4 text-base text-white  ring-2 ring-inset ring-white/10 placeholder:text-violet-200 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:w-64 sm:sm:leading-6 xl:w-full"
								placeholder="Email address"
							/>
							<div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
								<button
									type="submit"
									className="flex w-full items-center justify-center rounded-md bg-violet-200 px-6 py-4 font-semibold text-violet-900  hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-16 border-t border-purple-200/20 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
					<p className="mt-8 text-sm leading-5 text-white/30 md:order-1 md:mt-0">
						&copy; 2023 Leadbay. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
