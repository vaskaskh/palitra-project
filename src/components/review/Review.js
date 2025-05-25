import React from 'react'
import review from './../../data/review.json';
import ReviewCard from '../shared/ReviewCard';

const Review = () => {
  return (
      <div className="flex flex-wrap gap-4 justify-center"  >
        {
          review.map((user)=>(
            <ReviewCard
              key={user.id}
              {...user}
            />
          ))
        }
      </div>
  )
}

export default Review