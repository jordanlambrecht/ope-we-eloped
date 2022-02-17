import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

const InnerWrapper = ({ id, color, children, className }) => {
  return (
    <div
      id={id}
      className={cn('max-w-md md:max-w-2xl xl:max-w-6xl mx-auto', `bg-${color}`, className)}
    >
      {children}
    </div>
  )
}

export default InnerWrapper
