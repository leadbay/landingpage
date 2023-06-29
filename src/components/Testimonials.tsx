import { Container } from '@/components'

export default function Testimonials() {
	const testimonials = [
		{
			body: "There are events we can't prevent, like the sales impact of the PS5 release. With Leadbay, I'll be able to predict those events and buy from the right suppliers, at the right time.",
			author: {
				name: 'Hugo De Villeplée',
				position: 'Key Account Manager',
				company: 'Backmarket'
			}
		},
		{
			body: "With current tools, it is now easy to launch new campaigns and close leads. However, it's not so easy to define my Ideal Customer Profile (ICP) and get a list of contacts ready to buy my product. That's why I am looking forward to adding Leadbay to my sales suite.",
			author: {
				name: 'Louis Adam',
				position: 'Chief of Staff',
				company: 'ActionDesk'
			}
		},
		{
			body: 'I want to see which leads came to my website, just as I can see which leads came to my LinkedIn profile.',
			author: {
				name: 'Sanja Zjalic',
				position: 'Senior Sales Manager',
				company: 'Bilobay'
			}
		},
		{
			body: "Using my mail campaigns, I can't connect and close with my entire market. Leadbay will help me get in touch with the right leads at the right time.",
			author: {
				name: 'Diane Roy',
				position: 'Business Developer',
				company: 'Bottl'
			}
		}
	]

	return (
		<Container className="flex flex-col items-center space-y-20 py-20">
			<div className="mx-auto max-w-xl text-center">
				<p
					className="my-10
      max-w-md text-center text-2xl font-bold tracking-tight text-violet-900 sm:text-3xl"
				>
					Sales already love us
				</p>
			</div>
			<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
				<div className="-mt-8 grid grid-cols-1 sm:-mx-4 sm:grid-cols-2 sm:text-[0] lg:grid-cols-4">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.author.company}
							className="col-span-1 pt-8 sm:inline-block sm:w-full sm:px-4"
						>
							<figure className="z-5 relative rounded-md bg-violet-50 p-8 pt-10 text-base leading-6  shadow-purple-900/10">
								<blockquote className="relative z-20 text-lg text-violet-900">
									<p>{`“${testimonial.body}”`}</p>
								</blockquote>
								<figcaption className="mt-6 flex items-center gap-x-4">
									<div>
										<div className="font-semibold text-violet-700">{testimonial.author.name}</div>
										<div className="text-sm font-bold leading-6 tracking-tight text-violet-900">
											{`${testimonial.author.position} at
                      ${testimonial.author.company}`}
										</div>
									</div>
								</figcaption>
								<svg
									width="185"
									height="136"
									viewBox="0 0 185 136"
									fill="none"
									className="absolute -left-2  -top-4 z-10 h-12 w-12 fill-white stroke-violet-200"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M72.4765 2.27997V1.14719L71.3525 1.28769C30.0333 6.45261 1.12805 40.0455 1.12805 83.3565C1.12805 98.8381 5.51547 111.576 13.0288 120.461C20.5524 129.359 31.1596 134.328 43.4312 134.328C54.8919 134.328 64.5911 130.286 71.4254 123.32C78.2579 116.356 82.1649 106.534 82.1649 95.0845C82.1649 83.8992 78.519 74.8415 72.4498 68.5744C66.3812 62.3079 57.9554 58.9004 48.5303 58.9004C43.4162 58.9004 39.1208 59.7303 35.287 61.0206C36.0806 44.5332 50.5892 31.6591 71.6594 27.739L72.4765 27.587V26.7559V2.27997ZM173.44 2.27997V1.14719L172.316 1.28769C130.996 6.45261 102.091 40.0455 102.091 83.3565C102.091 98.8381 106.479 111.576 113.992 120.461C121.516 129.359 132.123 134.328 144.394 134.328C155.855 134.328 165.554 130.286 172.389 123.32C179.221 116.356 183.128 106.534 183.128 95.0845C183.128 83.8891 179.348 74.8302 173.15 68.5667C166.956 62.3063 158.407 58.9004 148.984 58.9004C143.908 58.9004 139.608 59.7181 135.747 61.3746C136.629 44.4813 151.592 31.6518 172.623 27.739L173.44 27.587V26.7559V2.27997Z"
										strokeWidth="4"
									/>
								</svg>
							</figure>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}
