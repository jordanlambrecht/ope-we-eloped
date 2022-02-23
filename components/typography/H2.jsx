import cn from 'classnames'

// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H2 = ({ color, children, before, className }) => {
  return (
    <div className='block mb-6 md:mb-12 md:-ml-9'>
      <span className='tracking-wider text-md block md:inline  align-top mr-4'>{before}</span>
      <h2
        className={cn(
          'tracking-wide lg:tracking-wider align-top block md:inline font-semibold max-w-md mt-0 text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-3xl leading-none md:mb-12 2xl:mb-20 pt-0 ',
          { [`text-${color}`]: color, [`text-black`]: !color },
          [`${className}`],
        )}
      >
        {children}
      </h2>
    </div>
  )
}

export default H2
