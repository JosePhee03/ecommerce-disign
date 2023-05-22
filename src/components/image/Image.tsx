import { MouseEventHandler } from 'react'

interface ImageProps {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  tittle?: string
  onClick?: MouseEventHandler<HTMLImageElement>
  className?: string
  loading?: 'eager' | 'lazy' | undefined
}

function Image (props: ImageProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      onClick={props.onClick}
      title={props.tittle}
      height={props.height}
      width={props.width}
      loading={props.loading}
      className={props.className}
    />
  )
}

export default Image