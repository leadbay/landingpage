import { Container, RequestAccess } from '@/components'

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
				<div className="mt-10 flex items-center gap-x-6">
					<RequestAccess />
				</div>
			</div>
		</Container>
	)
}
