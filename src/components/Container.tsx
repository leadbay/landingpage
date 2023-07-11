import clsx from 'clsx'

export default function Container({ className = '', background = '', ...props }) {
	return (
		<div className={clsx('w-full', background)}>
			<div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props} />
		</div>
	)
}
