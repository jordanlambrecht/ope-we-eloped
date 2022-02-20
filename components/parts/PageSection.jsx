import cn from 'classnames'

export default function PageSection({ className, children, color, id }) {
  return (
    <section className={cn('py-8 px-8 lg:py-24', `bg-${color}`)} id={id}>
      {children}
    </section>
  )
}
