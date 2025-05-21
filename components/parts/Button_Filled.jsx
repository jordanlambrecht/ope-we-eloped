import Link from 'next/link'
import cn from 'classnames'
function Button_Filled({ url, text, className }) {
  return (
    <Link
      href={url}
      passHref
      className={cn(
        'text-center inline-block mt-4 font-medium rounded-md text-lg px-6 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95',
        [`${className}`],
      )}
      rel='noOpener'
      target={'_blank'}
    >
      {` ${text}`} →
    </Link>
  )
}

export default Button_Filled
