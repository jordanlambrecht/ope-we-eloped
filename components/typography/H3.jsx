import cn from 'classnames'

// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H3 = ({ color, children, before, className }) => {
  return (
    <h3
      className={cn(
        'tracking-wider align-top block font-light max-w-md mt-0 text-3xl sm:text-3xl md:text-4xl 2xl:text-5xl 2xl:max-w-3xl leading-none mb-4 2xl:mb-6 ',
        { [`text-${color}`]: color, [`text-black`]: !color },
        [`${className}`],
      )}
    >
      {children}
    </h3>
  )
}

export default H3
