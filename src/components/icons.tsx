import React from 'react'

interface svgProps {
  className: string
}

export function LogoIcon ({ className }: svgProps) {
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

export function ShoppingCardIcon ({ className }: svgProps) {
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

export function SearchIcon ({ className }: svgProps) {
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

export function MoonIcon ({ className }: svgProps) {
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

export function SunIcon ({ className }: svgProps) {
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

export function FilterIcon ({ className }: svgProps) {
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

export function CloseIcon ({ className }: svgProps) {
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

export function DoneIcon ({ className }: svgProps) {
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

export function ChevronDownIcon ({ className }: svgProps) {
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