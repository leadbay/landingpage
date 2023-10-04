const BurgerIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='38'
      height='22'
      viewBox='0 0 38 22'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='38' height='4' rx='1' fill='currentColor' />
      <path
        d='M0 10C0 9.44772 0.447715 9 1 9H37C37.5523 9 38 9.44772 38 10V12C38 12.5523 37.5523 13 37 13H1C0.447716 13 0 12.5523 0 12V10Z'
        fill='currentColor'
      />
      <rect y='18' width='38' height='4' rx='1' fill='currentColor' />
    </svg>
  )
}

export default BurgerIcon
