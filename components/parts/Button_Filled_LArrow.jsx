import Link from 'next/link'
import cn from 'classnames'
import { usePlausible } from 'next-plausible'

function Button_Filled_LArrow({ url, text, className }) {
  const plausible = usePlausible()

  const handleButtonClick = () => {
    plausible('Button Click', { props: { buttonText: text, buttonType: 'Left Arrow' } })
  }

  return (
    <Link
      href={url}
      passHref
      className={cn(
        'text-center inline-block mt-4 font-medium rounded-md text-lg px-6 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95',
        className,
      )}
      onClick={handleButtonClick}
    >
      ← {` ${text}`}
    </Link>
  )
}
export default Button_Filled_LArrow
