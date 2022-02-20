import React, { useState } from 'react'

export default function RSVP() {
  const [count, setCount] = useState(1)
  const maxGuests = 10
  const minGuests = 1

  const handleCount = (e) => {
    if (e > maxGuests) {
      setCount(maxGuests)
    } else if (e < minGuests) {
      setCount(minGuests)
    } else setCount(e)
  }

  const decrementCount = () => {
    if (count > minGuests) setCount(count - 1)
  }

  const incrementCount = () => {
    if (count < maxGuests) setCount(count + 1)
    else if (count > maxGuests) setCount(maxGuests)
  }

  return (
    <form>
      <div className='flex gap-3 py-4 my-3'>
        <input
          type='button'
          onClick={() => decrementCount()}
          value='-'
          className='cursor-pointer'
        />
        <input
          required
          type='number'
          name='counter'
          value={count}
          onChange={(event) => {
            handleCount(event.target.value)
          }}
        />
        <input
          type='button'
          onClick={() => incrementCount()}
          value='+'
          className='cursor-pointer'
        />
      </div>
    </form>
  )
}
