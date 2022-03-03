import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

const InnerWrapper = ({ id, color, children, className }) => {
  return (
    <div
      id={id}
      className={cn(
        'max-w-md md:max-w-1xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto',
        `bg-${color}`,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default InnerWrapper
