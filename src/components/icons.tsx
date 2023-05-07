interface SvgProps {
  className: string
}

export function LogoIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
      className={className}

    >
      <rect
        fill="#576CBC"
        fillOpacity="0.2"
        rx="14"
        width='28'
        height='28'
      />
      <path
        stroke="#576CBC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth='2'
        d="M9.5 6.5l-2.25 3V20a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V9.5l-2.25-3h-9zM7.25 9.5h13.5M17 12.5a3 3 0 01-6 0"
      />
    </svg>
  )
}

export function ShoppingCardIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.333 25.667a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM22.167 25.667a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM2.392 2.392h2.333l3.103 14.49a2.334 2.334 0 002.334 1.843h11.41a2.333 2.333 0 002.275-1.832l1.925-8.668H5.973"
      ></path>
    </svg>
  )
}

export function SearchIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
      ></path>
    </svg>
  )
}

export function MoonIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a6.364 6.364 0 009 9 9 9 0 11-9-9z"
      ></path>
    </svg>
  )
}

export function SunIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16a4 4 0 100-8 4 4 0 000 8zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
      ></path>
    </svg>

  )
}

export function FilterIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
      ></path>
    </svg>
  )
}

export function CloseIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 6L6 18M6 6l12 12"
      ></path>
    </svg>
  )
}

export function DoneIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 6L9 17l-5-5"
      ></path>
    </svg>
  )
}

export function ChevronDownIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 9l6 6 6-6'
      ></path>
    </svg>
  )
}

export function RotateIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      className={className}
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
    >
      <path d='M3 2v6h6'></path>
      <path d='M3 13a9 9 0 103-7.7L3 8'></path>
    </svg>
  )
}

export function BanIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      className={className}
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
    >
      <circle cx='12' cy='12' r='10'></circle>
      <path d='M4.93 4.93L19.07 19.07'></path>
    </svg>
  )

}

export function ArrowLeftIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}

      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M19 12L5 12"></path>
      <path d="M12 19L5 12 12 5"></path>
    </svg>
  )
}

export function StarFillIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      ></path>
    </svg>
  )
}

export function StartMidIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M5.82 21.02L12 17.77V2L8.91 8.26 2 9.27l5 4.87-1.18 6.88z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77M12 2L8.91 8.26 2 9.27l5 4.87-1.18 6.88L12 17.77M12 2v15.77"
      ></path>
    </svg>
  )
}

export function StartIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      ></path>
    </svg>
  )
}

export function TrashIcon ({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      fill="none"
      stroke="currentColor"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
      <path d="M10 11L10 17"></path>
      <path d="M14 11L14 17"></path>
    </svg>
  )
}