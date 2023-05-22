import { StarIcon, StarProps } from '@/components'

import './rating.sass'

interface RatingProps {
  rating: number
}

function Rating ({ rating }: RatingProps) {

  const stars = 5
  const starsArray = Array.from({ length: stars }, (_, index) => index + 1)

  const starType = (rating: number, condition: number): StarProps['type'] => {
    const porcentage = Math.floor(rating * 100)
    const base = condition * 100
    const mid = base - 50

    if (porcentage >= base) return 'fill'
    else if (porcentage >= mid) return 'mid'
    else return 'emply'
  }

  return (
    <div className='rating-cont'>
      {starsArray.map((star) =>
        <StarIcon key={star} type={starType(rating, star)} className='star' />
      )}
      <h4 className='text-lg'>{rating}</h4>
    </div>
  )
}

export default Rating