import Container from './Container'

export default function Clients() {
	return (
		<Container className="flex flex-col items-center space-y-20 pb-20">
			<p
				className="
      max-w-3xl text-center text-2xl font-bold tracking-tight text-violet-900 sm:text-3xl"
			>
				Built with sales in 200+ mid-market B2B companies
			</p>
			<div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-12 grayscale sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
				<img
					className="col-span-1 max-h-10 w-full object-contain"
					src="backmarket.svg"
					alt="Backmarket"
					width={158}
					height={48}
				/>
				<img
					className="col-span-1 max-h-10 w-full object-contain"
					src="actiondesk.svg"
					alt="Actiondesk"
					width={158}
					height={48}
				/>
				<img
					className="col-span-1 max-h-10 w-full object-contain"
					src="swile.svg"
					alt="Swile"
					width={158}
					height={48}
				/>
				<img
					className="col-span-1 max-h-10 w-full object-contain"
					src="fleet.svg"
					alt="Fleet"
					width={158}
					height={48}
				/>
				<img
					className="col-span-1 max-h-10 w-full object-contain"
					src="alma.svg"
					alt="Alma"
					width={158}
					height={48}
				/>
				<img
					className="col-span-1 max-h-10 w-full object-contain"
					src="pennylane.svg"
					alt="Pennylane"
					width={158}
					height={48}
				/>
				<img
					className="col-span-1 col-start-2 max-h-10 w-full object-contain lg:col-start-auto"
					src="bottl.svg"
					alt="Bottl"
					width={158}
					height={48}
				/>
			</div>
		</Container>
	)
}
