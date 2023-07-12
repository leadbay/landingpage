import { Container } from '@/components'
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'

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
						</div>
					</div>
					<div className="border-t border-violet-200/10 p-8 md:flex md:items-center md:justify-between">
						<p className="text-sm leading-5 text-violet-50/50 md:order-1 md:mt-0">
							&copy; 2023 Leadbay. All rights reserved.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}
